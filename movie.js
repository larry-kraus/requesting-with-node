var request = require("request");
var myURL = 'http://www.omdbapi.com/?t=';

var get = function(movieTitle) {
	var movie = request(myURL + movieTitle, function(error, response, body) {
		var result = JSON.parse(body);
		console.log(result);
		console.log(result.title);
	});
};

module.exports = get;
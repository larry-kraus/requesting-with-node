var request = require("request");
var myURL = 'http://www.omdbapi.com/?t=';


function get(movieTitle) {
	var results = request(myURL + movieTitle);
	results = JSON.parse(results);	 
    console.log(results);
    console.log(results.title);
  		
};


get("Pulp Fiction");


//request ('http://www.omdbapi.com/?t=pulp%20fiction')


module.exports = get();
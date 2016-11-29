var get = require("./movie.js");

var threeFavouriteMovies = ["Pulp Fiction", "Inglorious Basterds", "Inception"];

threeFavouriteMovies.forEach(function(film){
	get(film);

});
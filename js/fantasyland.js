"use strict";

let attractory = require("./attractory.js");

function populateFantasyland(){
	let attractions = {};
	attractory.loadAttractions(6)
	.then((data) => {
		displayFantasylandAttractions(data);
	});
}

function displayFantasylandAttractions(dat){
	console.log("Fantasyland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateFantasyland, displayFantasylandAttractions};
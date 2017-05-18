"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateFantasyland(){
	attractory.loadAttractions(5)
	.then((data) => {
		displayFantasylandAttractions(data);
	});
}

function displayFantasylandAttractions(dat){
	$("#card--5").append(attractTemplate(dat));
	console.log("Fantasyland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateFantasyland, displayFantasylandAttractions};
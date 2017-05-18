"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateFantasyland(){
	attractory.loadAttractions(6)
	.then((data) => {
		displayFantasylandAttractions(data);
	});
}

function displayFantasylandAttractions(dat){
	let output = $(".help");
	$(".output").append(attractTemplate(dat));
	console.log("Fantasyland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateFantasyland, displayFantasylandAttractions};
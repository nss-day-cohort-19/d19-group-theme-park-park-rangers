"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateAdventureland(){
	attractory.loadAttractions(2)
	.then((data) => {
		displayAdventurelandAttractions(data);
	});
}

function displayAdventurelandAttractions(dat){
	$("#card--2").append(attractTemplate(dat));
	console.log("Adventureland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateAdventureland, displayAdventurelandAttractions};
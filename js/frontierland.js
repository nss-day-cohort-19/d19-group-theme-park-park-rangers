"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateFrontierland(){
	attractory.loadAttractions(3)
	.then((data) => {
		displayFrontierlandAttractions(data);
	});
}

function displayFrontierlandAttractions(dat){
	$("#card--3").append(attractTemplate(dat));
	console.log("Frontierland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateFrontierland, displayFrontierlandAttractions};
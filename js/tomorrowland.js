"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
    attractTemplate = require("../templates/attract.hbs");

function populateTomorrowland(){
	let attractions = {};
	attractory.loadAttractions(6)
	.then((data) => {
		displayTomorrowlandAttractions(data);
	});
}

function displayTomorrowlandAttractions(dat){
	$("#card--6").append(attractTemplate(dat));
	console.log("tomorrowland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateTomorrowland, displayTomorrowlandAttractions};
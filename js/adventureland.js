"use strict";

let attractory = require("./attractory.js"),
areaTemplate = require('../templates/main.hbs');

function populateAdventureland(){
	let attractions = {};
	attractory.loadAttractions(2)
	.then((data) => {
		displayAdventurelandAttractions(data);
	});
}

function displayAdventurelandAttractions(dat){
	console.log("Adventureland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateAdventureland, displayAdventurelandAttractions};
"use strict";

let attractory = require("./attractory.js");

function populateTomorrowland(){
	let attractions = {};
	attractory.loadAttractionTypes()
	.then((data) => {//this line passes filtered data from loadAttractionTypes to loadAttractions
		attractions = attractory.loadAttractions(6);
		displayTomorrowlandDetails(attractions);
	});
}

function displayTomorrowlandDetails(dat){

	console.log("tomorrowland attractions", dat);

}

module.exports = {populateTomorrowland, displayTomorrowlandDetails};
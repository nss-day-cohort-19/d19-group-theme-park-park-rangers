"use strict";

let attractory = require("./attractory.js");

function populateFantasyland(){
	let attractions = {};
	attractory.loadAttractionTypes()
	.then((data) => {//this line passes filtered data from loadAttractionTypes to loadAttractions
		attractions = attractory.loadAttractions(5);
		displayFantasylandDetails(attractions);
	});
}

function displayFantasylandDetails(dat){

	console.log("Fantasyland attractions", dat);

}

module.exports = {populateFantasyland, displayFantasylandDetails};
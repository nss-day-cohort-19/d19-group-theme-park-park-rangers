"use strict";

let attractory = require("./attractory.js");

function populateLibertySquareland(){
	let attractions = {};
	attractory.loadAttractionTypes()
	.then((data) => {//this line passes filtered data from loadAttractionTypes to loadAttractions
		attractions = attractory.loadAttractions(4);
		displayLibertySquarelandDetails(attractions);
	});
}

function displayLibertySquarelandDetails(dat){

	console.log("LibertySquareland attractions", dat);

}

module.exports = {populateLibertySquareland, displayLibertySquarelandDetails};
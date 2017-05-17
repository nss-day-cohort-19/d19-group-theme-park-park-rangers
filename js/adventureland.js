"use strict";

let attractory = require("./attractory.js");

function populateAdventureland(){
	let attractions = {};
	attractory.loadAttractionTypes()
	.then((data) => {//this line passes filtered data from loadAttractionTypes to loadAttractions
		attractions = attractory.loadAttractions(2);
		displayAdventurelandDetails(attractions);
	});
}

function displayAdventurelandDetails(dat){

	console.log("adventureland attractions", dat);

}

module.exports = {populateAdventureland, displayAdventurelandDetails};
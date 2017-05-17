"use strict";

let attractory = require("./attractory.js");

function populateCindrellaland(){
	let attractions = {};
	attractory.loadAttractionTypes()
	.then((data) => {//this line passes filtered data from loadAttractionTypes to loadAttractions
		attractions = attractory.loadAttractions(7);
		displayCindrellalandDetails(attractions);
	});
}

function displayCindrellalandDetails(dat){

	console.log("Cindrella attractions", dat);

}

module.exports = {populateCindrellaland, displayCindrellalandDetails};
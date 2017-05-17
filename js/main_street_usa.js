"use strict";

let attractory = require("./attractory.js");

function populateMainStreet(){
	let attractions = {};
	attractory.loadAttractionTypes()
	.then((data) => {//this line passes filtered data from loadAttractionTypes to loadAttractions
		attractions = attractory.loadAttractions(1);
		displayMainStreetDetails(attractions);
	});
}

function displayMainStreetDetails(dat){

	console.log("MainStreet attractions", dat);

}

module.exports = {populateMainStreet, displayMainStreetDetails};
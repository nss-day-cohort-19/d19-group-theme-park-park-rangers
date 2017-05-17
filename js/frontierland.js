"use strict";

let attractory = require("./attractory.js");

function populateFrontierland(){
	let attractions = {};
	attractory.loadAttractionTypes()
	.then((data) => {//this line passes filtered data from loadAttractionTypes to loadAttractions
		attractions = attractory.loadAttractions(3);
		displayFrontierlandDetails(attractions);
	});
}

function displayFrontierlandDetails(dat){

	console.log("Frontierland attractions", dat);

}

module.exports = {populateFrontierland, displayFrontierlandDetails};
"use strict";

let attractory = require("./attractory.js");

function populateTomorrowland(){
	let attractions = {};
	//attractory.loadAttractions for tomorrowland 
	//where area_id = 6 and type_id in 1 (ride), 2(restaurant), 3(show) and 5(character meet)
	attractory.loadAttractionTypes()
	.then((data) => {//this line passes filtered data from loadAttractionTypes to loadAttractions
		attractions = attractory.loadAttractions(6);
		displayTomorrowlandAttractions(attractions);
	});
}

function displayTomorrowlandAttractions(dat){
	console.log("tomorrowland attractions", dat);

}

module.exports = {populateTomorrowland, displayTomorrowlandAttractions};
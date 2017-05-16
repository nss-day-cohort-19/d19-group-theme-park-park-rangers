"use strict";

let attractory = require("./attractory.js");

function populateTomorrowland(){
	//attractory.loadAttractions for tomorrowland 
	//where area_id = 6 and type_id in 1 (ride), 2(restaurant), 3(show) and 5(character meet)
	attractory.loadAttractions(6).then((data) => {
		displayTomorrowlandAttractions(data);
	});
}

function displayTomorrowlandAttractions(dat){
	console.log("tomorrowland attractions", dat);

}

module.exports = {populateTomorrowland, displayTomorrowlandAttractions};
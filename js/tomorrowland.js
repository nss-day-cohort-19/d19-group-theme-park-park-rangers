"use strict";

let attractory = require("./attractory.js");

function populateTomorrowland(id){
	//attractory.loadAttractions for tomorrowland 
	//where area_id = 6 and type_id in 1 (ride), 2(restaurant), 3(show) and 5(character meet)
	attractory.loadAttractions().then((data) => {
		displayTomorrowlandAttractions(data);
	});
}

function displayTomorrowlandAttractions(dat){


}

module.exports = {populateTomorrowland, displayTomorrowlandAttractions};
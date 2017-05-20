"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs"),
	modal = require("./modal.js");

//getter
function populateAdventureland(id){
	attractory.loadAttractions(id)
	.then((data) => {
		return displayAdventurelandAttractions(data, id); //need to return to make sure data is there
	});
}

//setter
function displayAdventurelandAttractions(dat,id){
	console.log("Adventureland", dat, id);
	modal.displayModal(dat,id);
	
}

module.exports = {populateAdventureland, displayAdventurelandAttractions};
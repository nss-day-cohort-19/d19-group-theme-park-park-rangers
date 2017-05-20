"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs"),
	modal = require("./modal.js");

//getter
function populateFantasyland(id){
	attractory.loadAttractions(id)
	.then((data) => {
		return displayFantasylandAttractions(data, id); //need to return to make sure data is there
	});
}

//setter
function displayFantasylandAttractions(dat, id){
	console.log("Fantasyland", dat, id);
	modal.displayModal(dat,id);
}

module.exports = {populateFantasyland, displayFantasylandAttractions};
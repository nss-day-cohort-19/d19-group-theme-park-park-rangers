"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs"),
	modal = require("./modal.js");

//getter
function populateMainStreet(id){
	attractory.loadAttractions(id)
	.then((data) => {
		return displayMainStreetAttractions(data, id); //need to return to make sure data is there
	});
}

//setter
function displayMainStreetAttractions(dat, id){
	console.log("Main Street", dat, id);
	modal.displayModal(dat,id);
}

module.exports = {populateMainStreet, displayMainStreetAttractions};
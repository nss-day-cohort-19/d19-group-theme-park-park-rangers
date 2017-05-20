"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
    attractTemplate = require("../templates/attract.hbs"),
    modal = require("./modal.js");

//getter
function populateTomorrowland(id){
	let attractions = {};
	attractory.loadAttractions(id)
	.then((data) => {
		return displayTomorrowlandAttractions(data, id); //need to return to make sure data is there
	});
}

//setter
function displayTomorrowlandAttractions(dat, id){
	console.log("Tomorrowland", dat, id);
	modal.displayModal(dat,id);
}

module.exports = {populateTomorrowland, displayTomorrowlandAttractions};
"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs"),
	modal = require("./modal.js");

//getter
function populateFrontierland(id){
	attractory.loadAttractions(id)
	.then((data) => {
		return displayFrontierlandAttractions(data, id); //need to return to make sure data is there
	});
}

//setter
function displayFrontierlandAttractions(dat, id){
	console.log("Frontierland", dat, id);
	modal.displayModal(dat,id);
}

module.exports = {populateFrontierland, displayFrontierlandAttractions};
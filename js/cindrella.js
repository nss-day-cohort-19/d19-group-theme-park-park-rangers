"use strict";

let attractory = require("./attractory.js"),
areaTemplate = require('../templates/main.hbs'),
attractTemplate = require('../templates/attract.hbs'),
modal = require("./modal.js");

//getter
function populateCindrellaland(id){
	console.log("within populateCindrellaland");
	attractory.loadAttractions(id)
	.then((data) => {
		return displayCindrellalandAttractions(data, id); //need to return to make sure data is there
	});
}

//setter
function displayCindrellalandAttractions(dat, id){
	console.log("Cindrellaland", dat, id);
	modal.displayModal(dat,id);

}

module.exports = {populateCindrellaland, displayCindrellalandAttractions};
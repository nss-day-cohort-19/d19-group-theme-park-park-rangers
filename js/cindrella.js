"use strict";

let attractory = require("./attractory.js"),
areaTemplate = require('../templates/main.hbs'),
attractTemplate = require('../templates/attract.hbs');

function populateCindrellaland(){
	console.log("within populateCindrellaland");
	attractory.loadAttractions(7)
	.then((data) => {
		displayCindrellalandAttractions(data);
	});
}

function displayCindrellalandAttractions(dat){
	$("#card--7").append(attractTemplate(dat));

}

module.exports = {populateCindrellaland, displayCindrellalandAttractions};
"use strict";

let attractory = require("./attractory.js"),
areaTemplate = require('../templates/main.hbs');

function populateCindrellaland(){
	console.log("within populateCindrellaland");
	attractory.loadAttractions(7)
	.then((data) => {
		displayCindrellalandAttractions(data);
	});
}

function displayCindrellalandAttractions(dat){
	let output = $(".output");
	$(".output").append(areaTemplate(dat));

}

module.exports = {populateCindrellaland, displayCindrellalandAttractions};
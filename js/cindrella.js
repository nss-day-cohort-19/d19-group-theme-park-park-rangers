"use strict";

let attractory = require("./attractory.js"),
areaTemplate = require('../templates/main.hbs');

function populateCindrellaland(){
	console.log("within populateCindrellaland");
	attractory.loadAttractions(7)
	.then((data) => {
		displayCindrellalandDetails(data);
	});
}

function displayCindrellalandDetails(dat){
	let output = $(".output");
	$(".output").append(areaTemplate(dat));

}

module.exports = {populateCindrellaland, displayCindrellalandDetails};
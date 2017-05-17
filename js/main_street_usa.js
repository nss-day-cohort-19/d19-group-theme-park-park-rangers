"use strict";

let attractory = require("./attractory.js"),
areaTemplate = require('../templates/main.hbs');

function populateMainStreet(){
	console.log("within populateMainStreet");
	attractory.loadAttractions(1)
	.then((data) => {
		displayMainStreetDetails(data);
	});
}

function displayMainStreetDetails(dat){
	let output = $(".output");
	$(".output").append(areaTemplate(dat));

}

module.exports = {populateMainStreet, displayMainStreetDetails};
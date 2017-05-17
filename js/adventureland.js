"use strict";

let attractory = require("./attractory.js"),
areaTemplate = require('../templates/main.hbs');

function populateAdventureland(){
	console.log("within populateAdventureland");
	attractory.loadAttractions(2)
	.then((data) => {
		displayAdventurelandDetails(data);
	});
}

function displayAdventurelandDetails(dat){
	let output = $(".output");
	$(".output").append(areaTemplate(dat));

}

module.exports = {populateAdventureland, displayAdventurelandDetails};
"use strict";

let attractory = require("./attractory.js"),
areaTemplate = require('../templates/main.hbs');

function populateFantasyland(){
	console.log("within populateFantasyland");
	attractory.loadAttractions(5)
	.then((data) => {
		displayFantasylandDetails(data);
	});
}

function displayFantasylandDetails(dat){
	let output = $(".output");
	$(".output").append(areaTemplate(dat));

}

module.exports = {populateFantasyland, displayFantasylandDetails};
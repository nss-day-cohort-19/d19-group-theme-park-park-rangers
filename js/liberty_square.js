"use strict";

let attractory = require("./attractory.js"),
areaTemplate = require('../templates/main.hbs');

function populateLibertySquareland(){
	console.log("within populateLibertySquareland");
	attractory.loadAttractions(4)
	.then((data) => {
		displayLibertySquarelandDetails(data);
	});
}

function displayLibertySquarelandDetails(dat){
	let output = $(".output");
	$(".output").append(areaTemplate(dat));

}

module.exports = {populateLibertySquareland, displayLibertySquarelandDetails};
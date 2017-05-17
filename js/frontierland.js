"use strict";

let attractory = require("./attractory.js"),
areaTemplate = require('../templates/main.hbs');

function populateFrontierland(){
	console.log("within populateFrontierland");
	attractory.loadAttractions(3)
	.then((data) => {
		displayFrontierlandDetails(data);
	});
}

function displayFrontierlandDetails(dat){
	let output = $(".output");
	$(".output").append(areaTemplate(dat));

}

module.exports = {populateFrontierland, displayFrontierlandDetails};
"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateAdventureland(){
	attractory.loadAttractions(2)
	.then((data) => {
		displayAdventurelandAttractions(data);
	});
}

function displayAdventurelandAttractions(dat){
	let output = $(".help");
	let attDiv = $('<div id="modal2" class="modal fade">');
	attDiv.append(attractTemplate(dat));
	$(".attractions").append(attDiv);
	console.log("Adventureland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateAdventureland, displayAdventurelandAttractions};
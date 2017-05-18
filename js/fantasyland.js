"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateFantasyland(){
	attractory.loadAttractions(6)
	.then((data) => {
		displayFantasylandAttractions(data);
	});
}

function displayFantasylandAttractions(dat){
	let output = $(".help");
	let attDiv = $('<div id="modal5" class="modal fade">');
	attDiv.append(attractTemplate(dat));
	$(".attractions").append(attDiv);
	console.log("Fantasyland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateFantasyland, displayFantasylandAttractions};
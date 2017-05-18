"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateMainStreet(){
	attractory.loadAttractions(1)
	.then((data) => {
		displayMainStreetAttractions(data);
	});
}

function displayMainStreetAttractions(dat){
	let output = $(".help");
	let attDiv = $('<div id="modal1" class="modal fade">');
	attDiv.append(attractTemplate(dat));
	$(".attractions").append(attDiv);
	console.log("mainstreet attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateMainStreet, displayMainStreetAttractions};
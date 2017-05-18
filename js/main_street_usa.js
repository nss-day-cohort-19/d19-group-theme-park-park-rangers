"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateMainStreet(){
	attractory.loadAttractions(1)
	.then((data) => {
		return displayMainStreetAttractions(data); //need to return to make sure data is there
	});
}

function displayMainStreetAttractions(dat){
	let output = $(".help");
	let attDiv = $('<div id="modal1" class="modal fade">');
	attDiv.append(attractTemplate(dat));
	$(".attractions").append(attDiv);
	$('#modal1').modal('toggle'); //data has to be loaded first before the modal so only requires one click to open
	console.log("mainstreet attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateMainStreet, displayMainStreetAttractions};
"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateFantasyland(){
	attractory.loadAttractions(5)
	.then((data) => {
		return displayFantasylandAttractions(data); //need to return to make sure data is there
	});
}

function displayFantasylandAttractions(dat){
	let output = $(".help");
	let attDiv = $('<div id="modal5" class="modal fade">');
	attDiv.append(attractTemplate(dat));
	$(".attractions").append(attDiv);
	$('#modal5').modal('toggle'); //data has to be loaded first before the modal so only requires one click to open
	console.log("Fantasyland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateFantasyland, displayFantasylandAttractions};
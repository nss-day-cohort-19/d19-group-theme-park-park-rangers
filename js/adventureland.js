"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateAdventureland(){
	attractory.loadAttractions(2)
	.then((data) => {
		return displayAdventurelandAttractions(data); //need to return to make sure data is there
	});
}

function displayAdventurelandAttractions(dat){
	let output = $(".help");
	let attDiv = $('<div id="modal2" class="modal fade">');
	attDiv.append(attractTemplate(dat));
	$(".attractions").append(attDiv);
	$('#modal2').modal('toggle'); //data has to be loaded first before the modal so only requires one click to open
	console.log("Adventureland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateAdventureland, displayAdventurelandAttractions};
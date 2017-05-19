"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
    attractTemplate = require("../templates/attract.hbs");

function populateTomorrowland(){
	let attractions = {};
	attractory.loadAttractions(6)
	.then((data) => {
		return displayTomorrowlandAttractions(data); //need to return to make sure data is there
	});
}

function displayTomorrowlandAttractions(dat){
	let output = $(".help");
	let attDiv = $('<div id="modal6" class="modal fade">');
	attDiv.append(attractTemplate(dat));
	$(".attractions").append(attDiv);
	$('#modal6').modal('toggle'); //data has to be loaded first before the modal so only requires one click to open
	console.log("tomorrowland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateTomorrowland, displayTomorrowlandAttractions};
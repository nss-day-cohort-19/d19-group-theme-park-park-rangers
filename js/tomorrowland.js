"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateTomorrowland(){
	attractory.loadAttractions(6)
	.then((data) => {
		displayTomorrowlandAttractions(data);
	});
}

function displayTomorrowlandAttractions(dat){
	let output = $(".help");
	let attDiv = $('<div id="modal6" class="modal fade">');
	attDiv.append(attractTemplate(dat));
	$(".attractions").append(attDiv);
	console.log("tomorrowland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateTomorrowland, displayTomorrowlandAttractions};
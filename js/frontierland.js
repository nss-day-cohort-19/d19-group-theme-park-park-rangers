"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateFrontierland(){
	attractory.loadAttractions(3)
	.then((data) => {
		displayFrontierlandAttractions(data);
	});
}

function displayFrontierlandAttractions(dat){
	let output = $(".help");
	let attDiv = $('<div id="modal3" class="modal fade">');
	attDiv.append(attractTemplate(dat));
	$(".attractions").append(attDiv);
	console.log("Frontierland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateFrontierland, displayFrontierlandAttractions};
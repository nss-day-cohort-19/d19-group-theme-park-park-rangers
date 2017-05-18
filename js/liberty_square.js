"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateLibertySquare(){
	attractory.loadAttractions(4)
	.then((data) => {
		displayLibertySquareAttractions(data);
	});
}

function displayLibertySquareAttractions(dat){
	let output = $(".help");
	let attDiv = $('<div id="modal4" class="modal fade">');
	attDiv.append(attractTemplate(dat));
	$(".attractions").append(attDiv);
	console.log("LibertySquare attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateLibertySquare, displayLibertySquareAttractions};
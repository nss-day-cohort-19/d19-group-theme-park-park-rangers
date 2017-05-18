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
	$(".output").append(attractTemplate(dat));
	console.log("LibertySquare attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateLibertySquare, displayLibertySquareAttractions};
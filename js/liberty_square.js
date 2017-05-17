"use strict";

let attractory = require("./attractory.js"),
areaTemplate = require('../templates/main.hbs');

function populateLibertySquare(){
	let attractions = {};
	attractory.loadAttractions(4)
	.then((data) => {
		displayLibertySquareAttractions(data);
	});
}

function displayLibertySquareAttractions(dat){
	console.log("LibertySquare attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateLibertySquare, displayLibertySquareAttractions};
"use strict";

let attractory = require("./attractory.js");

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
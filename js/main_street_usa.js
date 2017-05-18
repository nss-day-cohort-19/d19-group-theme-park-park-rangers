"use strict";

let attractory = require("./attractory.js");

function populateMainStreet(){
	let attractions = {};
	attractory.loadAttractions(1)
	.then((data) => {
		displayMainStreetAttractions(data);
	});
}

function displayMainStreetAttractions(dat){
	console.log("mainstreet attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateMainStreet, displayMainStreetAttractions};
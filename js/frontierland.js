"use strict";

let attractory = require("./attractory.js"),
areaTemplate = require('../templates/main.hbs');

function populateFrontierland(){
	let attractions = {};
	attractory.loadAttractions(6)
	.then((data) => {
		displayFrontierlandAttractions(data);
	});
}

function displayFrontierlandAttractions(dat){
	console.log("Frontierland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateFrontierland, displayFrontierlandAttractions};


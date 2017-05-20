"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs"),
	modal = require("./modal.js");

//getter
function populateLibertySquare(id){
	attractory.loadAttractions(id)
	.then((data) => {
		return displayLibertySquareAttractions(data, id); //need to return to make sure data is there
	});
}

//setter
function displayLibertySquareAttractions(dat, id){
	console.log("Liberty Square", dat, id);
	modal.displayModal(dat,id);
}

module.exports = {populateLibertySquare, displayLibertySquareAttractions};
"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateLibertySquare(){
	attractory.loadAttractions(4)
	.then((data) => {
		return displayLibertySquareAttractions(data); //need to return to make sure data is there
	});
}

function displayLibertySquareAttractions(dat){
	let output = $(".help");
	let attDiv = $('<div id="modal4" class="modal fade">');
	attDiv.append(attractTemplate(dat));
	$(".attractions").append(attDiv);
	$('#modal4').modal('toggle');  //data has to be loaded first before the modal so only requires one click to open
	console.log("LibertySquare attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {populateLibertySquare, displayLibertySquareAttractions};
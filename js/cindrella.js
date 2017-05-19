"use strict";

let attractory = require("./attractory.js"),
areaTemplate = require('../templates/main.hbs'),
attractTemplate = require('../templates/attract.hbs');

function populateCindrellaland(){
	console.log("within populateCindrellaland");
	attractory.loadAttractions(7)
	.then((data) => {
		return displayCindrellalandAttractions(data); //need to return to make sure data is there
	});
}

function displayCindrellalandAttractions(dat){
	let output = $(".help");
	let attDiv = $('<div id="modal7" class="modal fade">');
	attDiv.append(attractTemplate(dat));
	$(".attractions").append(attDiv);
	$('#modal7').modal('toggle'); //data has to be loaded first before the modal so only requires one click to open
	console.log("tomorrowland attractions", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});

}

module.exports = {populateCindrellaland, displayCindrellalandAttractions};
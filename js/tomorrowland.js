"use strict";

let attractory = require("./attractory.js"),
	areaTemplate = require('../templates/main.hbs');

function populateTomorrowland(){
	console.log("within populateTomorrowland");
	attractory.loadAttractions(6)
	.then((data) => {
		displayTomorrowlandDetails(data);
	});
}

function displayTomorrowlandDetails(dat){
	let output = $(".output");
	$(".output").append(areaTemplate(dat));
	/*aj making sure getting data
	let details = {};
	details = dat;
	console.log("i am in displayTomorrowlandDetails", dat);
	$.each( details, function(key, value) {
		console.log("within each of displayTomorrowlandDetails");
	  	console.log( key ,  ": " , value.name );
	  	let name = value.name,
	        desc = value.description,
	        time = value.times;
	  	    
		console.log("tomorrowland attractions", name, desc, time);


	});*/
}
module.exports = {populateTomorrowland, displayTomorrowlandDetails};
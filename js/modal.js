"use strict";

let	attractTemplate = require("../templates/attract.hbs");

function displayModal(dat,id){
	let attDiv = $(`<div id="modal${id}" class="modal fade">`);
	attDiv.append(attractTemplate(dat));
	$(".attractions").append(attDiv);
	$(`#modal${id}`).modal('toggle'); //data has to be loaded first before the modal so only requires one click to open
	console.log("In modal in modal in modal", dat);
	$.each( dat, function( key, value ) {
  		console.log( key ,": " , value );
	});
}

module.exports = {displayModal};
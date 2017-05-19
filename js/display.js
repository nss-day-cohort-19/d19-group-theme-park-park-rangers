"use strict";

let attractory = require("./attractory.js"),
	attractTemplate = require("../templates/attract.hbs");

function selectList(){
	$("#sel-attr").change (() => {
			console.log("select list changed");
			let attract_id = $("#sel-attr").val();
			console.log("select", attract_id);
			attractory.loadAttractionsList(attract_id)
			.then((data) => {
				displayAttractionsList(data, attract_id);
				console.log("attraction data", data, attract_id);
			});
		});
}

function displayAttractionsList(dat, attract_id){
	console.log("in displayAttractionsList");
	let attDiv = $(`<div id="modal${attract_id}" class="modal fade">`);
	attDiv.append(attractTemplate(dat));
	$(".attractions-list").append(attDiv);
	$(`#modal${attract_id}`).modal('toggle');
	/*$(`#modal${attract_id}`).on("hidden.bs.modal", function(){
    	$(".modal-body1").html("");
	});*/

}

module.exports = {selectList, displayAttractionsList};
"use strict";

console.log("i am in main.js");


let attractory = require ("./attractory.js"),
	adventureland = require("./adventureland.js"),
	fantasyland = require("./fantasyland.js"),
	frontierland = require("./frontierland.js"),
	liberty_square = require("./liberty_square.js"),
	main_street_usa = require("./main_street_usa.js"),
	tomorrowland = require("./tomorrowland.js"),
	eventStuff = require("./events.js");

//load the area data and display areas if load is successful
attractory.loadAreas().then((data) => {
	displayAreas(data);
    return attractory.loadParkInfo();

}).then(
    (data) => {
    displayParkInfo(data);
});


//tamela making load park info function
function displayParkInfo (data) {
    console.log("is this my park info?", data);
}


$(".help").click(() => {
	console.log("card-block clicked");
	//when it is clicked you should have id
	//dependent on id call function to populate that area
});




function displayAreas(dat){

	let output = $(".output");
	//console.log("i am within displayAreas function", dat);
	$.each( dat, function( key, value ) {
  	//console.log( key ,  ": " , value.name );
  	let name = value.name,
  	    desc = value.description,
  	    color = value.colorTheme,
  	    id = value.id;

	output.append(`<section id="sec--${id}" class="help">
					<div class='col-md-6 wrapper'><div class='card text-center'>
					<div class='card-block' id="card--${id}" style="border: 2px solid">
  					<h4 class='card-title'><a href=''>`+name+`</h4></a>
  			    	<h5 class='card-text'>`+id+`</h5>
  				    </div></div></div></section>`);

	console.log("output",output, id);


	
	});	
	//console.log("eventStuff", eventStuff);
	eventStuff();


	



}

let Handlebars = require("hbsfy/runtime"),
	hf_data = require("..templates/hbs-data.js"),
	events = require("./events.js"),//page is still being worked on-- may need to change this file name
	footerTemplate = require("../templates/footer.hbs"),
	headerTemplate = require("../templates/header.hbs");

	Handlebars.registerHelper("increment", (value)=> parseInt(value) + 1);

	$("#header-handlebars").append(headerTemplate(hf_data));
	$("#footer-handlebars").append(footerTemplate(hf_data));


	function popPage (event) {
		let footerDiv = document.creatElement("div");
		let headerDiv = document.createElement("div");

		footerDiv.innerHTML = footerTemplate(event);
		$("#footer-div").append(footerDiv);
		//event js file

		headerDiv.innerHTML = headerDiv(event);
		$("#header-div").append(headerDiv);
	}












"use strict";

console.log("i am in main.js");

require("bootstrap");
let attractory = require ("./attractory.js"),
	adventureland = require("./adventureland.js"),
	fantasyland = require("./fantasyland.js"),
	frontierland = require("./frontierland.js"),
	liberty_square = require("./liberty_square.js"),
	main_street_usa = require("./main_street_usa.js"),
	eventStuff = require("./events.js"),
	tomorrowland = require("./tomorrowland.js");

let headerTemplate = require('../templates/header.hbs');
let areaTemplate = require('../templates/main.hbs');


//load the area data and display areas if load is successful
attractory.loadAreas().then((data) => {
	displayAreas(data);
	$("#output").append(areaTemplate(data));
    return attractory.loadParkInfo();

}).then(
    (data) => {
    displayParkInfo(data);
});




//tamela making load park info function
function displayParkInfo (data) {
    $("#header-handlebars").append(headerTemplate(data[0]));

    //Might use this if I can get sub dropwn-menues to work
//    $(document).ready(function(){
//        $('.dropdown-submenu a.test').on("click", function(e){
//            $(this).next('ul').toggle();
//            e.stopPropagation();
//            e.preventDefault();
//        });
//    });
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

	// output.append(`<section id="sec--${id}" class="help">
	// 				<div class='col-md-6 wrapper'><div class='card text-center'>
	// 				<div class='card-block' id="card--${id}" style="border: 2px solid">
 //  					<h4 class='card-title'><a href=''>`+name+`</h4></a>
 //  			    	<h5 class='card-text'>`+id+`</h5>
 //  				    </div></div></div></section>`);

	console.log("output",output, id);



	});
	//console.log("eventStuff", eventStuff);
	eventStuff();
}













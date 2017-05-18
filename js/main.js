"use strict";

console.log("i am in main.js");

require("bootstrap");
let attractory = require ("./attractory.js"),
	adventureland = require("./adventureland.js"),
	fantasyland = require("./fantasyland.js"),
	frontierland = require("./frontierland.js"),
	liberty_square = require("./liberty_square.js"),
	main_street_usa = require("./main_street_usa.js"),
	tomorrowland = require("./tomorrowland.js"),
	cinderellaland = require("./cindrella.js"),
	eventStuff = require("./events.js"),
    tortureTime = require("./time.js");


let headerTemplate = require('../templates/header.hbs'),
    footerTemplate = require('../templates/footer.hbs'),
    areaTemplate = require('../templates/main.hbs'),
    attractTemplate = require('../templates/attract.hbs');

let attractionData;
let parkInfo;
let parkType;

//load the area data and display areas if load is successful
attractory.loadAreas().then((data) => {
	displayAreas(data);
    console.log("line 26", data);
    return attractory.loadParkInfo();

}).then(
    (data) => {
    parkInfo = data;
    return attractory.getTimes();
}).then(
    (data) => {

        attractionData = data;
        return attractory.loadAttractionTypes();
}).then(
    (data) => {
    parkType = data;
    displayParkInfo(parkInfo);
    tortureTime.timeFunction(parkInfo, attractionData, parkType);
}).catch(console.error);


//tamela making load park info function
function displayParkInfo (data) {
    $("#header-handlebars").append(headerTemplate(data[0]));
    $("#footer-handlebars").append(footerTemplate(data[0]));

}

//function selectMenu () {
//    $("#li--1").click( (event) =>{
//        console.log("event is happening", event.target);
//    });
//}
// for (let i= 0; i < 4; i++) {
//        let createLI = `<li id="id--${i}">Ride</li>`;
//        $("#menu-select").append(createLI);
////        console.log("is line 140 logging", createLI);
//
//    }



$(".help").click(() => {
	console.log("card-block clicked");
	//when it is clicked you should have id
	//dependent on id call function to populate that area
});

function displayAreas(dat){
	//$("#output").append(areaTemplate(data));
	let output = $(".output");
	$(".output").append(areaTemplate(dat));
	//console.log("i am within displayAreas function", dat);
	/*$.each( dat, function(key, value) {
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



	});*/
	//console.log("eventStuff", eventStuff);
	eventStuff();
}













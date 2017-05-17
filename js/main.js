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


let headerTemplate = require('../templates/header.hbs'),
	 footerTemplate = require('../templates/footer.hbs'),
    areaTemplate = require('../templates/main.hbs'),
    attractTemplate = require('../templates/attract.hbs');



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
    $("#header-handlebars").append(headerTemplate(data[0]));
    $("#footer-handlebars").append(footerTemplate(data[0]));

    //Might use this if I can get sub dropwn-menues to work
//    $(document).ready(function(){
//        $('.dropdown-submenu a.test').on("click", function(e){
//            $(this).next('ul').toggle();
//            e.stopPropagation();
//            e.preventDefault();
//        });
//    });
}


 function displayTime(currentTime, hours, minutes, seconds) {


   var meridiem = "am"; // Default is AM

   if (hours > 12) {
     hours = hours - 12; // Convert to 12-hour format
     meridiem = "PM"; // Keep track of the meridiem
   }

   if (hours === 0) {
     hours = 12;
   }

   if (hours < 10) {

     hours = "0" + hours;
   }

   if (minutes < 10) {
     minutes = "0" + minutes;
   }
   if (seconds < 10) {
     seconds = "0" + seconds;
   }

   $('#clock').text(hours + ":" + minutes + " " + meridiem);
 }

 $(function() {

   var currentTime = new Date();
   var hours = currentTime.getHours();
   var minutes = currentTime.getMinutes();
//   var seconds = currentTime.getSeconds();

   displayTime(currentTime, hours, minutes);

   $('#increment30').on('click', function() {
       console.log("is click event happening line 87");
     currentTime.setMinutes(currentTime.getMinutes() + 30);
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
     displayTime(currentTime, hours, minutes);

   });
 });



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













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
  display = require("./display.js"),
  tomorrowland = require("./tomorrowland.js"),
  cinderellaland = require("./cindrella.js"),
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
    display.selectList();
    //Might use this if I can get sub dropwn-menues to work
//    $(document).ready(function(){
//        $('.dropdown-submenu a.test').on("click", function(e){
//            $(this).next('ul').toggle();
//            e.stopPropagation();
//            e.preventDefault();
//        });
}

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
  //        <div class='col-md-6 wrapper'><div class='card text-center'>
  //        <div class='card-block' id="card--${id}" style="border: 2px solid">
 //           <h4 class='card-title'><a href=''>`+name+`</h4></a>
 //             <h5 class='card-text'>`+id+`</h5>
 //             </div></div></div></section>`);
  console.log("output",output, id);
  });*/
  //console.log("eventStuff", eventStuff);
  eventStuff();
}
















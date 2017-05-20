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
    global.parkType = data;
    displayParkInfo(parkInfo);
    tortureTime.timeFunction(parkInfo, attractionData, parkType);
}).catch(console.error);



//tamela making load park info function
function displayParkInfo (data) {
    $("#header-handlebars").append(headerTemplate(data[0]));
    $("#footer-handlebars").append(footerTemplate(data[0]));
    display.selectList();
}

function displayAreas(dat){
  let output = $(".output");
  $(".output").append(areaTemplate(dat));
  eventStuff();
}
















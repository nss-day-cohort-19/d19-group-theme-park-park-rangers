"use strict";

var _ = require("lodash");


let attractory = require("./attractory.js"),
	areaTemplate = require("../templates/main.hbs"),
	attractTemplate = require("../templates/attract.hbs");

function populateFrontierland(){
	attractory.loadAttractions(3)
	.then((data) => {
		return displayFrontierlandAttractions(data); //need to return to make sure data is there
	});
}

function displayFrontierlandAttractions(dat){
    //data was not transfering all info, used global to send data
    dat = _.filter(global.parkType, (item) =>{
        return (item.id === 1 || item.id === 2 || item.id === 3 || item.id ===5);
    });

	let output = $(".help");
	let attDiv = $('<div id="modal2" class="modal fade">');
	attDiv.append(attractTemplate(dat));
    $(".attractions").empty();
	$(".attractions").append(attDiv);
	$('#modal2').modal('toggle');

    $(".card-block").click((event)=>{
        let holdWhatClicked = event.currentTarget.id;
        $("#" + holdWhatClicked).off("click");
        let counter = 0;

        let id = event.currentTarget.id.substr(-1);

        for (let i = 0; i < global.attractionData.length; i++) {
            let attractObj= global.attractionData[i];
            if (attractObj.type_id == id) {
                let name = attractObj.name;
                let times = "";
                if (attractObj.times !== undefined) {
                    times = attractObj.times.toString();
                }
                let nameCard = `<div class="getSomeClass" id="attractID${attractObj.id}">${name}
                                    <div class="hide-p-tag">${attractObj.description}</div>
                                    <div class="hide-p-tag">${times}</div>
                                </div><br>`;


                $("#card--" + id).append(nameCard);
                counter++;
                if (counter === 2) {
                    break;
                }

            }
        }

        $(".getSomeClass").click((event) => {
            let currentAttraction = event.currentTarget.id;
            $("#" + currentAttraction + " .hide-p-tag").show();
        });


    });
}

module.exports = {populateFrontierland, displayFrontierlandAttractions};

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
            let attractID = global.attractionData[i];
            if (attractID.type_id == id) {
                let name = attractID.name;
                let nameCard = `<p>${name}</p>`;
                $("#card--" + id).append(nameCard);
                counter++;
                if (counter === 2) {
                    break;
                }
            }
        }
    });
}

module.exports = {populateFrontierland, displayFrontierlandAttractions};

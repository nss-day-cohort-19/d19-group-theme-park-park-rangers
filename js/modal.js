"use strict";
var _ = require("../lib/node_modules/lodash");

let	attractTemplate = require("../templates/attract-group.hbs");



function displayModal(dat,id){
	if(dat.item_id === 1){
		let title = "Rides";
	}
	//aj plugged in tamela's code below
	//    data was not transfering Rides, Restaurants, Show, and Character Meet, used global to send data
    let types = _.filter(global.parkType, (item) => {
        return (item.id === 1 || item.id === 2 || item.id === 3 || item.id === 5);
    });

    //making new array to hold mew object to pass to template. Without this the above information will not be available, handelbars seems to like arrays
    let combinedArray = [];

    for (let i = 0; i < types.length; i++) {
        let type = types[i];
        ///creating new object with key value pairs that will be pushed into the new array
        let typeGroup ={};
        //this returns the correct type names from the JSON data,
        typeGroup.type = type.name;
        //needed to add an ID  here so the section element would have a custom ID in the first each statement in the HBS, otherwise it kept skipping to 2nd each and would not populate a number
        typeGroup.id = type.id;
        //need to put all objects created from attraction data in array to when template parses it will group the info with the Name Rides, Restaurants...etc
        typeGroup.attractions = [];

        for (let a = 0; a < dat.length; a++) {
            let attraction = dat[a];
            //if the area ID equals the hard-coded passed in arg of 2 AND if the attraction type_id equals what the type ID is, then combine data
            if (attraction.type_id === type.id) {
                //set current name and description
                let combinedData = {
                    id: attraction.id,
                    name: attraction.name,
                    description: attraction.description
                };
                //had to do seperate if statement to include times because they came back array, it would display undefined in the modal, if there is a time in the data, go get it and add it to object, then convert to a string
                if (attraction.times !== undefined) {
                    combinedData.times = attraction.times.toString().split(",").join(", ");
                }
                //pushing this object to it's container object
                typeGroup.attractions.push(combinedData);
            }
        }
        //now take the newly created object and push it to the new array
        combinedArray.push(typeGroup);
    }

    console.log("did I set my data up correctly", combinedArray);

	let attDiv = $(`<div id="modal${id}" class="modal fade">`);
	attDiv.append(attractTemplate(combinedArray));
	$(".attractions").append(attDiv);
	$(`#modal${id}`).modal('toggle'); //data has to be loaded first before the modal so only requires one click to open
	console.log("In modal in modal in modal");
	$.each(dat, function(key, value ) {
  		console.log( key ,": " , value );
	});

	//plugged in tamela's code for event listener
	//add event listener to the h4 that will be the attraction name
    $(".card-title").click((event)=>{
        //need to set unique ID for each h4 that is clicked so information can properly toggle
        //the replace method is chopping off card-- and returning the number at the end
        //use this number to set ID's for H4 element
        let elementID = event.currentTarget.id.replace("card--", "");
        $("#desc--" + elementID).toggle();
        console.log("are you clicking", event.currentTarget);
        console.log("are you clicking", elementID);
    });

}

module.exports = {displayModal};
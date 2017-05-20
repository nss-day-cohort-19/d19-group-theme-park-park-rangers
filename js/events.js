"use strict";

let main_street_usa = require("./main_street_usa.js"),//1
	adventureland = require("./adventureland.js"),//2
	fantasyland = require("./fantasyland.js"),//5
	frontierland = require("./frontierland.js"),//3
	liberty_square = require("./liberty_square.js"),//4
	tomorrowland = require("./tomorrowland.js"),//6
	cindrellaland = require("./cindrella.js");//7

function activateEvents(){
	//event listener for click event in particular area
	$(".help").click(() => {

		console.log("card-block clicked");
		//when it is clicked you should have id
		//dependent on id call function to populate that area
		var card = event.target.closest(".help");
		let my_id = $(card).attr("id");
		my_id = my_id.substr(5);
		my_id = Number(my_id);
		console.log("card", card, my_id);
		switch(my_id){
			case 1:
				main_street_usa.populateMainStreet(my_id);
				console.log("my id is", my_id);
				break;
			case 2:
				adventureland.populateAdventureland(my_id);
				console.log("my id is", my_id);
				break;
			case 3:
				frontierland.populateFrontierland(my_id);
				console.log("my id is", my_id);
				break;
			case 4:
				liberty_square.populateLibertySquare(my_id);
				console.log("my id is", my_id);
				break;
			case 5:
				fantasyland.populateFantasyland(my_id);
				console.log("my id is", my_id);
				break;
			case 6:
				tomorrowland.populateTomorrowland(my_id);
				console.log("my id is", my_id);
				break;
			case 7:
				cindrellaland.populateCindrellaland(my_id);
				console.log("my id is", my_id);
				break;
		}
	});

}


module.exports = activateEvents;
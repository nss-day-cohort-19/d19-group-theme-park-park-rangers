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
		
		//console.log("card-block clicked");
		//when it is clicked you should have id
		//dependent on id call function to populate that area
		var card = event.target.closest(".help");
		let my_id = $(card).attr("id");
		console.log("card", card, my_id);
		if(my_id == "sec--1"){
			main_street_usa.populateMainStreet();
			console.log("my id is", my_id);

		}else if(my_id == "sec--2"){
			adventureland.populateAdventureland();
			console.log("my id is", my_id);

		}else if(my_id == "sec--3"){
			frontierland.populateFrontierland();
			console.log("my id is", my_id);

		}else if(my_id == "sec--4"){
			liberty_square.populateLibertySquareland();
			console.log("my id is", my_id);

		}else if(my_id == "sec--5"){
			fantasyland.populateFantasyland();
			console.log("my id is", my_id);
		}else if(my_id == "sec--1"){
			main_street_usa.populateMainStreet();
			console.log("my id is", my_id);
		}else if(my_id == "sec--4"){
			liberty_square.populateLibertySquare();
			console.log("my id is", my_id);
		}else if(my_id == "sec--5"){
			fantasyland.populateFantasyland();
			console.log("my id is", my_id);
		}else if(my_id == "sec--3"){
			frontierland.populateFrontierland();
			console.log("my id is", my_id);
		}else if(my_id == "sec--2"){
			adventureland.populateAdventureland();
			console.log("my id is", my_id);
		}else if(my_id == "sec--7"){
			cindrellaland.populateCindrellaland();
			console.log("my id is", my_id);

		}
	});
		
}

module.exports = activateEvents;
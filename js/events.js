"use strict";

let main_street_usa = require("./main_street_usa.js"),
	adventureland = require("./adventureland.js"),
	fantasyland = require("./fantasyland.js"),
	frontierland = require("./frontierland.js"),
	liberty_square = require("./liberty_square.js"),
	tomorrowland = require("./tomorrowland.js");

function activateEvents(){
	//event listener for click event in particular area
	$(".help").click(() => {
		
		console.log("card-block clicked");
		//when it is clicked you should have id
		//dependent on id call function to populate that area
		var card = event.target.closest(".help");
		let my_id = $(card).attr("id");
		console.log("card", card, my_id);
		if(my_id == "sec--6"){
			tomorrowland.populateTomorrowland();
			console.log("my id is", my_id);

		}else if(my_id=="sec--2"){

		}
	});
		
}


module.exports = activateEvents;
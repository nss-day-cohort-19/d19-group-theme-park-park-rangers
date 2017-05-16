(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
},{}],2:[function(require,module,exports){
"use strict";

console.log("i am in attractory.js");

let loadParkInfo = () => {
			return new Promise ((resolve, reject) => {
				$.ajax({
					url:"https://theme-park-data.firebaseio.com/park-info.json",
					success: (data) => {
						console.log("success", data);
						resolve(data);//resolve passes data to then
					},
					error: () => {
						reject("Park Info Data Failed to Load");
					}
				});
			});
};

let loadAttractions = () => {
			return new Promise ((resolve, reject) => {
				$.ajax({
					url:"https://theme-park-data.firebaseio.com/attractions.json",
					success: (data) => {
						console.log("success", data);
						resolve(data);//resolve passes data to then
					},
					error: () => {
						reject("Attractions Data Failed to Load");
					}
				});
			});
};

let loadAttractionTypes = () => {
			return new Promise ((resolve, reject) => {
				$.ajax({
					url:"https://park-rangers.firebaseio.com/attraction_types.json",
					success: (data) => {
						console.log("success", data);
						resolve(data);//resolve passes data to then
					},
					error: () => {
						reject("Attraction Types Data Failed to Load");
					}
				});
			});
};

let loadAreas = () => {
			return new Promise ((resolve, reject) => {
				$.ajax({
					url:"https://theme-park-data.firebaseio.com/areas.json",
					success: (data) => {
						console.log("loadAreas loaded", data);
						resolve(data);//resolve passes data to then
					},
					error: () => {
						reject(new Error("Areas failed to load"));
					}
				});
			});
};

let loadDetails = (id) => {
			return new Promise ((resolve, reject) => {
				$.ajax({
					url:"https://theme-park-data.firebaseio.com",
					success: (data) => {
						console.log("area details for that id loaded");
						resolve(data.areas);//resolve passes data to then
					},
					error: () => {
						reject(new Error("Area details failed to load"));
					}
				});
			});
};

module.exports = {loadParkInfo, loadAttractions, loadAttractionTypes, loadAreas, loadDetails};
},{}],3:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],4:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],5:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],6:[function(require,module,exports){
"use strict";

console.log("i am in main.js");

let attractory = require ("./attractory.js"),
	adventureland = require("./adventureland.js"),
	fantasyland = require("./fantasyland.js"),
	frontierland = require("./frontierland.js"),
	liberty_square = require("./liberty_square.js"),
	main_street_usa = require("./main_street_usa.js"),
	tomorrowland = require("./tomorrowland.js");


attractory.loadAreas().then((data) => {
	displayAreas(data);

});

$(".help").click(() => {
	console.log("card-block clicked");
	//when it is clicked you should have id
	//dependent on id call function to populate that area
});
		


function displayAreas(dat){

	let output = $(".output");
	//console.log("i am within displayAreas function", dat);
	$.each( dat, function( key, value ) {
  	//console.log( key ,  ": " , value.name );
  	let name = value.name,
  	    desc = value.description,
  	    color = value.colorTheme,
  	    id = value.id;

	output.append(`<section id="sec--${id}" class="help">
					<div class='col-md-6 wrapper'><div class='card text-center'>
					<div class='card-block' id="card--${id}" style="border: 2px solid">
  					<h4 class='card-title'><a href=''>`+name+`</h4></a>
  			    	<h5 class='card-text'>`+id+`</h5> 
  				    </div></div></div></section>`);
	
	console.log("output",output, id);

	
	});	


}



					











},{"./adventureland.js":1,"./attractory.js":2,"./fantasyland.js":3,"./frontierland.js":4,"./liberty_square.js":5,"./main_street_usa.js":7,"./tomorrowland.js":8}],7:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],8:[function(require,module,exports){
"use strict";

let attractory = require("./attractory.js");

function populateTomorrowland(id){
	//attractory.loadAttractions for tomorrowland 
	//where area_id = 6 and type_id in 1 (ride), 2(restaurant), 3(show) and 5(character meet)
	attractory.loadAttractions().then((data) => {
		displayTomorrowlandAttractions(data);
	});
}

function displayTomorrowlandAttractions(dat){


}

module.exports = {populateTomorrowland, displayTomorrowlandAttractions};
},{"./attractory.js":2}]},{},[6]);

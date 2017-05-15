(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

console.log("i am in attractory.js");

let loadParkInfo = () => {
			return new Promise ((resolve, reject) => {
				$.ajax({
					url:"https://park-rangers.firebaseio.com/park-info.json",
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
					url:"https://park-rangers.firebaseio.com/attractions.json",
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
					url:"https://park-rangers.firebaseio.com/areas.json",
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

module.exports = {loadParkInfo, loadAttractions, loadAttractionTypes, loadAreas};
},{}],2:[function(require,module,exports){
"use strict";
console.log("i am in domhandler.js");

let attractory = require ("./attractory.js");
attractory.loadAreas();

let output = $('.output');
console.log("output", output);

output.append(`<div class='col-md-6 wrapper'><div class='card text-center'><div class='card-block'>
  						 <h4 class='card-title'></h4>
  						 <h5 class='card-text'></h5> 
  						 <ul class="list-group list-group-flush">
							<li class="list-group-item">Rides:</li>
							<li class="list-group-item">Restaurants:</li>
							<li class="list-group-item">Characters:</li>
							<li class="list-group-item">Shops:</li>
							<li class="list-group-item"><a href="#" class="btn btn-primary">Full Report</a></li>
							</ul></div></div></div>`);








},{"./attractory.js":1}]},{},[2]);

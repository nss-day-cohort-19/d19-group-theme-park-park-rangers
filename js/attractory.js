"use strict";

var _ = require("../lib/node_modules/lodash");


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

let loadAttractions = (id) => {
			return new Promise ((resolve, reject) => {
				$.ajax({
					url:"https://theme-park-data.firebaseio.com/attractions.json",
					success: (data) => {
						console.log("success", data);
						let my_filter = _.filter(data, (item) => {
							return item.area_id == id;
						});
						resolve(data, my_filter);//resolve passes data to then
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

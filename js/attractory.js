"use strict";
//syntax to use lodash
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
//pass in area_id and type_id array
let loadAttractions = (id) => {
			return new Promise ((resolve, reject) => {
				$.ajax({
					url:"https://theme-park-data.firebaseio.com/attractions.json",
					success: (data) => {
						console.log("success", data);
						let my_attr_filter = _.filter(data, (item) => {
							console.log("within loadAttractions filter");
							return ((item.area_id == id) && (item.type_id == 1 || item.type_id == 2 || item.type_id == 3 || item.type_id == 5));
						});
						resolve(my_attr_filter);//resolve passes data to then
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
					url:"https://theme-park-data.firebaseio.com/attraction_types.json",
					success: (data) => {
						console.log("success", data);
						//filter using lodash
						let my_type_filter = _.filter(data, (item) => {
							console.log("within loadAttractionTypes filter");
							return (item.type_id == 1 || item.type_id == 2 || item.type_id == 3 || item.type_id == 5);
						});
						resolve(my_type_filter);//resolve passes data to then
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
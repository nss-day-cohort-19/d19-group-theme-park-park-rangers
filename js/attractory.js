"use strict";
//syntax to use lodash
var _ = require("../lib/node_modules/lodash");
var helpers = require('../lib/node_modules/handlebars-helpers')();
//=> returns object with all (130+) helpers



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
							return ((item.area_id == id) && (item.type_id == 1 || item.type_id == 2 || item.type_id == 3 || item.type_id === 4 || item.type_id == 5 || item.type_id == 8) && item.times !== "");
						});
						resolve(my_attr_filter);//resolve passes data to then
					},
					error: () => {
						reject("Attractions Data Failed to Load");
					}
				});
			});
};

let loadAttractionsList = (id) => {
			return new Promise ((resolve, reject) => {
				$.ajax({
					url:"https://theme-park-data.firebaseio.com/attractions.json",
					success: (data) => {
						console.log("success", data);
						let my_attrlist_filter = _.filter(data, (item) => {
							console.log("within loadAttractionsList filter");
							return (item.type_id == id);
						});
						resolve(my_attrlist_filter);//resolve passes data to then
					},
					error: () => {
						reject("AttractionsList Data Failed to Load");
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
							return (item.id == 1 || item.id == 2 || item.id == 3 || item.id == 4 || item.id == 5 || item.id == 8);
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
						let my_area_filter = _.filter(data, (item) => {
							console.log("within loadAttractionsList filter");
							return (item.id !== 7);
						});
						resolve(my_area_filter);//resolve passes data to then
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
let getTimes = () => {
    return new Promise ((resolve, reject) => {
        $.ajax({
                    url:"https://theme-park-data.firebaseio.com/attractions.json",
                    success: (data) => {
                        console.log("area details for that id loaded");
                        resolve(data);//resolve passes data to then
                    },
                    error: () => {
                        reject(new Error("Area details failed to load"));
                    }
                });
    });
};

module.exports = {loadParkInfo, loadAttractions, loadAttractionsList, loadAttractionTypes, loadAreas, loadDetails, getTimes};

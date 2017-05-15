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
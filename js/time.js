"use strict";
console.log("time baby");

let timeFunction = function timeMenu(data, attractionData, parkType)
{
	var startTime = data[0].operating_hours[0].opening;
	var closingTime = data[0].operating_hours[0].closing;
	var pastNoon = false;
	var hour = startTime;
	var menuItem = `<option><a href="#">${startTime}:00AM</a></option>`;
	$("#times").append(menuItem);
//loop has to run 13 times for hours and 13 times for half ours which is 26 :)
	for (var i = 0; i < 26; i++){
		var newTime;

		if ((i+1) % 2 === 0){
			newTime = (hour + 1) + ":00";
			hour++;
//			console.log("Time: " + newTime);
		}
		else{
			newTime = hour + ":30";
//			console.log("Time: " + newTime);
		}
		if(newTime == "12:30"){
			pastNoon = true;
			hour = 0;
		}

		newTime += (pastNoon || newTime == "12:00") ? "PM" : "AM";
		menuItem = `<option><a href="#">${newTime}</a></option>`;
		$("#times").append(menuItem);

		if (pastNoon && newTime == closingTime + ":00pm") break;
	}

    $("#increment30").click((event) =>{
        let timeSelected = $("#times").val();
        let timeselectedArray = timeSelected.split(":");
        let menuHour = parseInt(timeselectedArray[0]);
        let menuMinute = parseInt(timeselectedArray[1].substr(0,2));
        let menuMeridian = timeselectedArray[1].substr(-2);
        let totalMinutes = (menuHour * 60) + menuMinute;
        loopevents(totalMinutes, menuMeridian, data, attractionData, parkType);
    });
};

function loopevents(totalMinutes, menuMeridian, parkInfo, attractionData, parkType) {
    let hours;
    let minutes;
    let meridian;
    let openingHour = parseInt(parkInfo[0].operating_hours[0].opening);
    let openingMinutes = openingHour * 60;
    let timeArray4Objects = [];
    for (let i = 0; i < attractionData.length; i++) {
        let attractObj = attractionData[i];
        if (attractObj.times !== undefined) {
            let timesArray = attractObj.times;

//////GREG!!!!!! WHY DID YOU MAKE THE TIMES STRINGS??????? WHYYYYYYYYYY.....
            for (let poop = 0; poop < timesArray.length; poop++) {
//time poop is the only time that works from here on out
                let time = timesArray[poop];
                let timeSplit = time.split(":");
                hours = parseInt(timeSplit[0]);//sets first index which is the first number in the hour
                minutes = parseInt(timeSplit[1].substr(0, 2));//minutes become 2nd index
                meridian = timeSplit[1].substr(-2);
                let attractMinutes = (hours * 60) + minutes;

                if (totalMinutes === openingMinutes && menuMeridian === "AM") {

                    if ((attractMinutes - totalMinutes) === -5) {

                        let magicalTurdObject = {name: attractObj.name, time: time, attractionType: attractObj.type_id};
                        timeArray4Objects.push(magicalTurdObject);
                        console.log("do we have a magical turd?", timeArray4Objects);
                        console.log("types????? DID you make it?", parkType);
                    }

                }else if ((attractMinutes - totalMinutes) <= 30 && (attractMinutes - totalMinutes) >=0) {
                    //setting up a special condition to test for 12pm
                    if((menuMeridian === meridian) || (totalMinutes === 690 && time === "12:00PM")){
                        console.log("Did we make another turd?", attractObj.name, time);
                        let magicalTurdObject = {name: attractObj.name, time: time, attractionType: attractObj.type_id};
                        timeArray4Objects.push(magicalTurdObject);
                        console.log("12pm are you where you should be?", magicalTurdObject);
                    }

                }

                let timeCompiled = " " + hours + ":" + minutes + " " + meridian;
                let eventName = attractObj.name;
                let attractTypeID = attractObj.type_id;
                let eventAndTime = eventName + timeCompiled;

            }
        }
    }
}

module.exports = {timeFunction};

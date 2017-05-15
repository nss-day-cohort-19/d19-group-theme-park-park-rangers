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








var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var currentBand = "";
var currentVeggie = "";


for (var i = 0; i < 5; i++) {
	currentBand += "<li>"+bands[i]+"</li>"
	currentVeggie += "<li>"+vegetables[i]+"</li>"
}

var bandElement = document.getElementById("boy-bands");
bandElement.innerHTML = currentBand;

var veggieElement = document.getElementById("vegetables");
veggieElement.innerHTML = currentVeggie;

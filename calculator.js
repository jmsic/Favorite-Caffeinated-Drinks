
//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
	res.sendFile(__dirname + "/");
})

app.post("/", function(req, res){
var cups = parseFloat(req.body.cups);
var caffeine = req.body.each_cup_caffeine_contain;

var total_caffeine = cups * caffeine;
var more_to_drink = Math.floor((500 - total_caffeine) / caffeine); 
	
	if (total_caffeine < 500){
		res.send('You can have ' + more_to_drink + ' one more cups');
	} else {
		res.send('You are Over your daily consumed, Your total caffeine is ' +  total_caffeine );
	}	
})


app.listen(3000, function(){
	console.log("Server starting on port 3000");
});
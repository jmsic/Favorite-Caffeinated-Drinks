
//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const alert = require('alert'); 

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
	res.sendFile(__dirname + "/");
})

app.post("/", function(req, res){

	if (req.body.cups == ""){
		alert('please enter number you like to consumed');
		res.redirect('/')		
	} else {
		var cups = parseFloat(req.body.cups);
		var caffeine;
		var drink;
		switch (Number(req.body.select_drink)) {
		  case 1:
		    caffeine = Number(150)
		    drink = 'Monster Ultra Sunrise'
		    break;
		  case 2:
		    caffeine = Number(95)
		    drink = 'Black Coffee'
		    break;
		  case 3:
		    caffeine = Number(77)
		    drink = 'Americano'
		    break;
		  case 4:
		    caffeine = Number(260)
		    drink = 'Sugar free NOS'
		    break;
		  case 5:
		    caffeine = Number(200)
		    drink = '5 Hour Energy'
		}


		var total_caffeine = cups * caffeine;
		var more_to_drink = Math.floor((500 - total_caffeine) / caffeine); 
		
		if (total_caffeine < 500){
			res.send('You can have ' + more_to_drink + ' more ' + drink);
		} else {
			res.send('You are Over your daily consumed, Your total caffeine is ' +  total_caffeine );
		}	
	}	
})


app.listen(3000, function(){
	console.log("Server starting on port 3000");
});
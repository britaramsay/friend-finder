// Dependencies
const express = require("express"), 
      bodyParser = require("body-parser"),
      path = require("path");

// Sets up the Express App
var app = express(),
    port = 3000;


var routes = require('./app/routing/htmlRoutes.js')(app, path); 

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Starts the server to begin listening
app.listen(port, () => console.log("App listening on PORT " + port));
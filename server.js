// Dependencies
const express = require("express"), 
      bodyParser = require("body-parser"),
      path = require("path");

// Sets up the Express App
var app = express(),
    port = process.env.PORT || 3000;
    
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/app/public')));

var htmlRoutes = require('./app/routing/htmlRoutes.js')(app, path),
    apiRoutes = require('./app/routing/apiRoutes.js')(app, path); 

    
// Starts the server to begin listening
app.listen(port, () => console.log("App listening on PORT " + port));
// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Click schema
var History = require("./models/history");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/addressDB");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//Routes
// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

//get all history
app.get("/history", function(req, res){
  History.find({}).exec(function(err, data){
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

//get recent 5 history
app.get("/recent", function(req, res){
  History.find({}).sort({_id: -1}).limit(5).exec(function(err, data){
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

//save searches
app.post("/history", function(req, res){
  History.insert({
    searchTerm: req.body.searchTerm
  }).exec(function(err){
    if (err) {
      console.log(err);
    } else{
      console.log("search logged");
    }
  });
});


// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
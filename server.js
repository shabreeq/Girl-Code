var connection = require("./db/connection");
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// Write an express js script to link html , css and js file to show message 
// “LJ University with a difference” with font size 50px and color “blue”.


var express = require("express");
var app = express();
app.use(express.static(__dirname,{index:"231.html"}))
app.listen(3000)
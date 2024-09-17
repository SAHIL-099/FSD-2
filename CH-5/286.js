// write a code to create a link named “About Us” using a Pug template engine inside Express 
// code.when you click on “About Us” it will redirect to the next page “/about” and display the 
// message “welcome to About us page”.


const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.get("/",(req,res)=>{
    res.render(__dirname+"/286_1.pug");
})
app.get("/about",(req,res)=>{
    res.render(__dirname+"/about.pug")
})

app.listen(4646);
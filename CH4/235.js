// Write expressJS script to perform task as asked:
// (A) Create one HTML file which contains text-field named username, 
// one dropdown which contains options of country like India, USA, 
// Canada, Australia. & one submit button.
// (B) Once user clicked on submit button it will jump to next page than 
// username & You are from “country name” which ever selected from 
// drop box should be printed.
// (C) Use get method to request data.

var express=require('express')
var app=express()

app.use(express.static(__dirname,{index:"235.html"}))

app.get("/data",(req,res)=>{
    var username=req.query.username
    var country=req.query.country

    if(country=='')
        {
            res.send("Please select country")
        }
    res.send(`Hello ${username} You are from ${country}`)
})
app.listen(5555);
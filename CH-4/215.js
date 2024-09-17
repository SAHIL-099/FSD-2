// write an express.js script to print "hello World" also run on 
// localhost:4000 

var express=require('express')
var app=express()
app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.listen(4000);
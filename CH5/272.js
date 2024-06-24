// write a code to create a link named “Contact Us” using a Pug template engine inside Express 
// code. When you click on “Contact Us” it will redirect to the next page “/contact” and display 
// the message “welcome to Contact us page”.

var express=require('express')
var app=express()
app.set("view engine","pug")
app.get("/",(req,res)=>{
    res.render(__dirname+"/272.pug")
    res.redirect("contact")
})
app.get("/contact",(req,res)=>{
    res.send("welcome to contact us page")
})

app.listen(4545);
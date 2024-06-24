const express = require('express');
const app = express();


app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname,{index:"236.html"}))

app.post("/login",(req,res,next)=>{
    res.set("content-type","text/html")
    var uname=req.body.uname
    var email=req.body.email
   
    res.write("<h1>welcome "+uname+"</h1> <h3>Your Email id "+email+"</h3>")
    next()
})

app.post("/login",(req,res)=>{
    var sb=req.body.sub
    if(sb=="on"){
        res.write("<h2>Thank you for subcribe</h2> <a href='/'>Logout</a>" )
    
    }
    else{
        res.write("<h2>To subscribe click below link</h2> <a href='/subscribe'>Subscribe</a>")
    }
    res.send()
})


app.get("/subscribe",(req,res)=>{
    res.set("content-type","text/html")
    res.write("<h2>Thank you</h2> <a href='/'>Logout</a>" )
})
app.listen(4545)
// Perform the following tasks as asked:
// 1) Create a HTML file for response form and this file should be loaded on home(‘/’) page. 
// •Fields are : Name, Email and Submit button.
// 2) Once Response is submitted, message “Thank you for your response.” Will be displayed on 
// page ‘/response’ and also send mail to the entered email id with the submitted response.
const express = require('express');
const app = express();
const nm=require('nodemailer')

app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname,{index:"287.html"}))

app.post("/data",(req,res)=>{
    res.send("Thank you for your response")
    res.redirect("response")
})

app.post("/redirect",(req,res)=>{
    var email=req.body.email

    var trans=nm.createTransport({host:"smtp.gmail.com",port:485,auth:{user:"sahil21@gmail.com"}})

    var mail={from:"sahil21@gmail.com",
        to:email,
        subject:"test",
        text:"hey"
    }

    trans.sendMail(mail,(err)=>{
        if(err){
            res.send("error")
        }
        res.send(mail)
    })
})
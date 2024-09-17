const exp = require('constants')
var express=require('express')
const nm=require('nodemailer')
var app=express()



    var trans=nm.createTransport({host:"smtp.gmail.com",port:465,auth:{user:"sahil21@gmail.com",pass:""}})

var mail={from:"sahil21@gmail.com",
    to:"abc123@gmail.com",
    subject:"hello",
    text:'how are you'
}
trans.sendMail(mail,(err,info)=>{
    if(err){
        console.log(err)
    }
    console.log(info)
})


app.listen(3000);

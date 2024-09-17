// Write an express.js script to send automatic mail to specified user

var express=require('express')
const nm=require('nodemailer')
var app=express()
app.use(express.urlencoded())
app.use(express.static(__dirname,{index:"273.html"}))

app.post('/send-email',(req,res)=>{
    var email=req.body.email
    var subject=req.body.subject
    var message=req.body.message

    var trans=nm.createTransport({host:"smtp.gmail.com",port:465,auth:{user:"sahil21@gmail.com",pass:""}})

var mail={from:"sahil21@gmail.com",
    to:email,
    subject:subject,
    text:message
}
trans.sendMail(mail,(err,info)=>{
    if(err){
        console.log(err)
    }
    console.log(info)
})
})

app.listen(3000);

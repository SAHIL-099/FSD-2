// Write a code to set up nodemailer in Express.js. 
// Sender email id: “lju@gmail.com”. 
// Receiver email ids: “student@gmail.com and faculty@gmail.com”. 
// Mail subject should be “LJ University” 
// Mail body contains “Welcome Student” in h3 tag and in table display data Date 28/06/23, 
// Exam name FSD-2.



var express=require('express')
const nm=require('nodemailer')
var app=express()

    var trans=nm.createTransport({host:"smtp.gmail.com",port:465,auth:{user:"lju@gmail.com",pass:""}})

var mail={from:"sahil21@gmail.com",
    to:"student@gmail.com,faculty@gmail.com",
    subject:"LJ University",
    html:"<h3>Welcome Student</h3><table><tr><th>date</th><th>exam</th></tr><tr><td>28/06/23</td><td>FSD-2</td></tr>"
}
trans.sendMail(mail,(err,info)=>{
    if(err){
        console.log(err)
    }
    console.log(info)
})


app.listen(3000);

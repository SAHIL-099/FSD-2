// Write a script to meet following requirement using ExpressJS.
// 1. Create index.html which contains login page having fields like 
// Username, Password & Gender. Open it on localhost.
// 2. After clicking on submit button, it should jump to savesession page. 
// store username & gender in session.
// 3. After saving session, redirect to fetchsession page and read session 
// values. Put a logout link button here.
// 4. After clicking logout button, it jumps to deletesession page.
// 5. Destroy the session on this page & redirect to index.html page.


var express=require('express')
var app=express()
var sess = require("express-session");
app.use(sess({
    resave: false,
    saveUninitialized: false,
    secret: "lju"
}));

app.use(express.static(__dirname,{index:"223.html"}))

app.get("/savesession",(req,res)=>{

    req.session.user=req.query.uname;
    req.session.gender=req.query.gender;
    res.redirect("fetchsession")
    

})

app.get("/fetchsession", (req, res) => {
    res.write("<h1>Welcome " + req.session.user + "</h1>")
    res.write("<a href='/deletesession'>Logout</a>")
    res.send();
});
app.get("/deletesession", (req, res) => {
    req.session.destroy()
    res.redirect('/')
});
app.listen(3434);

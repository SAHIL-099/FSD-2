// give example of cookies. create cookies and delete cookies. 

const express = require('express'); 
const cp = require('cookie-parser'); 
const app = express(); 
app.use(cp())

app.get('/', (req, res) => { 
res.cookie('name', 'express js');
res.cookie("fname","abc") 
res.cookie("lname","def") 
res.cookie("id","3",{expires:new Date(Date.now()+1000)})
res.cookie("email","exprees@gmail.com",{maxAge:3000})
res.clearCookie("fname")
res.send(req.cookies)   
}); 




app.listen(4040)

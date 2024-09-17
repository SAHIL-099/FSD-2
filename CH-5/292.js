// Write ExpressJS script to load following table using pug file on localhost.

const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.get("/",(req,res)=>{
    res.render(__dirname+"/292.pug");
})

app.listen(4545);
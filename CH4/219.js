// how can you create and use a middleware function in express js?

// use next function

const express = require("express");
const app = express();

//Method 1 
// const cb=(req,res,next)=>
//     {
//     console.log("Initialized");
//     res.set("content-type","text/html")
//     res.write("<strong>First</strong>");
//     next();
//     }
//     const cb1=(req,res,next)=>
//     {
//     res.write("<p>Addition = " + (5+5) + "</p>");
//     next();
//     }
//     app.use("/",cb,cb1);

//     app.get("/",(req,res)=>
//     {
//     res.write("<h1>Hello Welcome to LJU</h1>");
//     res.send();
//     });

//     app.listen(4544);


app.use("/",
    (req, res, next) => {
        console.log("request received on" + new Date());
        next();
    },
    (req, res, next) => {
        res.set("content-type", "text/html")
        res.write("Hello");
        next();
    },
    (req, res) => {
        res.write(`
        <h2>Welcome to LJU</h2>
        <h5>Tutorial on Middleware</h5>`);
        res.send();
    }
);
app.listen(4544);
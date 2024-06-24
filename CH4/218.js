// write an express.js to implement a form that allows users to submit 
// data via POST request. Write code to create a route that handles the 
// POST request and logs the submitted data to the console.

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname, { index: "218.html" }))
app.post("/process_post", (req, res) => {
    firstname = req.body.fname
    lastname = req.body.lname
    age = req.body.age
    console.log(firstname);
    console.log(lastname);
    console.log(age);
    res.send();

}
);
app.listen(5000, () => {
    console.log("server start");
});

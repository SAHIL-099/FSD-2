// using Express js make student information form only two fileds like 
// name and mobile no and send data on console after submitting 
// "submit" button

const express = require('express'); 
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname,{index:"221.html"}))
app.post("/show",(req,res)=>{
    console.log(req.body.name)
    console.log(req.body.mobile)
     res.send()
})

app.listen(4545);
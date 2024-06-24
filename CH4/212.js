// Process a form using post method. Form has fields like username, 
// password, confirm password, gender, submit and reset buttons. After 
// entering all fields, If password and confirm password matches, then 
// form should be processed and all relevant and selected fields’ values 
// should be printed. Otherwise, by printing warning message in red 
// color, it should terminate. No need to write file having form 
// elements

var express=require('express')
var app=express()

app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname,{index:"212.html"}))

app.post("/check",(req,res)=>{
    var username=req.body.uname;
    var pass=req.body.pwd;
    var cpass=req.body.cpwd;
    var gender=req.body.gen;

    if(pass==cpass){
        res.set("content-type","text/html")
        res.write("<h2>Form Details</h2><br>")
        res.write("<p>username:"+username +"<br>"+"password:"+pass+"<br>"+"gender:"+gender)
        res.send()
    }
    else{
        res.set("content-type","text/html")
        res.send("<h2 style='color:red'> password does not match</h2>")
    }
})
app.listen(5050);
// write express script to maintain session and print how many times user 
// visit the page. For ex., if user visit first time ,”you have visited page 
// First time” message will print. if user visit second time ,”you have 
// visited page second time” message will print. and so on

var express=require('express')
var app=express()
var sess=require('express-session')
app.use(sess({resave:true,saveUninitialized:true,secret:'abc'}))

app.get("/",(req,res)=>{
    if(req.session.page_view){
        req.session.page_view++
        res.write("you visited page "+req.session.page_view + " times")

    }
    else{
        req.session.page_view=1
        res.write( "you visited page " + req.session.page_view +" times")
     
    }
    res.send()
})

app.listen(3434);
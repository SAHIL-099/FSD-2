var express=require('express')
var app=express()
app.set("view engine","pug")



app.get("/",(req,res)=>{
    var data={message:"hello word"}
    res.render(__dirname+"/280.pug",{data})
})

app.listen(3535);
// Write an express js script to configure the multer middleware. Perform following tasks.
// 1) Create a html form file named "form.html" in public folder. This file contain centrally 
// oriented heading(h3) "Upload your File" in red color with background-color aqua. Along with 
// choose file option(to browse and select file) and submit button(to upload the file). (Must use 
// external css having name “effect.css” in public folder)
// 2) Create a js file to show result after uploading any type of file, message should be displayed 
// on "/upload" page "(file original name) has been uploaded".(Css effect must include while 
// running js code)
// 3) Save uploaded files to specific directory named "File". And in this folder file must be stored 
// in format of "data-file.pdf" where "data" is the field name.

var express=require('express')
var app=express()
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname,{index:"form.html"}))

var multer=require('multer')

var store=multer.diskStorage({destination:"File",filename:function(req,file,cb){
    cb(null,file.fieldname+"-file.pdf")
}})

var upload=multer({storage:store})

app.post("/upload",upload.single("data"),(req,res)=>{
    if(req.file){
        res.send(`file:${req.file.originalname} uploaded`)
    }
    else{
        res.send("file not uploaded")
    }
})

app.listen(4545);
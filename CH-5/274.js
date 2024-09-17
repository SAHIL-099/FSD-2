// Write an express.js script to upload image.
const exp = require('constants')
var express=require('express')
var app=express()
var multer=require('multer')
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname,{index:"274.html"}))

var store=multer.diskStorage({destination:"upload",filename:function(req,file,cb){
    cb(null,file.originalname)
    console.log(file)
}})
const maxsize=1024*1024*1024
const upload=multer({storage:store,limits:{fileSize:maxsize}})

app.post("/upload",upload.single("mypic"),(req,res)=>{
    if(req.file){
        res.send("file uploaded successfully")
    }
    else{
        res.send("error in file upload")
    }
})
app.listen(4646);
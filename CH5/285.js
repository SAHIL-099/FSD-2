// Write an express JS script to upload any type of file of size up to 50KB only

const express = require('express');
const multer=require('multer')
const app = express();

app.use(express.static(__dirname,{index:"284.html"}))
app.use(express.urlencoded({extended:false}))

var store = multer.diskStorage({destination:"upload4",
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

var maxsize=50*1024;
var upload=multer({storage:store,limits:{fileSize:maxsize}})

app.post("/upload",upload.single("mypic"),(req,res)=>{
    res.send("File uploaded successfully")


})

app.listen(4545);
// Write express js script to upload file with size limit of 1 MB to a specific directory named 
// “Data” on the server.


const express = require('express');
const multer = require('multer');
const app = express();

const store= multer.diskStorage({
    destination:'Data',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const maxsize=1*1024*1024;
var upload=multer({storage:store,limits:{fileSize:maxsize}})
app.get("/upload",upload.single("mypic"),(req,res)=>
{
    if(req.file){
        res.send("File uploaded successfully");
    }
})

app.listen(3000);

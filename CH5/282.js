// Write a code to upload file and access uploaded file in express js.

var express = require('express')
var app = express()
var multer = require('multer')
const path = require('path');

app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname, { index: "282.html" }))

var store = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'upload3')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
const maxsize = 1024 * 1024 * 1024
const upload = multer({ storage: store, limits: { fileSize: maxsize } })

app.post("/upload", upload.single("data"), (req, res) => {
    if (req.file) {
        res.write(`File${req.file.originalname} uploaded sucesss fully`);
    }
    else {
        res.send("error in file upload")
    }
})

app.get("/view/:filename", (req, res) => {
    var f = path.join(__dirname, 'upload3', req.params.filename);
    res.send(f, (err) => {
        if (err) {
            res.send("error in  file display")
        }
    })
})
    

app.listen(4646);
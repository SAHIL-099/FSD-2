// Write an ExpressJS to take a textarea & submit button. After clicking 
// submit button the content of textarea should be represented on next 
// page by writing each sentence (separated by dot) in new line.


const express = require('express'); 
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname,{index:"222.html"}))
app.post("/data",(req,res)=>{
    res.set("content-type","text/html")
    var text=req.body.text
    var n=text.split(".")
     for(i in n){
        res.write(n[i]+"<br>")
     }
     res.send()
})

app.listen(4545);
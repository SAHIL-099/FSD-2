const expr=require('express')
const app=expr()
const mg=require('mongoose')
mg.connect("mongodb://127.0.0.1:27017/expressdata")


const myschema=new mg.Schema({

    username:{type:String,trim:true,lowercase:true},
    email:{type:String,trim:true,unique:true,required:true},
    password:{type:String,trim:true,minlength:6 ,maxlength:15}

})

const mymodel=mg.model('edata',myschema)

app.use(expr.static(__dirname,{index:"e1.html"}))

app.get("/get_data",async(req,res)=>{
    const mydata=new mymodel({
        username:req.query.uname,
        email:req.query.email,
        password:req.query.pass
    })
    const result=await mydata.save()
    res.send("Data inserted to view data:<a href='/display_feedback'>click here</a>")

})

app.get("/display_feedback",async(req,res)=>{
    const data=await mymodel.find()
    res.write("<table border='1px solid'><tr><th>Name</th><th>Email</th><tr>");

  data.map((d)=>{
    res.write("<tr><td>"+d.username+"</td><td>"+d.email+"</td></tr>")
  })
  res.end("</table>")
})
app.listen(4000);
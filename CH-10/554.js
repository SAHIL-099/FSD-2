// Create one login form having username , password and submit button . By clicking submit button 
// username and password should be store inside database. Use mongoose and express module. write 
// all necessary files

const expr=require('express')
const app=expr()
const mg=require('mongoose')
mg.connect("mongodb://127.0.0.1:27017/qb")


const myschema=new mg.Schema({

    username:{type:String,trim:true,lowercase:true},
    password:{type:String,trim:true,minlength:6 ,maxlength:15}

})

const mymodel=mg.model('userdata',myschema)

app.use(expr.static(__dirname,{index:"form.html"}))

app.post("/login",async(req,res)=>{
 
    const mydata=new mymodel({
        username:req.query.uname,
        password:req.query.uname
    })

    try{
        const result=await mydata.save()
    }
   catch(e){
    console.log(e)
   }
    res.send("Data inserted")

})

app.listen(4000);
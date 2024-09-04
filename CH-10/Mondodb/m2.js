const mg=require('mongoose')
mg.connect("mongodb://127.0.0.1:27017/mongodata")
.then(()=>{console.log("connected")})
.catch((err)=>{console.error(err)})

mg.pluralize(null)

const myschema=new mg.Schema(
    {name:{type:String,required:true},
    branch:String,
    age:Number,
    date:{type:Date,default:new Date()}


})

const user=new mg.model("user",myschema)

const createDoc=async()=>{
    try{
        const UserData=[{name:"A",branch:"IT",age:20},{name:"B",branch:"CE",age:18}]
        
        const result=await user.insertMany(UserData)
    }
   
    catch(e){
        console.error(e)
    }
}

createDoc()
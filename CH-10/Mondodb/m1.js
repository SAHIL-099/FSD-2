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
        const UserData=new user({
            name:"ABC",
            branch:"CE",
            age:25
        })
        const UserData1=new user({
            name:"XYZ",
            branch:"CSE",
            age:19
        })
        const result=await user.insertMany([UserData,UserData1])
    }
    catch(e){
        console.error(e)
    }
}

createDoc()
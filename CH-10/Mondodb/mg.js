const mg=require('mongoose')
mg.connect("mongodb://127.0.0.1:27017/mongodata")
.then(()=>{console.log("connected")})
.catch((err)=>{console.error(err)})

mg.pluralize(null)

const myschema=new mg.Schema(
    {username:{type:String,required:[true,'username is required'],minlength:[4,"must be at least 4 characteter"],maxlength:[20,'can not more than 20 character'],match:[/^[A-Za-z]+[0-9]+$/,'must start with latter end with digit'],trim:true,uppercase:true},
    emial:{type:String,required:true,unique:true,match:[/\s+@\s+\.s+/]},
    age:{type:Number,min:18,max:65},
    role:{type:String,enum:['user','admin'],default:'user'}
    }


)

const user=new mg.model("user2",myschema)

const createDoc=async()=>{
    try{
        const newuser=new user({username:"abc123",email:"abc123@gmail.com",age:25,role:'admin'})
        const result=await newuser.save()
    }
    catch(e){
        console.error(e)
    }
}

createDoc()
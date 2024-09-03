// How can we enter multiple documents in a database using express JS?


const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/qb')
.then(()=>{console.log("connected")})
.catch((err)=>{console.log(err)})


mg.pluralize(null)

const myschema=new mg.Schema({name:{type:String,required:true},
age:{type:Number},
active:{type:Boolean},
date:{type:Date,default:new Date()}
})

const person=new mg.model('person',myschema)

const createdoc=async()=>{
    try{
        const data=[{name:"test",age:25,active:true},{name:"def",age:45,active:true}]
        const result=await person.insertMany(data)
    }
    catch(e){
        console.log(e)
    }
   
}

createdoc()
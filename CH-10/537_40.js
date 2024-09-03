// Write an expess JS script to insert a document in database using Mongoose. 
// Create a schema using Schema() constructor having name, surname, age, active and date fields. 

// Name must accept strings and it is a required field. Age must accept numeric values only. Active 
// must accept true/false. Date should have default today's date if it is not entered.

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
        const data=new person({name:"abc",age:17,active:true})
        const result=await data.save()
    }
    catch(e){
        console.log(e)
    }
   
}

createdoc()
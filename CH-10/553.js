// Write a node.js script to define a schema having fields like name,surname,email,password,city.
// Apply following validations:
// (1)name field must required .
// (2)surname must accept values in small letters.
// (3) Perform Email ID validation on Email field.
//  (4) password must have minimum and maximum length should be 8 & 12 respectively
//  (5)city allowed values are “baroda”,”surat” and “ahmedabad” only


const mg=require('mongoose')
const validator=require('validator')
mg.connect('mongodb://127.0.0.1:27017/qb')
.then(()=>{console.log("connected")})
.catch((err)=>{console.log(err)})

mg.pluralize(null)

const myschema=new mg.Schema({
     name:{type:String,required:true},
     surname:{type:String,lowercase:true},
     email:{type:String,required:true,validate:{validator:(v)=>{return validator.isEmail(v)}}},
     password:{type:String,minlength:8,maxlength:12},
     city:{type:String,enum:['baroda','surat', 'ahmedabad']}
})


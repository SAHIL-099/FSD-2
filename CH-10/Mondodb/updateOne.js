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

// const updateuser=async(name,update)=>{
//     try{
//         const result=await user.updateOne({name},update,{upsert:true})
//         console.log(result)
//     }
//     catch(e){
//         console.error(e)
//     }

// }
// updateuser("test",{age:18,branch:"CE"})



// const updateuser=async(name,update)=>{
//     try{
//         const result=await user.updateOne({name},update,{upsert:true})
//         console.log(result)
//     }
//     catch(e){
//         console.error(e)
//     }

// }
// updateuser("test",{age:18,branch:"CE"})





const deleteuser=async(id)=>{
    try{
        const deluser=await user.findByIdAndDelete(id)
       if(deleteuser){
         console.log("user deleted")
       }
       else{
        console.log("not found")
       }
    }
    catch(e){
        console.error(e)
    }

}
deleteuser("66c4177b81474b33765bdfdd")

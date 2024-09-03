// Consider following citizens collection:
// [
//  {_id:123433, name: “DD", surname: "abc", age:61},
//  {_id:123434, name: "LL", surname: "def", age:38},
//  {_id:123435, name: "KK", surname: "pqr", age:29}
//  {_id:123436, name: "ZZ", surname: "xyz", age:62}
// ]
// Insert above data in "userdata” collection under database named “maindata” and write a query to 
// perform below task in node.js.
// (1)Insert a category field with value “SeniorCitizen” having age greater than 60.
// (2)Display total number of documents having age between 30 and 60 only



const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/maindata')
.then(()=>{console.log("connected")})
.catch((err)=>{console.log(err)})


mg.pluralize(null)


const myschema=new mg.Schema({ _id:Number,name:String,surname:String,age:Number})

const user=new mg.model('userdata',myschema)

const createdoc=async()=>{

    try{

    const Data=[{_id:123433,name:"DD",surname:"abc",age:61},
          {_id:123434,name:"LL",surname:"def",age:38},
          {_id:123435,name:"KK",surname:"pqr",age:29},
          {_id:123436,name:"ZZ",surname:"xyz",age:62}]

        
        const result=[]
        // result.push(await user.insertMany(Data))

        
        result.push(await user.updateMany({age:{$gt:60}},{$set:{category:"SeniorCitizen"}}))

        console.log( result.push(await user.countDocuments({age:{$gte:30,$lte:60}})))
       

    }

    catch(e){
        console.log(e)
    }
}

createdoc()


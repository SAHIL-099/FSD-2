// Write a node.js script to insert 4 documents simultaneously in a collection. Assume that schema is 
// already created having name(string), surname(string), age(Number), active(Boolean) fields. 

const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/qb')
.then(()=>{console.log("connected")})
.catch((err)=>{console.log(err)})




const students=new mg.model('student',myschema)

const createdoc=async()=>{

    try{

    const Data=[{ name: 'Eve', surname: 'Miller', age: 23, active: true },
        { name: 'Frank', surname: 'Davis', age: 26, active: false },
        { name: 'Grace', surname: 'Wilson', age: 20, active: true },
        { name: 'Henry', surname: 'Anderson', age: 22, active: false }]

        
        const result=await students.insertMany(Data)
    }

    catch(e){
        console.log(e)
    }
}

createdoc()
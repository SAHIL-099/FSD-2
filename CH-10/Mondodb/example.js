const mg=require('mongoose')
mg.connect("mongodb://127.0.0.1:27017/validation")
.then(()=>{console.log("connected")})
.catch((err)=>{console.error(err)})

mg.pluralize(null)
const myschema=new mg.Schema({
    
    name:String,
    age:Number,
    postion:String,
    salary:Number
    })
    const emp=new mg.model("emp",myschema)

    const createDoc=async()=>{
        try{
            const EmpData=[
            {_id:1,name:"Eric",age:30,position:"Full Stack Developer",salary:60000},
            {_id:2,name:"Erica",age:35,position:"Intern",salary:8000},
            {_id:3,name:"Erical",age:40,position:"UX/UI Designer",salary:56000},
            {_id:4,name:"treric7",age:37,position:"Team Leader",salary:85000},
            {_id:5,name:"Eliza",age:25,position:"Software Developer",salary:45000},
            {_id:6,name:"Trian",age:29,position:"Data Scientist",salary:75000},
            {_id:7,name:"Elizan",age:25,position:"Full Stack Developer",salary:49000}]
            
            const result=[]
            // result.push(await emp.insertMany(EmpData))
            console.log("1.Find All Documents")
            result.push(await emp.find())

            console.log("2.Find Documents by Position “Full Stack Developer")
            result.push(await emp.find({position:"Full Stack Developer"}))

           console.log("3.Retrieve name of employees whose age is greater than or equal to 25 and less than or equal to 40.")
            result.push(await emp.find({age:{$gte:25,$lte:40}},{name:1,_id:0}))

            console.log("4.retrieve name of the employee with the highest salary.")
            result.push(await emp.find().sort({salary:-1}).limit(1))

            console.log("5.Retrieve employees with a salary greater than 50000")
            result.push(await emp.find({salary:{$gt:50000}}))

            console.log("6.Retrieve employees' names and positions, excluding the _id field.")
            result.push(await emp.find({},{"name":1,"position":1,"_id":0}))

            console.log("7.Count the number of employees who have salary greater than 50000")
            result.push(await emp.countDocuments({salary:{$gt:50000}}))


            console.log("8.Retrieve employees who are either  Software Developer or Full Stack Developer and are below 30 years")
            result.push(await emp.find({$and:[{$or:[{position:"Software Developer"},{position:"FullStack Developer"}],age:{$lt:30}}]}))
            
            // console.log("9.Increase the salary of an employee who has salary less than 50000 by 10%")
            //  result.push(await emp.updateMany(
            //      {salary:{ $lt: 50000 }},
            //     {$mul:{salary: 1.10 } }
            // ))
             
            // console.log("10.Delete all employees who are older than 50.")
            // result.push(await emp.deleteMany({age:{$gt:50}}))

            // console.log("11.Give a 5% salary raise to all Data Scientist")
            // result.push(await emp.updateMany(
            //     { position: "Data Scientist" },
            //     { $mul: { salary: 1.05 } }
            //   ));

             console.log("12.Find documents where name like “%an”") 
             result.push(await emp.find({name:/an/i}))
             
             console.log("13.Find documents where name like “Eri--” (Case Insensitive”") 
             result.push(await emp.find({name:/^Eri{2}$/i}))

             console.log("14.Find documents where name like “%ric%””") 
             result.push(await emp.find({name:/ric/i}))

             console.log("15.Find documents where name contains only 4 or 5 letters.”") 
             result.push(await emp.find({name:/^[a-zA-Z]{4,5}$/}))

             console.log("16.Find documents where name must end with digit") 
             result.push(await emp.find({name:/\d$/}))
           
             
            
            console.log(result)
        }
       
        catch(e){
            console.error(e)
        }
    }
    
    createDoc()
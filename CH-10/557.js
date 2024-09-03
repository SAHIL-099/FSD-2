// Create a React form which accepts Name,Rollno and totalmarks,on submitting the form it should be 
// saved in data table inside MongoDB database named student. 

express=require('express')
const app=express()
cors=require('cors')
const mg=require('mongoose')
const bodyParser = require('body-parser');


app.use(cors())
app.use(bodyParser.json());


mg.connect("mongodb://127.0.0.1:27017/reactconnect")
.then(()=>{console.log("connected")}).
catch((e)=>{console.log(e)})


const schema=new mg.Schema(
    {name:String,
    rollno:Number,
    totalmarks:Number
})

const students=new mg.model('student',schema)

app.post("/form", async (req, res) => {
    try {
        const { name, rollno, totalmarks } = req.body;
        const student = new students({ name, rollno, totalmarks });
        await student.save();
        res.send("Data inserted");
    } catch (e) {
        console.error("Error occurred:", e);
        res.status(500).send("Error occurred while inserting data");
    }
});

app.listen(4000)


// Create react app to craete exam form. Fields are as under.
// Name -text,
// Email -email
// Password -password, 
// Gender-radio, 
// Exam date-datepicker,
// Exam center-dropdown)
// Use useState hook to save the state of the form. Also, add validation for the email and password fields. 
// Display submited values.

import { useState } from "react";
 function Form440(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [examcenter, setExamcenter] = useState("");
    const [date,setDate]=useState("")


    function handlesubmit(){
        alert(`name: ${name}\nEmail: ${email}\nGender:${gender}\nExamdate:${date}\nExamCenter${examcenter}`)
    }
   return(
    <>
    <form onSubmit={handlesubmit}>
  name:<input onChange={(e)=>setName(e.target.value)}></input><br></br>
  email:<input type="email" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
  password:<input type="password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
 
 gender:<input type="radio" name="gender" value="male" onChange={(e)=>setGender(e.target.value)}></input> Male
 <input type="radio" name="gender" value="female" onChange={(e)=>setGender(e.target.value)}></input>Female
 <br></br>
 time:<input type="date" onChange={(e)=>setDate(e.target.value)}></input>
 <br></br>
 examcenter:<select onChange={(e)=>setExamcenter(e.target.value)}>
    <option value="delhi">delhi</option>
    <option value="mumbai">mumbai</option>
    <option value="ahmedabad">ahmedabad</option>
 </select>
 <br></br>
 <button type="submit">submit</button>
  </form>
    
    </>
   )

 }

 export default Form440;
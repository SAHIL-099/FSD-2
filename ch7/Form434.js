// Create a Sign-up form using React asking for username, age, email, password, and confirm password. 
// When the user clicks on the ‘submit’ button, it will display an alert box with a username, age, and 
// email details entered by the user
import { useState } from "react";
 function Form434(){
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    function handlesubmit(){
        alert(`Username: ${username}\nAge: ${age}\nEmail: ${email}`)
    }
   return(
    <>
    <form onSubmit={handlesubmit}>
  usename:<input onChange={(e)=>setUsername(e.target.value)}></input><br></br>
  age:<input type="number" onChange={(e)=>setAge(e.target.value)}></input><br></br>
  email:<input type="email" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
  password:<input type="password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
  confirm password:<input type="password" onChange={(e)=>setConfirmPassword(e.target.value)}></input><br></br>
 <button type="submit">submit</button>
  </form>
    
    </>
   )

 }

 export default Form434;
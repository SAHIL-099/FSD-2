// Write a program to build React app having 2 input text fields (First name and last name) and display 
// the entered value on the same page.
import { useState } from "react";

function Us425() {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')

    function handleFname(e) {
        setFname(e.target.value)
    }

    function handleLname(e){
        setLname(e.target.value)
    }

return (
    <>
        <form>
            First name:<input type="text" onChange={handleFname}></input>
            last name:<input type="text" onChange={handleLname}></input>
            <h2>First Name:{fname}</h2>
            <h2>Last Name:{lname}</h2>
        </form>
    </>
)

    
}
export default Us425;
// Write a program to build React app to perform the tasks as asked below.
// •Add a button “Change Text”.
// •Add “Hello” text in h2 tag.
// •By clicking on “Change text” button text should be changed to “How are you?” and vice versa.


import { useState } from "react";

function Us429(){

    const[text,setText]=useState('Hello')

    function handleChangeText(){
        if(text==='Hello'){
            setText('How are you')
        }
        else{
            setText('Hello')
        }
    }

    return(
        <>
       <h2>{text}</h2>
        <button onClick={handleChangeText}>Change Text</button>
        </>
    )
}

export default Us429;
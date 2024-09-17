// Write a program to build React app having a button which increase count by 1 while clicking it. 
// (useState)

import React, { useState } from 'react';

function Us421(){

    const[count,setCount]=useState(0)

    function handlecount(){
        setCount(count+1)
    }

    return(
        <>
        
        <p>count:{count}</p>
        <button onClick={handlecount}>Increase</button>
        </>
    )
}

export default Us421;
// Write a program to build React app having text and button to show and hide the text

import { useState } from "react";

function Us427(){

    const[hide,setHide]=useState(false)

    function handlehideshow(){
        setHide(!hide)
    }

    return(
        <>
        {hide?null:<h2>Hello world</h2>}
        <button onClick={handlehideshow}>{hide?'show':'hide'}</button>
        </>
    )
}

export default Us427;
// Write a program to build React app to perform the tasks as asked below.
// •Add three buttons “Change Text”, “Change Color”, “Hide/Show”.
// •Add heading “LJ University” in red color(initial) and also add “React Js Hooks” text in h2 tag.
// •By clicking on “Change text” button text should be changed to “Welcome students” and vice versa. 
// •By clicking on “Change Color” button change color of text to “blue” and vice versa. This color 
// change should be performed while double clicking on the button.
// •Initially button text should be “Hide”. While clicking on it the button text should be changed to 
// “Show” and text “React Js Hooks” will not be shown.

import { useState } from "react";
function Us423() {

    const [text, setText] = useState('React Js Hooks')
    const [color, setColor] = useState('red')
    const [hide, setHide] = useState(false)

    function handleChangeText() {

        if (text === 'React Js Hooks') {
            setText('Welcome students')
        }
        else {
            setText('React Js Hooks')
        }
    }

    function handlecColor() {
        if (color === 'red') {
            setColor('blue')
        }
        else {
            setColor('red')
        }
    }
    function handlleHideShow() {
        setHide(!hide)
    }


    return(
        <>
       <h1 style={{color:color}}>LJ University</h1>
       {hide ? null:<h2>{text}</h2>}
       <button onClick={handleChangeText}>Change Text</button>
      <button onDoubleClick={handlecColor}>Change Color</button>
      <button onClick={handlleHideShow}>{hide ? "Show" : "Hide"}</button>
        </>
    )

}



export default Us423;
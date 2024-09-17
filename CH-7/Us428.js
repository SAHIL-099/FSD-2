
// Write a program to build React app having 2 input number fields (Number 1 and Number 2) and 
// display the entered value on the same page. And then click on add button to calculate the addition of 
// two numbers. Display the addition in h2 tag.

import { useState } from "react"
function Us428(){

    const[num1,setNum1]=useState(0)
    const[num2,setNum2]=useState(0)
    const[result,setResult]=useState(0)

  function handleNum1(e){
    setNum1(e.target.value)
  }
  function hadleNum2(e){
    setNum2(e.target.value)
  }

  function handleresult(){
    setResult(parseInt(num1)+parseInt(num2))
  }

    return(
        <>
        number 1:<input onChange={handleNum1}></input>
        number 2:<input onChange={hadleNum2}></input>
        <button onClick={handleresult}>Add</button>
        <h2>Result:{result}</h2>
        </>
    )
}

export default Us428;

// Create a program to build React app having buttons to increment and decrement the number by 
// clicking that respective button. Also, increment of the number should be performed only if number is 
// less than 10 and decrement of the number should be performed if number is greater than 0. 
import { useState } from "react";

function Us422(){

    const[count,setCount]=useState(0)

    function handleIncreament(){
        if(count<10){
            setCount(count+1) 
        }
          
    }
    function handleDecreament(){
        if(count>0)
        {
            setCount(count-1)
        }
        
    }

    return(
        <>
        <h2>count:{count}</h2>
        <button onClick={handleIncreament}>Increase</button>
        <button onClick={handleDecreament}>Decrease</button>
        </>
    )

}
export default Us422;
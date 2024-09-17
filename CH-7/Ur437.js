// Create React Js app to perform the tasks as asked below.
// -Add buttons "increment" and "decrement"
// -By clicking on increment button the value should be incremented by 1 and by clicking on decrement 
// button value should be decremented by 1.
// -Use useReducer hook to perform the above tasks

import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";
const intial_val=0;
function reducer(state,action){
    if(action.type==='inc'){
        return state+1
    }

    if(action.type==='dec'){
        return state-1;
    }
}

function Ur437(){

    const[state,dispatch]=useReducer(reducer,intial_val)

    return(
        <>
        <h2>{state}</h2>
        <button onClick={()=>dispatch({type:"inc"})}>increment</button>
        <button onClick={()=>dispatch({type:"dec"})}>decrement</button>
        </>
    )
}
export default Ur437;
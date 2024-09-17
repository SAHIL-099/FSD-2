// Create React Js app to perform the tasks as asked below.
// -Add button "Click"
// -By clicking on button the value should be incremented by 5. Initial value is 20.
// -Use useReducer hook to perform the above tasks.

import { useReducer } from "react";
const intial_val=20;
function reducer(state,action){
    if(action.type==='inc'){
        return state+5
    }
}

function Ur438(){

    const[state,dispatch]=useReducer(reducer,intial_val)

    return(
        <>
        <h2>{state}</h2>
        <button onClick={()=>dispatch({type:"inc"})}>increment</button>
        </>
    )
}
export default Ur438;
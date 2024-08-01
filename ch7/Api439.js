
import  axios from "axios";
import { useState,useEffect } from "react";
function Api439(){
const[joke,setJoke]=useState('')

function fetchjoke(){
    axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then((response)=>{setJoke(response.data)})
    .catch((error)=>{console.log(error)})
}
useEffect(fetchjoke,[])


return(
        <>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={fetchjoke}>Generate joke</button>
        </>
)
}
export default Api439;
import { useEffect, useState } from "react";

function Ue431(){
    const [countA,setCountA]=useState(0)
    const [countB,setCountB]=useState(0)

    // useEffect(()=>{alert("first render and on every update")})
    // useEffect(()=>{alert("page rendered")},[])
    // useEffect(()=>{alert("page render for first time and on updating vallue of count A")},[countA])

    function handleCountA(){
        setCountA(countA+1)

    }

    function handleCountB(){
        setCountB(countB+1)
    }

    return(<>
    <br></br>
    <button onClick={handleCountA}>ButtonA</button>
    <br></br><br></br><button onClick={handleCountB}>ButtonB</button>
     
     <h1>button A:{countA}</h1>
     <h1>button B:{countB}</h1>

    </>)
}

export default Ue431;
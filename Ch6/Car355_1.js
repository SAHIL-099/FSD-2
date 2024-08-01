// Write a React code to print car’s brand name and its model name which are
// passed as props using JSON. 

import Car355_2 from "./Car355_2"

function Car355_1(){
    const cars={"brand":"mahindra","model":"thar"}
    return (
        <Car355_2 data={cars}></Car355_2>
    )
}

export default Car355_1;
// Create React app to pass color(red), background color(yellow), font size(25px) and font style(italic) as 
// properties to component and apply css to "Lj Students" text written in p tag. use Props 

import Prop368_2 from "./Prop368_2";
function Prop368_1(){
    
    const css={color:"red",backgroundColor:"yellow",fontSize:"25px",fontStyle:"italic"}

    return(
        <Prop368_2 data={css}></Prop368_2>
    )

}

export default Prop368_1;
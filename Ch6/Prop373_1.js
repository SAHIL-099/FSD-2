
// Create react app using function component to pass background color(green), font size(50px) font 
// style(italic),text transform(uppercase) as properties to Example .js component and apply css to “This is 
// an React Application” text written in h1 tag in Example2.js component. 


import Prop373_2 from "./Prop373_2";
function Prop373_1(){
    
    const css={textTransform:"uppercase",backgroundColor:"green",fontSize:"50px",fontStyle:"italic"}

    return(
        <Prop373_2 data={css}></Prop373_2>
    )

}

export default Prop373_1;
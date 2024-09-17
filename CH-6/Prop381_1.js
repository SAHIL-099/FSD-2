// Create a React function component named File1 that receives two props, productName and 
// price. The component should display the product name and price. Additionally, add a button 
// labeled "Add to cart" to the component. When the button is clicked onClick event triggered 
// and an alert should be displayed with the message "Your Product is Added to cart!". 

import Prop381_2 from "./Prop381_2"

function Prop381_1(){

    const arr=[{name:"shoes1",price:10000},{name:"shoes2",price:7000}]

    return(
        <Prop381_2 data={arr}></Prop381_2>
    )
}

export default Prop381_1;
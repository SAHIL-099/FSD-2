// Create react app to pass product image, name and price as properties from one component to another 
// component. Add an array of objects with pic, name and price properties of 2 products. Display Image 
// name and price of the products in browser using map method. 

import Prop372_2 from "./Prop372_2";
import shoes1 from "../imges/shoes1.jpg"
import shoes2 from "../imges/shoes2.jpg"
function Prop372_1(){

   const arr=[{image:shoes1,name:"shoes1",price:2000},{image:shoes2,name:"shoes2",price:3000}]

    return(
        <Prop372_2 data={arr}></Prop372_2>
    )
}
export default Prop372_1;
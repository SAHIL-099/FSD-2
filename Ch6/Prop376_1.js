
// Write React JS script to display three products. Products having title, product image, price 
//   and description. All three products should be horizontally adjacent to each other. Note: using 
//   props show all products and use Functional component for complete this script.

import Prop372_2 from "./Prop372_2";
import shoes1 from "../imges/shoes1.jpg"
import shoes2 from "../imges/shoes2.jpg"
import shoes3 from "../imges/shoes3.jpg"
function Prop376_1(){

   const arr=[{image:shoes1,name:"shoes1",price:2000},{image:shoes2,name:"shoes2",price:3000},{image:shoes3,name:"shoes3",price:60000}]

    return(
        <Prop372_2 data={arr}></Prop372_2>
    )
}
export default Prop376_1;
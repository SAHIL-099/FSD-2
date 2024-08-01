
import {Num1,Num2} from "./comp"
import {useContext } from "react";
function Comp3(){
    const n1=useContext(Num1)
    const n2=useContext(Num2)
    return(
      <h2>multiplication is :{n1*n2}</h2>
    )
}
export default Comp3;
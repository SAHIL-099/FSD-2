
// Write a reactJS program to perform the tasks as asked below.
// 1) Create one main file (parent file)Main.js and other 2 component files Comp1.js, Comp2.js. Pass 
// username from Main.js file to Comp2.js file. Display this user name in browser in Blue color. 
// (useContext)

import { createContext } from "react";
import Comp1 from "../Uc433/Comp1";

const Username=createContext()

function Main(){
   return(
    <Username.Provider value="admin">
        <Comp1/>
    </Username.Provider>
   )
}
export default Main;
export{Username};
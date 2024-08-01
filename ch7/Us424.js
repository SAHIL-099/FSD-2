// Write a program to build React app having a button which changes image by clicking it. (Add two 
//     images)

import shoes1 from "../imges/shoes1.jpg"
import shoes2 from "../imges/shoes2.jpg"
import { useState } from "react";

function Us424() {

    const [img,setImage] = useState(shoes1)

    function handleChangeImage() {
        if (img === shoes1) {
            setImage(shoes2)
        }
        else {
            setImage(shoes1)
        }

    }
        return (
            <>
                <img src={img} height={300} width={300}></img><br></br>
                <button onClick={handleChangeImage}>change</button>
            </>
        )

    
}
    export default Us424;
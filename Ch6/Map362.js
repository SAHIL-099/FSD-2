// Create react app which displays 3 images using map function

import thor from "../imges/thor.jpg"
import flower1 from "../imges/flower.jpg"
import flower2 from "../imges/flower2.jpg"

function Map362(){

    const arr=[thor,flower1,flower2]

    return(
        arr.map((i)=>{
            return(
                <img src={i} height={300} width={400} alt=""></img>
            )
        })
    )
}
export default Map362;
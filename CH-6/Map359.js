// Create react js app to display all array elements in h2 tag using map function

function Map359(){
   const arr=[1,2,3,4,5,6,7,8,9,10]
    return(
        arr.map((a)=>{
        return <h2>{a}</h2>
    })
    )
}
export default Map359;
// We have an array of numbers and we want to multiply each of these numbers
// by 5. Create react js app to display these multiplied numbers using map
// function.

function Map361(){

    const arr=[1,2,3,4,5,6,7,8,9,10]

    return(
        arr.map((a)=>{
            return <h2>{a}*5={a*5}</h2>
        })
    )
}
export default Map361;
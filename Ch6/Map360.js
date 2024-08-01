// write a program to create ReactJS application having an array of strings and
// convert it in Uppercase using MAP method.

function Map360(){

    const arr=["sahil","ajay","vipul","a","def"]

    return(
        arr.map((a)=>{
            return <h2>{a.toUpperCase()}</h2>
        })
    )
}
export default Map360
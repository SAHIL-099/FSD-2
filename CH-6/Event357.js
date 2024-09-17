// Write react js script to display values in console while changing it in text box. 

function Event357(){
    function handleChange(e){
    
       console.log(e.target.value)
    }
    return(
        <>
        <input type="text"  onChange={handleChange} />
        </>
    )
}

export default Event357;
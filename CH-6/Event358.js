// Write react js script to display alert box with text “welcome to lju” only on
// double click button 

function Event358(){

    function handleclick(){
        alert("welcome to lju")
    }
    return(
        <>
        <button onDoubleClick={handleclick}>Click me</button>
        </>
    )
}

export default Event358;
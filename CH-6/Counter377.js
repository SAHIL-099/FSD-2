// Implement a character counter that displays the number of characters entered in a textarea 
// input.
function Counter377(){
    function handlechange(e){
        e.preventDefault();
       document.getElementById('test1').innerHTML="lenght is: "+e.target.value.length;
      
     
    }
    return(
        <>
        <form>
        <input onChange={handlechange}></input>

        </form>
        <h2 id="test1"></h2>
        </>
    )
}

export default Counter377;
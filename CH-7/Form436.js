// Create a React Form for select any of pizza size using radio button. 
import { useState } from "react";

function Form436(){
  const [text, setText] = useState('');

  function handleonChange(e){
    setText(e.target.value);
  }

  return(
    <>
      <h2>Select pizza size</h2>
      <form>
        <input type="radio" name="size" value="6 inch" onChange={handleonChange}/>6 inch
        <input type="radio" name="size" value="8 inch" onChange={handleonChange}/>8 inch
        <input type="radio" name="size" value="10 inch" onChange={handleonChange}/>10 inch
      </form>
      <h2>Selected pizza size: {text}</h2>
    </>
  );
}

export default Form436;
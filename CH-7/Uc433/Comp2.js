import React, { useContext } from 'react';
import { Username } from './M';

function Comp2() {
  const username = useContext(Username);

  return (
   
     <h2 style={{color:"blue"}}> Username: {username}</h2> 
  
  );
}

export default Comp2;
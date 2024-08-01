// Write a ReactJS script to create a digital clock running continuously. (useEffect)

import React, { useState, useEffect } from 'react';

function Ue430() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    return (
      <div>
        <h1>{time}</h1>
       
      </div>
    );
}
export default Ue430;
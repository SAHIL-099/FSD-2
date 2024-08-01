// Create a react app using function component to display image of flower using AXIOS to make API 
// request. Use API Url (https://flower.ceo/api/image/random). Key name in API which store image is 
// “sample”.


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api441() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios
    .get('https://flower.ceo/api/image/random')
    .then(response => {setImage(response.data.sample);
      })
    .catch(error => {console.error(error);
      });
  }, []);

  return (
    <div>
      <img src={image} alt="Random Flower" />
    </div>
  );
}

export default Api441;
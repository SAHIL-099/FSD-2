import { useContext, useEffect } from "react";
import  {Data}  from "./F1";

function F3() {
  const { firstName, lastName, message, city, gender, isSubmitted } =useContext(Data);

  useEffect(() => {
    if (isSubmitted) {
      alert(`Details:\nFirstname: ${firstName}\nLastname: ${lastName}\nMessage: ${message}\n City: ${city}\n Gender: ${gender}`);
    }
  }, [isSubmitted, firstName, lastName, message, city, gender]);

  return (
    <div>
     {alert(`Details:\nFirstname: ${firstName}\nLastname: ${lastName}\nMessage: ${message}\n City: ${city}\n Gender: ${gender}`)
     }
    </div>
  );
}

export default F3;
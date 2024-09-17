
// Create react app which to perform following task using function component:
// •Create one main file name F1.js & other 2 component files F2.js & F3.js.
// •Main file contains form with following fields:
// oFirst Name (Input type text)
// oLast Name (Input type text)
// oMessage (Textarea)
// oCity (Dropdown)
// oGender (Radio Button)
// •Pass values of all fields from F1.js file to F3.js file. And display all submitted values in alert box using 
// useContext & useState hook.
// No need to write App.js file.

import React, { useState, createContext } from 'react';
import F2 from './F2';
const Data = createContext()

function F1() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = { firstName, lastName, message, city, gender };
        setIsSubmitted(true);
        <Data.Provider value={{firstName, lastName, message, city, gender,isSubmitted}}>
            <F2 />
        </Data.Provider>
            ;
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Message:
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    City:
                    <select value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value="">Select City</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                    </select>
                </label>
                <br />
                <label>
                    Gender:
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === 'male'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === 'female'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Female
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default F1;
export { Data }





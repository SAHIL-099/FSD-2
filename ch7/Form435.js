import React, { useState } from 'react';

function Form435() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const passreg=/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/
    const mailreg=/^([a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$)/

    if(email.match(mailreg))
    {
        if(password.match(passreg)){
            if(password===confirmPassword){
                alert(`Email: ${email}\nPassword: ${password}\nConfirm Password: ${confirmPassword}`);
            }
            else{
                alert("password not match")
            }
        }
       
        else{
            alert("password lenght must be atleast 8 character and contain at least one uppercase, one lowercase, one number and one special character")
        }
    }
    else{
        alert("Email is invalid")
    }
    
   
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
    
        <label>Email:</label>
        <input type="text"  onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <label>Password:</label>
        <input type="password" name='pass' onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <label>Confirm Password:</label>
        <input type="password" name='cpass' onChange={(e) => setConfirmPassword(e.target.value)} required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default Form435;
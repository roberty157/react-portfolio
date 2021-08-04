import React, { useState } from 'react';
//import './style.css';

import {validateEmail} from '../utils/helpers';


const styles ={
    formStyle:{
        padding:'10px',
        display:'flex',
        flexDirection:'column',
        width:'250px'
    },
    formInputStyle:{
        display:'block',
        marginTop:'5px',
        marginBottom:'5px',
        //width:'200px'
    }
}
function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  //const [lastName, setLastName] = useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    //console.log(e.target.value);
    const { name, value } = e.target;

    const inputType = name;
    const inputValue = value;

    if(inputType ==='name'){
        setName(inputValue)
    }else if(inputType === 'email'){
        setEmail(inputValue)
    }else{
        setMessage(inputValue)
    }

    //setName(name);
    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    //return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs

    //alert(`Hello ${name} `);
    
    if(!validateEmail(email) || !email){
      setErrorMessage('email is invalid');
      return;
    }
    if(!name){
      setErrorMessage('name is empty');
      return;
    }
    if(!message){
      setErrorMessage('message is empty');
      return;
    }

    window.open(`mailto:robertyeam@gmail.com?body=${message}`);

    setName('');
    setEmail('');
    setMessage('');
    
  };

  return (
    <div>
      
      <form className="form" style={styles.formStyle}>
        <h3>Name</h3>
        <input style={styles.formInputStyle}
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <h3>Email</h3>
        <input style={styles.formInputStyle}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        <h3>Message</h3>
        <textarea  value={message} style={styles.formInputStyle} rows="4" name="message" onChange={handleInputChange} >
        
  
        </textarea>

        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </form>
    </div>
  );
}

export default Contact;

import React, { useState } from 'react'
import './NewsLetter.css'



export const NewsLetter = () => {
  const [message, setMessage] = useState(""); // store thank you msg

  const Submit = (e) => {
    e.preventDefault();   
    setMessage(" Thank you for subscribing!"); 

    setTimeout(() => {
      setMessage("");
    }, 1000);
  };



  return (
    <div className='newsletter'> 
    <h1>Get Exclusive Offers on your Email</h1>
    <p>Subscribe to our newsletter and stay update</p>
    <div>
      <form onSubmit={Submit}>
        <input type="email" placeholder='Your Email id' required/>
        
        <button>Subscribe</button>
        </form>
    </div>
    
      {message && <p  style={{ fontWeight:"500", color: "green", marginTop: "10px" }}>{message}</p>}

   
  
  
    </div>
  )
}

import React, { useState } from 'react';
import './Style.css';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [name,setName] = useState("");
  const [email,setEmail] =useState("");
  const [message,setMessage] =useState("");



const sendEmail = (event) => {
  event.preventDefault()

  
emailjs.send("service_f66bcyq","template_gre4787",{
to_name: "Deeze",
email_name: email ,
name : name ,

message: message,
reply_to: "replaytoooo",
},"OWgiJt3AIv18JFby0")
    .then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      // Handle success
    })
    .catch((error) => {
      console.error('Email sending error:', error);
      // Handle error
    });


  }
    


  const handleChangename = (event) =>{
    
    setName(event.target.value);
  };
  

  const handleChangeemail = (event) =>{
    
    setEmail(event.target.value);
  };

  const handleChangemessage = (event) =>{
    
    setMessage(event.target.value);
  };  



  return (
    <div className='style flex justify-center items-center'>
      <div className='contact_head'>
      <h1 className='con text-center' >Contact</h1>
      <div className='container mt-4'>
        <form onSubmit={sendEmail}>
          <div className='mb-3'>
            <label className='form-label' htmlFor='name'>
              Name
            </label>
            
            <input
              className='form-control'
              value={name || ''}
              name='name'
              type='text'
              required
              onChange={handleChangename}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor='email'>
              Email
            </label>
            <input
              className='form-control'
              value={email || ''}
              name='email'
              type='email'
              required
              onChange={handleChangeemail}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor='message'>
              Message
            </label>
            <textarea
              className='form-control'
              value={message || ''}
              name='message'
              required
              onChange={handleChangemessage}
            />
          </div>
          <button className='btn btn-danger' type='submit' >
            Submit
          </button>
        </form>

        <p> {name} </p>
      </div>
      </div>
    </div>
  );
};

export default Contact;

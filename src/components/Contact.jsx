// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to reach out!</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Your Message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: contact@reactlearning.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </div>
  );
};

export default Contact;

import { useState } from "react";
import '..//styles/email.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
function Sendmail () {
        const form = useRef();
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const sendEmail = (e) => {
            if (name==""||email==""||message==""){
                alert("Please complete the information.")
            }
            else {
                e.preventDefault();
                emailjs.sendForm('service_2x4tonv', 'template_w41ttq3', form.current, 'V_J_jYI0IdYauW8j3')
                  .then((result) => {
                      alert("success ✔️");
                      setName("");
                      setEmail("");
                      setMessage("");
                  }, (error) => {
                      alert("fail ❌");
                  });
            }
            
          };
       
        
       
        
    
    return(
        <div className="containereamil">
          <div className="contact">
            
            <h1>CONTACT ME</h1>
            
            <div className="text">
            <span >Tel: 062-681-7210</span>
            <span>Email: KaoLost277@gmail.com</span>
            <span>Address: 1/277 Pruksa. Phuttha Bucha 36 road. Khwaeng Bang Mot Thung Khru Bangkok 10140 Thailand </span>
            <span>GitHub: github.com/KaoLost277 </span>
            </div>

            
          </div>
        <div className="email">
        <form ref={form} className="form" onSubmit={sendEmail}>
      <h1 style={{color: 'black'}}>Mailbox📧</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        type="text"
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        type="email"
        name="user_email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
            name="message"
      ></textarea>

      <button
        type="submit"
        value="Send"
      >
        Send
      </button>
    </form>
    </div>
    </div>
    )
} export default Sendmail;
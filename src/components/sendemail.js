import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
import '..//styles/email.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function Sendmail() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    if (name == "" || email == "" || message == "") {
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





  return (
    <div className="containereamil">
      <div className="contact">
        <div className="header">
          <h1>Contact information</h1>
          <p>fill up the form and  will get back to you wihin 24 hours.</p>
        </div>
        <div className="items">
          <div className="cardicon"><FontAwesomeIcon icon={faPhone} /></div>
          <div>+6662 068 7210</div>
        </div>
        <div className="items">
          <div className="cardicon"><FontAwesomeIcon icon={faEnvelope} /></div>
          <div>KaoLost277@gmail.com</div>
        </div>
        <div className="items">
          <div className="cardicon"><FontAwesomeIcon icon={faLocation} /></div>
          <div><a style={{ color: '#fff', textDecoration: 'none' }} target='_blank' href='https://www.google.co.th/maps/place/%E0%B8%9E%E0%B8%A4%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%A7+%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%9A%E0%B8%B9%E0%B8%8A%E0%B8%B2/@13.6427021,100.4793075,17.25z/data=!4m5!3m4!1s0x30e2a3fd2ffa11b7:0xc924926ce32a06dc!8m2!3d13.6430474!4d100.4825947?hl=th&authuser=0'>1/277 Pruksa. Phuttha Bucha 36</a></div>
        </div>
        <div className='link'>
          <a href='https://www.instagram.com/kaollkaol/' target="_blank"><FontAwesomeIcon style={{ fontSize: '30px' }} icon={faInstagram} /></a>
          <a href='https://github.com/KaoLost277' target="_blank"><FontAwesomeIcon style={{ fontSize: '30px' }} icon={faGithub} /></a>
          <a href='https://line.me/ti/p/nHk_auKF_F?fbclid=IwAR1hwcuhLtXmBmM8bE0KhBmIHqY3BN5QRoBwVpzCXGy_SYgsCUAWd-s_fFI' target="_blank"><FontAwesomeIcon style={{ fontSize: '30px' }} icon={faLine} /></a>
        </div>



      </div>
      <div className="email">
        <form ref={form} className="form" onSubmit={sendEmail}>
          <h1 style={{ color: 'black' }}>Mailbox📧</h1>
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
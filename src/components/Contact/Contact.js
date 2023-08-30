import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="title-contact">
        <img className="contact-title" src="./CONTACT.png" alt="" />
    
      </div>
      <div className="contact-container">
        <div className="first-contact">
          <img src='./phone.svg' alt="" className="log-contact"></img>
          <h4>36 100 115 /29 933 714 </h4>
        </div>
        <div className="first-contact">
          <img src='./position.svg' alt="" className="log-contact"></img>
          <h4>Imm Zarouk 19, avenue hamed el ghazeli, Sousse </h4>
        </div>
        <div className="first-contact">
          <img src='./email.svg' alt="" className="log-contact"></img>
          <h4>appramcha@gmail.com </h4>
        </div>
      </div>
    </div>
  );
}

export default Contact;

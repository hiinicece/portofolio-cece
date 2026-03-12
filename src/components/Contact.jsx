import React from 'react';
import '../styles/components/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-icon">
          💬
        </div>
        
        <h2 className="contact-title">Let's Work Together</h2>
        
        <p className="contact-description">
          I'm always open to discussing new projects and open to working together
        </p>
        
        <div className="contact-buttons">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cellonitafr@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn-primary"
          >
            <span>✉️</span>
            Send Email
          </a>
          <a 
            href="https://www.linkedin.com/in/h1cellonita/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-btn btn-secondary"
          >
            <span>💼</span>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
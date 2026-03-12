import React from 'react';
import '../styles/components/Hero.css';
import profileImage from '../assets/images/cece.jpeg';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I am a <span className="highlight">Software Developer</span>
          </h1>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <span>Your Photo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
import React from 'react';
import '../styles/components/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-box">
          <div className="about-content">
            <div className="about-text">
              <p>
                A third-year Information Technology student with a strong interest in 
                Full-Stack Web Development. Experienced in building web-based applications 
                using HTML, CSS, and JavaScript for frontend, as well as PHP and Python 
                for backend development, with databases such as MySQL and MongoDB. 
                Actively involved as a Teaching Assistant and in various student 
                organizations and committees, including international-level events, 
                which have helped develop my technical skills, teamwork, and time management.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <h3>Full-Stack</h3>
                <p>Developer</p>
              </div>
              <div className="stat-card">
                <h3>3 Years</h3>
                <p>Experience</p>
              </div>
              <div className="stat-card">
                <h3>Salatiga</h3>
                <p>Jawa Tengah</p>
              </div>
              <div className="stat-card">
                <h3>15+</h3>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
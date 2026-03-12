import React from 'react';
import '../styles/components/Education.css';

function Education() {
  const educationData = [
    {
      university: 'Satya Wacana Christian University',
      degree: 'Undergraduate Computer Science',
      specialization: 'Software Engineering',
      period: '2023 — present'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="education-header">
          <h2 className="section-title">Education</h2>
        </div>
        
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-badge">
                <div className="badge-icon">🎓</div>
              </div>
              
              <div className="education-content">
                <div className="education-main">
                  <h3>{edu.university}</h3>
                  <h4>{edu.degree}</h4>
                  <p className="specialization">{edu.specialization}</p>
                  
                  <div className="education-meta">
                    <span className="period">
                      <span className="icon">📅</span>
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="description">{edu.description}</p>
                  
                  {edu.isActive && (
                    <div className="status-badge">
                      <span className="status-dot"></span>
                      {edu.status}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
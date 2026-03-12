import React, { useState } from 'react';
import '../styles/components/Experience.css';

function Experience() {
  const [activeCategory, setActiveCategory] = useState('All');

  const experiences = [
    {
      type: 'Organization',
      title: 'Member at Social & Environmental Division',
      organization: 'GenBI Semarang',
      period: '2025 - Present'
    },
    {
      type: 'Organization',
      title: 'Brand Ambassador',
      organization: 'blu by BCA',
      period: '2025 - Present'
    },
    {
      type: 'Committee',
      title: 'Event Coordinator at Desa Literasi',
      organization: 'GenBI Semarang',
      period: '2025'
    },
    {
      type: 'Committee',
      title: 'Leader',
      organization: 'FIT Competition 2025',
      period: '2025'
    },
    {
      type: 'Organization',
      title: 'Secretarry Staff',
      organization: 'HMPTI 2025',
      period: '2025'
    },
    {
      type: 'Organization',
      title: 'Master of Ceremony',
      organization: 'Events',
      period: '2025'
    },
    {
      type: 'Committee',
      title: 'Secretariat',
      organization: 'ICAST 2025',
      period: '2025'
    },
    {
      type: 'Organization',
      title: 'Teaching Assistant',
      organization: 'FTI UKSW',
      period: '2025'
    },
    {
      type: 'Committee',
      title: 'PDD',
      organization: 'FTI Days 2025',
      period: '2025'
    },
    {
      type: 'Organization',
      title: 'Call Center',
      organization: 'Satya Wacana Christian University',
      period: '2025'
    },
    {
      type: 'Committee',
      title: 'Event',
      organization: 'Company Visit SMK TI Bali',
      period: '2025'
    },
    {
      type: 'Committee',
      title: 'PDD',
      organization: 'Company Visit 2024',
      period: '2024'
    },
    {
      type: 'Committee',
      title: 'PDD',
      organization: 'FTI Days 2024',
      period: '2024'
    },
    {
      type: 'Organization',
      title: 'Intern',
      organization: 'Student Senate',
      period: '2024'
    },
    {
      type: 'Committee',
      title: 'PDD',
      organization: 'FIT Competition 2024',
      period: '2024'
    },
    {
      type: 'Organization',
      title: 'Teaching Assistant',
      organization: 'FTI UKSW',
      period: '2024'
    }
  ];

  const filteredExperiences = activeCategory === 'All' 
    ? experiences 
    : experiences.filter(exp => exp.type === activeCategory);

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-categories">
          <button 
            className={`category-btn ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={() => setActiveCategory('All')}
          >
            All
          </button>
          <button 
            className={`category-btn ${activeCategory === 'Organization' ? 'active' : ''}`}
            onClick={() => setActiveCategory('Organization')}
          >
            Organization
          </button>
          <button 
            className={`category-btn ${activeCategory === 'Committee' ? 'active' : ''}`}
            onClick={() => setActiveCategory('Committee')}
          >
            Committee
          </button>
        </div>

        <div className="experience-grid">
          {filteredExperiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3>{exp.title}</h3>
                  <h4>{exp.organization}</h4>
                </div>
                <span className="experience-type">{exp.type}</span>
              </div>
              <span className="period">
                <span>📅</span>
                {exp.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
import React, { useState } from 'react';
import '../styles/components/Skills.css';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillsData = {
    'Soft Skills': [
      { name: 'Leadership' },
      { name: 'Team Management' },
      { name: 'Communication' },
      { name: 'Public Speaking' },
      { name: 'Problem Solving' },
      { name: 'Organization' },
      { name: 'Mentoring' },
      { name: 'Attention to Detail' },
      { name: 'Community Engagement' },
      { name: 'Social Awareness' },
      { name: 'Responsibility' },
      { name: 'Professional Etiquette' }
    ],
    'Hard Skills': [
      { name: 'Event Management' },
      { name: 'Event Hosting (MC)' },
      { name: 'Project Management' },
      { name: 'Event Coordination' },
      { name: 'Documentation' },
      { name: 'Data Administration' },
      { name: 'Digital Campaigns' },
      { name: 'Marketing Communications' },
      { name: 'File Organization' },
      { name: 'Administrative Support' },
      { name: 'Academic Support' },
      { name: 'Archiving' }
    ],
    'Technical Skills': [
      { name: 'React.js' },
      { name: 'Python' },
      { name: 'Flask' },
      { name: 'Java' },
      { name: 'PHP' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'Google Workspace' },
      { name: 'Data Analysis' },
      { name: 'Data Cleaning' },
      { name: 'Data Visualization' }
    ],
    'Languages': [
      { name: 'Indonesian (Native)' },
      { name: 'English (Fluent)' }
    ]
  };

  const getAllSkills = () => {
    return Object.values(skillsData).flat();
  };

  const getFilteredSkills = () => {
    if (activeCategory === 'All') {
      return getAllSkills();
    }
    return skillsData[activeCategory] || [];
  };

  const categories = ['All', 'Soft Skills', 'Hard Skills', 'Technical Skills', 'Languages'];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {getFilteredSkills().map((skill, index) => (
            <div key={index} className="skill-item" style={{'--i': index}}>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
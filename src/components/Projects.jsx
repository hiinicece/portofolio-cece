import React from 'react';
import '../styles/components/Projects.css';

function Projects() {
  const projects = [
    {
      category: 'Personal Project',
      title: 'Portofolio Website',
      description: 'Create a portfolio website.',
      tech: ['React.js', 'CSS', 'JavaScript'],
      github: '#'
    },
    {
      category: 'Personal Project',
      title: 'Sepakung Village Website',
      description: 'Building content management for Sepakung Village, including website development and hosting management.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'cPanel'],
      github: '#'
    },
    {
      category: 'Personal Project',
      title: 'Web-based Retail Operational Management System (Kapita Alfamart)',
      description: 'Developing a Flask-based POS system for retail operational simulations',
      tech: ['Python','Flask','HTML','CSS','JavaScript', 'MongoDB'],
      github: 'https://github.com/hiinicece/kapita-alfamart.git'
    },
    {
      category: 'Group Project',
      title: 'AI-Powered Interactive Museum Website (AKSARASA)',
      description: 'Developed an AI-based museum interactive platform using Python and Google Generative AI.',
      tech: ['Python', 'Google Generative AI', 'JavaScript', 'HTML', 'CSS', 'gTTS'],
      github: 'https://github.com/hiinicece/AKSARASA-UKSW.git'
    },
    {
      category: 'Group Project',
      title: 'YOLOv11 Object Detection & Tracking Web Application',
      description: 'Developing a YOLOv11-based object detection and tracking system for picture and video processing',
      tech: ['Python', 'YOLOv11', 'OpenCV', 'Flask'],
      github: 'https://github.com/hiinicece/yolo-deeplearning.git'
    },
    {
      category: 'Group Project',
      title: 'Pharmacy Management System – Java GUI & MySQL',
      description: 'Build MySQL integrated Java (Swing) pharmacy application.',
      tech: ['Java', 'Swing', 'MySQL', 'JDBC', 'NetBeans', 'OOP'],
      github: '#'
    },
    {
      category: 'Group Project',
      title: 'Web-based Library System',
      description: 'Implement authentication features, book CRUDs, and lending and return systems.',
      tech: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL'],
      github: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div>
                  <h3>{project.title}</h3>
                </div>
                <span className="project-category">{project.category}</span>
              </div>
              
              <p>{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>💻</span> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
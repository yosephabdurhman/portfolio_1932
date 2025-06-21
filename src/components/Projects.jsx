import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '🛒',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      category: 'web',
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that displays current weather conditions, forecasts, and interactive maps using weather APIs.',
      image: '🌤️',
      category: 'web',
      technologies: ['JavaScript', 'Weather API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects, skills, and contact information with modern design and smooth animations.',
      image: '💼',
      category: 'web',
      technologies: ['React', 'CSS3', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication, message history, and file sharing capabilities.',
      image: '💬',
      category: 'web',
      technologies: ['React', 'Socket.io', 'Express'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Data Visualization Tool',
      description: 'Interactive data visualization tool for analyzing and presenting complex datasets with customizable charts and graphs.',
      image: '📊',
      category: 'web',
      technologies: ['React', 'D3.js', 'Python'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'other', label: 'Other' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Some of my recent work</p>
        </div>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} className="btn btn-small btn-primary">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="btn btn-small btn-secondary">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <h3>Want to see more?</h3>
          <p>Check out my GitHub profile for more projects and contributions.</p>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects 
import React from 'react'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90, icon: '🌐' },
    { name: 'JavaScript', level: 85, icon: '⚡' },
    { name: 'React', level: 80, icon: '⚛️' },
    { name: 'Node.js', level: 75, icon: '🟢' },
    { name: 'Python', level: 70, icon: '🐍' },
    { name: 'SQL', level: 80, icon: '🗄️' },
    { name: 'Git', level: 85, icon: '📝' },
    { name: 'AWS', level: 65, icon: '☁️' }
  ]

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Postman', icon: '📮' },
    { name: 'Docker', icon: '🐳' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Tools</h2>
          <p>Technologies I work with</p>
        </div>
        
        <div className="skills-content">
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="tools-section">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-item">
                  <span className="tool-icon">{tool.icon}</span>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="skills-cta">
          <h3>Interested in working together?</h3>
          <p>Let's discuss your project and see how I can help bring your ideas to life.</p>
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  )
}

export default Skills 
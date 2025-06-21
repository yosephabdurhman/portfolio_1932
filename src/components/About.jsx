import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate Full Stack Developer with a love for creating innovative 
              web solutions. With several years of experience in web development, 
              I specialize in building responsive, user-friendly applications that 
              solve real-world problems.
            </p>
            
            <p>
              My journey in tech started with curiosity and has evolved into a 
              professional career where I continuously learn and adapt to new 
              technologies. I believe in writing clean, maintainable code and 
              creating experiences that users love.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>15+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <div className="placeholder-image">
                <span>📸</span>
                <p>Your Photo Here</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-features">
          <div className="feature">
            <div className="feature-icon">🚀</div>
            <h4>Fast Development</h4>
            <p>Quick turnaround times without compromising quality</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💡</div>
            <h4>Creative Solutions</h4>
            <p>Innovative approaches to complex problems</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🤝</div>
            <h4>Great Communication</h4>
            <p>Clear and consistent communication throughout projects</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 
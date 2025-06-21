import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Yoseph</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="typing-text">I'm a </span>
              <span className="profession">Full Stack Developer</span>
            </h2>
            <p className="hero-description">
              Passionate about creating beautiful and functional web applications. 
              I love turning ideas into reality through code.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <span>👨‍💻</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Available for hire</h3>
                <p>Let's build something amazing together!</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll down</span>
        </div>
      </div>
    </section>
  )
}

export default Hero 
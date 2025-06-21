import React from 'react'
import { FaReact } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'React', level: 80, icon: <FaReact /> },
    { name: 'Node.js', level: 75, icon: <DiNodejs /> },
    { name: 'Python', level: 70, icon: <FaPython /> },
    { name: 'Django', level: 80, icon: <SiDjango /> },
    { name: 'Git', level: 85, icon: <FaGithub />},
    { name: 'AWS', level: 65, icon: <FaAws />}
  ]

  const tools = [
    { name: 'Figma', icon: <IoLogoFigma /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'PostgreSQL', icon: <BiLogoPostgresql /> }
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



import React, { useRef } from 'react';
import Draggable from 'react-draggable';

export default function AboutWindow({ isAboutOpen, setIsAboutOpen }) {
  const nodeRef = useRef(null);

  if (!isAboutOpen) return null;

  return (
    <Draggable handle='.window-title-bar' cancel=".close-button" nodeRef={nodeRef}>
      <div ref={nodeRef} className="os-window about-window">
        <div className="window-title-bar">
          <span>👤 User_Profile - Farzan Ahmed</span>
          <button className="close-button" onClick={() => setIsAboutOpen(false)}>X</button>
        </div>
        
        <div className="window-content about-content">
          <div className="about-left">
            <div className="profile-pic-placeholder">
              <img src="/profile.jpeg" alt="Farzan Ahmed" className="profile-photo" />
            </div>
            <a href="/Farzan_Ahmed_Resume.pdf" target="_blank" className="action-button resume-btn">
              📄 Download Resume
            </a>
          </div>
          
          <div className="about-right">
            <h2>Farzan Ahmed</h2>
            <h4 className="role-title">Software Engineer | B.Tech CSE</h4>
            
            <div className="education-block">
              <p><strong>Education:</strong> B.Tech in Computer Science and Engineering</p>
              <p><strong>Institution:</strong> Aliah University, Kolkata (Class of 2027)</p>
              <p><strong>CGPA:</strong> 7.91</p>
            </div>

            <div className="bio-block">
              <p>
                I specialize in building scalable full-stack web applications and AI-driven tools. 
                From designing custom No-Bid Freelance Marketplaces to engineering enterprise-grade RAG systems, 
                I focus on writing clean, efficient code that solves complex problems. Outside of the terminal, 
                I enjoy playing badminton and football, and exploring cinema and fashion aesthetics.
              </p>
            </div>

            <div className="skills-section">
              <h4>Core Stack & Technologies</h4>
              <div className="skills-grid">
                <span>JavaScript</span><span>React</span><span>Node.js</span>
                <span>Express</span><span>PostgreSQL</span><span>Prisma ORM</span>
                <span>Java</span><span>Spring Boot</span><span>Python</span>
                <span>FastAPI</span><span>OpenCV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
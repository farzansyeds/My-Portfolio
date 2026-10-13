

import React, { useRef } from 'react';
import Draggable from 'react-draggable';

export default function ContactWindow({ isContactOpen, setIsContactOpen }) {
  const nodeRef = useRef(null);

  if (!isContactOpen) return null;

  return (
    <Draggable handle='.window-title-bar' cancel=".close-button" nodeRef={nodeRef}>
      <div ref={nodeRef} className="os-window contact-window">
        <div className="window-title-bar">
          <span>📧 Contact_Me - Farzan Ahmed</span>
          <button className="close-button" onClick={() => setIsContactOpen(false)}>X</button>
        </div>
        
        <div className="window-content contact-content">
          <h2>Let's Connect!</h2>
          <p>I am currently open for Software Engineering and Applied AI Internships. Feel free to reach out!</p>
          
          <div className="contact-links">
            <a href="mailto:ahmedfarzanishere@gmail.com?subject=Portfolio Inquiry" className="contact-btn email-btn">
              ✉️ Send an Email
            </a>
            <a href="https://github.com/farzansyeds" target="_blank" rel="noreferrer" className="contact-btn github-btn">
              🐙 GitHub Profile
            </a>
            <a href="https://www.linkedin.com/in/farzansyeds/" target="_blank" rel="noreferrer" className="contact-btn linkedin-btn">
              💼 LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
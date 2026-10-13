

import React, { useRef } from 'react';
import Draggable from 'react-draggable';

export default function OsWindow({ openFolder, openFile, setOpenFile, closeWindow }) {
  const nodeRef = useRef(null);
  
  if (!openFolder) return null;

  return (
    <Draggable handle='.window-title-bar' cancel=".close-button" nodeRef={nodeRef}>
      {/* 🚨 Added ref={nodeRef} here: */}
      <div ref={nodeRef} className={`os-window ${openFile ? 'full-screen-window' : 'small-window'}`}>
        <div className="window-title-bar">
          <span>{openFile ? openFile.name : openFolder.name}</span>
          <button className="close-button" onClick={closeWindow}>X</button>
        </div>
        
        <div className="window-content">
          {!openFile ? (
            <div className="file-list">
              {openFolder.files.map((file) => (
                <div key={file.id} className="file-list-item" onClick={() => setOpenFile(file)}>
                  <span className="file-emoji">{file.icon}</span>
                  <span className="file-name">{file.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="project-page">
              <button className="back-button" onClick={() => setOpenFile(null)}>
                ← Back to Folder
              </button>
              
              <h1><u>About the Project</u></h1>
              <p>{openFile.description}</p>
              
              <h2>Screenshots</h2>
              <div className="screenshot-gallery">
                {openFile.screenshots.map((shot, index) => (
                  <img key={index} src={shot} alt={`Screenshot ${index + 1}`} className="project-screenshot" />
                ))}
              </div>
              
              <h2>What I Learnt</h2>
              <ul className="learnings-list">
                {openFile.learnings.map((learningPoint, index) => (
                  <li key={index}>{learningPoint}</li>
                ))}
              </ul>
              
              <div className="project-links">
                {openFile.demoLink && (
                  <a href={openFile.demoLink} target="_blank" rel="noreferrer" className="action-button">
                    Live Demo
                  </a>
                )}
                <a href={openFile.githubLink} target="_blank" rel="noreferrer" className="action-button">GitHub Repo</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </Draggable>
  );
}
import React, { useState, useEffect } from 'react';

export default function Taskbar({ 
  startMenuOpen, 
  setStartMenuOpen, 
  openFolder, 
  openFile, 
  setOpenFolder, 
  setOpenFile, 
  desktopFolders,
  closeWindow
//   setWallpaper
}) {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* START MENU POPUP */}
      {startMenuOpen && (
        <div className="start-menu" onClick={(e) => e.stopPropagation()}>
          <div className="start-menu-header">
            <span className="user-avatar">👤</span>
            <div className="user-info">
              <h4>Farzan Ahmed</h4>
              <p>Software Engineer</p>
            </div>
          </div>

          <div className="start-menu-items">
            <div 
              className="start-menu-item"
              onClick={() => {
                const webFolder = desktopFolders.find(f => f.id === 'web');
                setOpenFolder(webFolder);
                setOpenFile(null);
                setStartMenuOpen(false);
              }}
            >
              <span>📁</span> Projects Explorer
            </div>

            <a href="https://github.com/farzansyeds" target="_blank" rel="noreferrer" className="start-menu-item">
              <span>🐙</span> GitHub Profile
            </a>

            {/* <div 
              className="start-menu-item"
              onClick={() => {
                setWallpaper((prev) => {
                  if (prev === 'navy') return 'cyberpunk';
                  if (prev === 'cyberpunk') return 'emerald';
                  if (prev === 'emerald') return 'obsidian';
                  return 'navy';
                });
                setStartMenuOpen(false);
              }}
            >
              <span>🎨</span> Change Wallpaper
            </div> */}

            <a 
              href="/Farzan_Ahmed_Resume.pdf" 
              download="Farzan_Ahmed_Resume.pdf"
              className="start-menu-item"
              onClick={() => setStartMenuOpen(false)}
            >
              <span>📄</span> Resume (CV)
            </a>
          </div>

          <div className="start-menu-footer">
            <button className="shutdown-btn" onClick={() => { closeWindow(); setStartMenuOpen(false); }}>
              ⏻ Close 
            </button>
          </div>
        </div>
      )}

      {/* BOTTOM TASKBAR */}
      <footer className="os-taskbar">
        <button 
          className={`start-button ${startMenuOpen ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setStartMenuOpen(!startMenuOpen);
          }}
        >
          <span className="start-logo">❖</span> Start
        </button>

        <div className="taskbar-apps">
          {openFolder && (
            <div className="active-task-tab">
              <span>{openFile ? openFile.icon : openFolder.icon}</span>
              <span className="task-title">{openFile ? openFile.name : openFolder.name}</span>
            </div>
          )}
        </div>

        <div className="taskbar-tray">
          <span className="tray-time">{currentTime}</span>
        </div>
      </footer>
    </>
  );
}
import React, { useState, useEffect } from 'react';
import Joyride from 'react-joyride';
import './index.css';
import { desktopFolders } from './projectData';
import Taskbar from './components/Taskbar';
import OsWindow from './components/OsWindow';
import AboutWindow from './components/AboutWindow';
import ContactWindow from './components/ContactWindow';
import BootScreen from './components/BootScreen';

export default function App() {
  const [openFolder, setOpenFolder] = useState(null);
  const [openFile, setOpenFile] = useState(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [runTour, setRunTour] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  // const [wallpaper, setWallpaper] = useState('navy'); // Default wallpaper

  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenPortfolioTour');
    if (!hasSeenTour) setRunTour(true);
  }, []);

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if (status === 'finished' || status === 'skipped') {
      setRunTour(false);
      localStorage.setItem('hasSeenPortfolioTour', 'true');
    }
  };

  const closeWindow = () => {
    setOpenFolder(null);
    setOpenFile(null);
  };

  const tourSteps = [
    { target: 'body', content: 'Welcome to my workspace! I am Farzan. Let me give you a quick tour of my OS.', placement: 'center' },
    { target: '.desktop-icon', content: 'Double-click any of these folders to open them and explore my projects.', placement: 'right' },
    { 
      target: '.about-tour-step', 
      content: 'Double-click here to view my engineering background, tech stack, and download my resume.', 
      placement: 'right' 
    },
    { 
      target: '.contact-tour-step', 
      content: 'Need to get in touch? Open this to find my direct email, GitHub, and LinkedIn profiles.', 
      placement: 'right' 
    },
    { 
      target: 'body', 
      content: 'Pro Tip: Just like a real operating system, you can click and hold the dark title bar of any open window to freely drag it around your screen!', 
      placement: 'center' 
    },
    { target: '.start-button', content: 'Click the Start menu here anytime for quick navigation, links, and direct access.', placement: 'top' }
  ];


  if (isBooting) {
  return <BootScreen onBootComplete={() => setIsBooting(false)} />;
}
  return (
    
    <div className="desktop-environment" onClick={() => setStartMenuOpen(false)}>
      
      <Joyride 
        steps={tourSteps} run={runTour} callback={handleJoyrideCallback}
        continuous={true} showSkipButton={true}
        styles={{ options: { primaryColor: '#3498db', zIndex: 1000 } }}
      />
      
      {desktopFolders.map((folder) => (
        <div key={folder.id} className="desktop-icon" onClick={() => setOpenFolder(folder)}>
          <span className="icon-emoji">{folder.icon}</span>
          <span className="icon-name">{folder.name}</span>
        </div>
      ))}

      {/* New About Me Icon */}
      <div className="desktop-icon about-tour-step" onClick={() => setIsAboutOpen(true)}>
        <span className="icon-emoji">👨‍💻</span>
        <span className="icon-name">About_Me</span>
      </div>

      {/* Windows */}
      <AboutWindow isAboutOpen={isAboutOpen} setIsAboutOpen={setIsAboutOpen} />

      {/* Contact Me Icon */}
      <div className="desktop-icon contact-tour-step" onClick={() => setIsContactOpen(true)}>
        <span className="icon-emoji">📬</span>
        <span className="icon-name">Contact_Me</span>
      </div>

      {/* Render the Window */}
      <ContactWindow isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />

      <OsWindow 
        openFolder={openFolder} 
        openFile={openFile} 
        setOpenFile={setOpenFile} 
        closeWindow={closeWindow} 
      />

      <Taskbar 
        startMenuOpen={startMenuOpen} 
        setStartMenuOpen={setStartMenuOpen}
        openFolder={openFolder}
        openFile={openFile}
        setOpenFolder={setOpenFolder}
        setOpenFile={setOpenFile}
        desktopFolders={desktopFolders}
        closeWindow={closeWindow}
        // setWallpaper={setWallpaper}
      />

    </div>
  );
}
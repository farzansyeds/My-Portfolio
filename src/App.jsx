import React, { useState } from 'react';
import './index.css';

// 1. Updated Data Structure with Project Details
const desktopFolders = [
  { 
    id: 'web', 
    name: 'Web_Development', 
    icon: '📁',
    files: [
      { 
        id: 'web1', 
        name: 'No-Bid Freelance Marketplace', 
        icon: '🌐',
        // New project details added here:
        description: 'A modern, streamlined freelance platform built to eliminate bidding wars. Instead of freelancers competing in race-to-the-bottom auctions, Clients post fixed-budget projects with required skill tags, and the automated Smart Matching Engine of the platform instantly discovers and invites qualified Freelancers based on their skill sets.',
        learnings: [' I learned how to build secure JWT authentication.', 
                    ' Design PostgreSQL database schemas using Prisma ORM.',
                    ' Handle complex backend routing with Node.js and Express.'
                   ],
        screenshots: ['/screenshots/web/login.png',
                      '/screenshots/web/signup.png',
                      '/screenshots/web/freelancer-dash.png',
                      '/screenshots/web/client-dash.png'
                    ], 
        demoLink: null,
        githubLink: 'https://github.com/farzansyeds/NoBidFreelance'
      },
      { 
        id: 'web2', 
        name: 'Medhavi-Educare', 
        icon: '🩺',
        description: 'A custom static medical consultancy website designed to provide overseas education guidance.',
        learnings: [
                    'Built responsive static layouts using custom HTML, CSS, and JavaScript.',
                    'Implemented Google Form-to-Sheet integration for seamless, backend-less data collection.',
                    'Managed deployment and static hosting using GitHub Pages.'
                  ],
        screenshots: ['/screenshots/web/medh1.png',
                      '/screenshots/web/medh2.png',
                      '/screenshots/web/medh3.png',
                      '/screenshots/web/medh4.png',
                      '/screenshots/web/medh5.png',
                    ],
        demoLink: 'https://medhavieducare.com/',
        githubLink: 'https://github.com/farzansyeds/medhavi-educare'
      },
      { 
        id: 'web3', 
        name: 'Real-time-chat-App', 
        icon: '💬',
        description: 'A real-time messaging application using WebSockets.',
        learnings: ['Learned how to use Socket.io for instant data transfer and MongoDB for message storage.'],
        screenshots: ['/screenshots/web/auth.png',
                      '/screenshots/web/chat.png'
                    ],
        demoLink: null,
        githubLink: 'https://github.com/farzansyeds/realtime-chat-app'
      },
      

    ]
  },

  { 
    id: 'ai', 
    name: 'AI_ML_projects', 
    icon: '📁',
    files: [
      { 
        id: 'ai1', 
        name: 'AI-GYM-app', 
        icon: '🦾',
        // New project details added here:
        description: 'A real-time computer vision fitness application that acts as a virtual personal trainer. By utilizing a standard webcam, the system tracks human body poses, calculates joint angles in real-time, and analyzes workout form to provide instant biomechanical feedback during exercise routines.',
        learnings: [
                    'Engineered a real-time video processing pipeline using OpenCV to capture, process, and visually annotate live webcam frames.',
                    'Integrated Google\'s MediaPipe framework to extract accurate pose landmarks and mathematically calculate joint angles for form correction.',
                    'Developed a responsive web interface using Streamlit to seamlessly display the live video feed alongside ongoing performance metrics.',
                    'Optimized computer vision rendering loops to ensure smooth, lag-free frame rates during live exercise tracking.'
                  ],
        screenshots: ['/screenshots/ai/dashboard.png',
                      '/screenshots/ai/login_wall.png',
                      ],
        demoLink: null,
        githubLink: 'https://github.com/farzansyeds/AI-GYM-App'
      },
      { 
        id: 'ai2', 
        name: 'Enterprise-RAG-System', 
        icon: '🧠',
        description: 'An enterprise-grade Retrieval-Augmented Generation (RAG) system designed to intelligently search and converse with custom document knowledge bases.',
        learnings: [
                    'Built robust document ingestion pipelines to process, chunk, and index large datasets.',
                    'Implemented vector embedding storage and semantic search utilizing ChromaDB and transformer models.',
                    'Developed high-performance backend API endpoints using Python and FastAPI.',
                    'Designed and connected a custom React user interface for seamless conversational search.'
                  ],
        screenshots: ['/screenshots/ai/rag.png',
                      '/screenshots/ai/rag1.png',
                      '/screenshots/ai/rag2.png',
                    ],
        demoLink: 'https://enterprise-rag-system-ikux.onrender.com/',
        githubLink: 'https://github.com/farzansyeds/Enterprise-RAG-system'
      },
      { 
        id: 'ai3', 
        name: 'IMDB-Sentiment-Analysis', 
        icon: '🎭',
        description: 'A Natural Language Processing (NLP) model designed to classify the sentiment of movie reviews from the IMDb dataset.',
        learnings: [
                    'Built and trained Recurrent Neural Networks (RNNs) for sequence modeling using PyTorch.',
                    'Applied TF-IDF and utilized the NLTK library for text preprocessing and feature extraction.',
                    'Gained practical experience handling sequence data and deep learning architectures for text classification.'
                  ],
        screenshots: ['/screenshots/web/auth.png',
                      '/screenshots/web/chat.png'
                    ],
        demoLink: null,
        githubLink: 'https://github.com/farzansyeds/minor-projects/tree/main/imdb-sentiment-analysis-rnn'
      },
      { 
        id: 'ai4', 
        name: 'Cliff-Walking', 
        icon: '🤖',
        description: 'A Reinforcement Learning prototype that solves the classic Cliff Walking grid-world environment.',
        learnings: [
                    'Utilized the Gymnasium library to simulate the environment and train the reinforcement learning agent.',
                    'Implemented and compared Q-Learning (Off-Policy) and SARSA (On-Policy) Temporal Difference (TD) control algorithms.',
                    'Analyzed the behavioral trade-offs between safe paths and optimal paths during exploration and exploitation phases.'
                  ],
        screenshots: ['/screenshots/web/auth.png',
                      '/screenshots/web/chat.png'
                    ],
        demoLink: null,
        githubLink: 'https://github.com/farzansyeds/minor-projects/tree/main/cliff-walking'
      }

      

    ]
  }
  // (You can add the AI and Backend folders back here using this same structure!)
];

function App() {
  // 2. We now need TWO pieces of memory (State)
  const [openFolder, setOpenFolder] = useState(null);
  const [openFile, setOpenFile] = useState(null); // Remembers which specific file is open

  // Function to completely close the window and reset everything
  const closeWindow = () => {
    setOpenFolder(null);
    setOpenFile(null);
  };

  return (
    <div className="desktop-environment">
      
      {/* The Desktop Icons */}
      {desktopFolders.map((folder) => (
        <div 
          key={folder.id} 
          className="desktop-icon"
          onDoubleClick={() => setOpenFolder(folder)}
        >
          <span className="icon-emoji">{folder.icon}</span>
          <span className="icon-name">{folder.name}</span>
        </div>
      ))}

      {/* The Open Window */}
      {openFolder && (
         <div className={`os-window ${openFile ? 'full-screen-window' : 'small-window'}`}>
          
          {/* Window Title Bar */}
          <div className="window-title-bar">
            {/* If a file is open, show the file name. Otherwise, show the folder name */}
            <span>{openFile ? openFile.name : openFolder.name}</span>
            <button className="close-button" onClick={closeWindow}>X</button>
          </div>
          
          <div className="window-content">
            
            {/* 3. Conditional UI: What to show inside the window? */}
            {!openFile ? (
              
              /* IF NO FILE IS OPEN: Show the vertical list of files */
              <div className="file-list">
                {openFolder.files.map((file) => (
                  <div 
                    key={file.id} 
                    className="file-list-item"
                    onDoubleClick={() => setOpenFile(file)} // Opens the file on double-click
                  >
                    <span className="file-emoji">{file.icon}</span>
                    <span className="file-name">{file.name}</span>
                  </div>
                ))}
              </div>

            ) : (

              /* IF A FILE IS OPEN: Show the HTML project page layout */
              <div className="project-page">
                <button className="back-button" onClick={() => setOpenFile(null)}>
                  ← Back to Folder
                </button>
                
                <h1><u>About the Project</u></h1>
                <p>{openFile.description}</p>
                
                <h2>Screenshots</h2>
                <div className="screenshot-gallery">
                  {openFile.screenshots.map((shot, index) => (
                    <img 
                      key={index} 
                      src={shot} 
                      alt={`Screenshot ${index + 1}`} 
                      className="project-screenshot" 
                    />
                  ))}
                </div>
                
                <h2>What I Learnt</h2>
                <ul className="learnings-list">
                  {openFile.learnings.map((learningPoint, index) => (
                    <li key={index}>{learningPoint}</li>
                  ))}
                </ul>
                
                <div className="project-links">
                  {/* The Live Demo button will ONLY render if demoLink is not null */}
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
      )}

    </div>
  );
}

export default App;
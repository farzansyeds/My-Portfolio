export const desktopFolders = [
  { 
    id: 'web', 
    name: 'Web_Development_projects', 
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
        screenshots: [                    ],
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
        screenshots: [],
        demoLink: null,
        githubLink: 'https://github.com/farzansyeds/minor-projects/tree/main/cliff-walking'
      },
      { 
        id: 'ai5', 
        name: 'AI-Autocorrect-tool', 
        icon: '✍️',
        description: 'An AI-driven autocorrect prototype that detects spelling and typing errors, applying and suggesting corrections based on calculated confidence scores.',
        learnings: [
                    'Engineered a ranking system for correction candidates utilizing edit-distance, word frequency, and keyboard-proximity signals.',
                    'Integrated context signals to dynamically generate confidence scores for automated and suggested corrections.',
                    'Built a responsive web interface featuring a custom personal dictionary and a user feedback loop to refine future suggestions.'
                  ],
        screenshots: ['/screenshots/ai/autocorrect.png'],
        demoLink: null,
        githubLink: 'https://github.com/farzansyeds/AutoCorrectApp'
      },
      { 
        id: 'ai6', 
        name: 'Text-Summarizer', 
        icon: '🚀', 
        description: 'An end-to-end NLP web application that performs abstractive text summarization on dialogues and articles using a fine-tuned Hugging Face t5-small model and an asynchronous FastAPI backend.',
        learnings: [
          'Fine-tuned the t5-small model using the Hugging Face Trainer API on the SAMSum dialogue dataset with sequence-to-sequence conditional generation.',
          'Successfully optimized model performance, decreasing training loss from 3.59 to 0.35 over 6 epochs.',
          'Engineered an inference pipeline featuring text preprocessing, tokenization with dynamic device assignment (CUDA/MPS/CPU), and beam search decoding.',
          'Built and connected a web service utilizing an asynchronous FastAPI backend to serve REST endpoints alongside a lightweight HTML/CSS frontend.'
        ],
        screenshots: [],
        // videoDemo: null,
        demoLink: null,
        githubLink: 'https://github.com/farzansyeds/TextSummarizer-App'
      }
    ]
  },
  { 
    id: 'backend', 
    name: 'Backend_System_projects', 
    icon: '📁',
    files: [
      { 
        id: 'backend1', 
        name: 'Distributed Job Queue', 
        icon: '⚙️',
        // New project details added here:
        description: 'A robust distributed job queue system built in Java to handle asynchronous task processing, decoupling, and message routing.',
        learnings: [
                    'Configured and managed message brokers utilizing RabbitMQ for efficient event-driven communication.',
                    'Developed scalable producer APIs and consumer workers using the Spring Boot framework.',
                    'Implemented dead-letter queues to ensure reliable error handling, message recovery, and fault tolerance for failed tasks.'
                  ],
        screenshots: ['/screenshots/web/login.png',
                      
                    ], 
        demoLink: null,
        githubLink: 'https://github.com/farzansyeds/Distributed-job-queue-project'
      }
    ]
  }
  // (You can add the AI and Backend folders back here using this same structure!)
];
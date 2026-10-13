import React, { useState, useEffect } from 'react';

export default function BootScreen({ onBootComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onBootComplete, 400); // Fades out right after hitting 100%
          return 100;
        }
        return prev + 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onBootComplete]);

 return (
    <div className="boot-screen">
      <div className="boot-content">
        {/* The new circular spinner */}
        <div className="boot-spinner"></div>
        {/* The new minimalist text */}
        <p className="boot-status">OS opening..</p>
      </div>
    </div>
  );
}

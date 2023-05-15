import React, { useState } from 'react';

export default function Theme() {
    const [isLightMode, setIsLightMode] = useState(false);
  
    const toggleLightMode = () => {
      setIsLightMode(!isLightMode);
    };
  
    return (
      <>
        <div className={`theme-btn ${isLightMode ? 'light-mode' : ''}`} onClick={toggleLightMode}>
          <i className="fas fa-adjust"></i>
        </div>
      </>
    );
  }
  

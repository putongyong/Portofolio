import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function Theme() {
  const { isLightMode, toggleLightMode } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleLightMode();
    document.body.classList.toggle('light-mode');
  };

  return (
    <>
      <div className={`theme-btn ${isLightMode ? 'light-mode' : ''}`} onClick={handleToggle}>
        <i className="fas fa-adjust"></i>
      </div>
    </>
  );
}
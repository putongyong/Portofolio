import { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

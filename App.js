import React, { useState } from 'react';
import './App.css';

import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import ThirdPane from './components/ThirdPane'; 

function App() {
  const [screen, setScreen] = useState('onboarding');
  const [darkMode, setDarkMode] = useState(false);
  const [isThirdPaneOpen, setIsThirdPaneOpen] = useState(false);

  const toggleThirdPane = () => {
    setIsThirdPaneOpen(!isThirdPaneOpen);
  };

  return (
    <>
      {screen === 'onboarding' ? (
        <Onboarding 
          setScreen={setScreen} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />
      ) : (
        <Dashboard 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />
      )}

      {/* Button to toggle third pane */}
      <button onClick={toggleThirdPane}>Click to Open Third Pane</button>

      {/* Show third pane if it's open */}
      {isThirdPaneOpen && <ThirdPane />}
    </>
  );
}

export default App;


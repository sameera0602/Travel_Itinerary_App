import React, { useState } from 'react';
import './App.css';

import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';

function App() {
  const [screen, setScreen] = useState('onboarding');
  const [darkMode, setDarkMode] = useState(false);

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

    </>
  );
}

export default App;

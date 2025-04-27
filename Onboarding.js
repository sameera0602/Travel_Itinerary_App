import React, { useState } from 'react';
import Taskbar from '../components/Taskbar';
import soloImg from '../assets/solo.png';
import coupleImg from '../assets/couple.png';
import familyImg from '../assets/family.png';
import friendsImg from '../assets/friends.png';
import './Onboarding.css'; // Import CSS

const Onboarding = ({ setScreen }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const travelOptions = [
    { label: 'Solo', img: soloImg },
    { label: 'Couple', img: coupleImg },
    { label: 'Family', img: familyImg },
    { label: 'Friends', img: friendsImg },
  ];

  const handleSelection = (label) => {
    setSelectedOption(label);
  };

  return (
    <div className={`container ${darkMode ? 'darkMode' : 'lightMode'}`}>
      <Taskbar />
      
      <div className="toggleButtonContainer">
        <button className="toggleButton" onClick={toggleMode}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      <div className="coreLayout">
        <h2 className="mainHeading">Plan Your Journey, Your Way!</h2>
        <p className="subText">Let’s create your personalised travel experience</p>
      </div>

      {/* Inputs */}
      <div className="inputGroup">
        <h3 className="inputTitle">Where would you like to go?</h3>
        <input
          type="text"
          placeholder="Enter Destination"
          className={`input ${darkMode ? 'darkMode' : 'lightMode'}`}
        />
      </div>

      <div className="inputGroup">
        <h3 className="inputTitle">How long will you stay?</h3>
        <input
          type="text"
          placeholder="Enter Number of Days"
          className={`input ${darkMode ? 'darkMode' : 'lightMode'}`}
        />
      </div>

      <div className="inputGroup">
        <h3 className="inputTitle">Select Duration</h3>
        <select className={`input ${darkMode ? 'darkMode' : 'lightMode'}`}>
          <option>Select Duration</option>
          <option>1-3 Days</option>
          <option>4-7 Days</option>
          <option>1-2 Weeks</option>
          <option>More than 2 Weeks</option>
        </select>
      </div>

      {/* Travel Options */}
      <div className="inputGroup">
        <h3 className="inputTitle">Who are you traveling with?</h3>
        <div className="travelOptions">
          {travelOptions.map(({ label, img }) => (
            <div
              key={label}
              className={`travelBox ${
                selectedOption === label
                  ? darkMode
                    ? 'selected dark'
                    : 'selected light'
                  : ''
              }`}
              onClick={() => handleSelection(label)}
            >
              <img src={img} alt={label} className="icon" />
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Continue */}
      <button
        className="continueButton"
        onClick={() => setScreen('dashboard')}
      >
        Continue
      </button>
    </div>
  );
};

export default Onboarding;

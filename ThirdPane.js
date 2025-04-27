import React, { useState } from 'react';
import './ThirdPane.css';

const ThirdPane = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closePane = () => {
    setIsVisible(false);
  };

  return (
    <div className={`third-pane ${isVisible ? 'open' : 'closed'}`}>
      <div className="pane-content">
        <h3>Top Travel Destinations</h3>
        <ul>
          <li>Paris, France - The Eiffel Tower awaits!</li>
          <li>Tokyo, Japan - A blend of traditional culture and modern technology.</li>
          <li>Cairo, Egypt - Explore the mysteries of the Pyramids.</li>
          <li>Rome, Italy - Dive into rich history with the Colosseum and Vatican.</li>
          <li>New York City, USA - The city that never sleeps!</li>
        </ul>
        
        <h4>Travel Tip:</h4>
        <p>Pack light! You never know when you'll stumble upon an amazing souvenir while exploring new cities.</p>

        <button onClick={closePane}>Close Pane</button>
      </div>
    </div>
  );
};

export default ThirdPane;

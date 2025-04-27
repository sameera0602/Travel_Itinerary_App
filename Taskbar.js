import React, { useState, useEffect } from 'react';
import wifiImg from '../assets/wifi.png';
import batteryImg from '../assets/battery.png';
import signalImg from '../assets/signal.png';

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.taskbar}>
      {/* Left: Time */}
      <div style={styles.time}>{currentTime}</div>

      {/* Right: Network, Wi-Fi, and Battery */}
      <div style={styles.rightIcons}>
        <img src={signalImg} alt="Signal" style={styles.icon} />
        <img src={wifiImg} alt="Wi-Fi" style={styles.icon} />
        <img src={batteryImg} alt="Battery" style={styles.icon} />
      </div>
    </div>
  );
};

const styles = {
  taskbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '40px',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
    fontFamily: '"Arial", sans-serif',
    zIndex: 1000, // Ensure it's on top
  },
  time: {
    fontSize: '14px',
  },
  rightIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  icon: {
    width: '20px', // Adjust size as needed
    height: '20px', // Adjust size as needed
  },
  
  // Media query for mobile devices
  '@media (max-width: 600px)': {
    taskbar: {
      flexDirection: 'column',
      height: '60px',
      justifyContent: 'center',
      padding: '5px',
    },
    time: {
      fontSize: '12px',
      marginBottom: '5px',
    },
    rightIcons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    icon: {
      width: '18px', // Adjust size for mobile
      height: '18px', // Adjust size for mobile
    },
  },
};

export default Taskbar;

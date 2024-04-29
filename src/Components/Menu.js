// Menu.js
import React from 'react';

const Menu = ({ options }) => {
  const styles = {
    menuContainer: {
      padding: '10px',
      borderRadius: '8px',
    },
    menuItem: {
      margin: '8px 0',
    },
    button: {
      width: '100%',
      padding: '10px',
      fontSize: '14px',
      color: '#ffffff',
      backgroundColor: '#808080',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: { // This style needs a manual hover effect handling in React
      backgroundColor: '#0056b3',
    }
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = styles.button.backgroundColor;
  };

  return (
    <div style={styles.menuContainer}>
      {options.map((option, index) => (
        <div key={index} style={styles.menuItem}>
          <button
            onClick={option.onClick}
            style={styles.button}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {option.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;

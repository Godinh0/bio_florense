// Menu.js
import React from "react";

const Menu = ({ options }) => {
  const styles = {
    menuContainer: {
      padding: "10px",
      borderRadius: "8px",
    },
    menuItem: {
      margin: "8px 0",
    },
    button: {
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      color: "#ffffff",
      backgroundColor: "#808080",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
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
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              color: "#ffffff",
              backgroundColor: option.disabled?(option.disabled===true?"#B8B3B3":"#808080"):("#808080"),
              border: "none",
              borderRadius: "4px",
              cursor: option.disabled?(option.disabled===true?"normal":"pointer"):("pointer"),
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            disabled={option.disabled ? option.disabled : false}
          >
            {option.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;

// Menu.js
import React from 'react';

const Menu = ({ options }) => {
  return (
    <div>
      {options.map((option, index) => (
        <div key={index} style={{ margin: '5px 0' }}>
          <button onClick={option.onClick} style={{ width: '100%' }}>
            {option.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;

import React, { useState } from "react";
import "./App.css";
import OfficeScreen from "./Components/OfficeScreen";
import LabScreen from "./Components/LabScreen";
import MicroScreen from "./Components/MicroScreen_1";
import MicroScreen_2 from "./Components/MicroScreen_2";
import MicroScreen_3 from "./Components/MicroScreen_3";
import { Button } from "antd";
import BloodTestScreen from "./Components/BloodTestScreen";

const App = () => {
  const [isOffice, setIsOffice] = useState(true); // Boolean to track the current screen

  const handleClick = () => {
    setIsOffice(!isOffice); // Toggle between true and false
  };

  const handleReset = () => {
    localStorage.clear(); // Clear all local storage data
    window.location.reload(); // Optional: Reload the page to reset the application state
  };

  return (
    <div style={{ position: "relative" }}>
      <Button
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1, // Adjust the z-index to ensure it's visible
        }}
        onClick={handleClick}
      >
        {isOffice ? "Laboratorio ->" : "Escritorio ->"}
      </Button>
      <Button
        style={{
          position: "absolute",
          top: 0,
          left: 120, // Adjust so it doesn't overlap with the first button
          zIndex: 1,
        }}
        onClick={handleReset}
      >
        Reset Local Storage
      </Button>
      <div>{isOffice ? <OfficeScreen /> : <LabScreen/>}</div>
    </div>
  );
};

export default App;

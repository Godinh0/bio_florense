import React, { useState } from "react";
import "./App.css";
import OfficeScreen from "./Components/OfficeScreen";
import LabScreen from "./Components/LabScreen";
import { Button } from "antd";

const App = () => {
  const [isOffice, setIsOffice] = useState(true); // Boolean to track the current screen

  const handleClick = () => {
    setIsOffice(!isOffice); // Toggle between true and false
  };

  return (
    <div style={{ position: "relative" }}>
      <Button
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1, // Adjust the z-index to ensure it's below other content
        }}
        onClick={handleClick}
      >
        {isOffice ? "Laboratorio ->" : "Escritorio ->"}
      </Button>
      <div>{isOffice ? <OfficeScreen /> : <LabScreen />}</div>
    </div>
  );
};

export default App;

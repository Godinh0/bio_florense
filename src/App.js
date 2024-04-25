import React, { useState } from "react";
import "./App.css";
import OfficeScreen from "./Components/OfficeScreen";
import LabScreen from "./Components/LabScreen";
import { Button } from "antd";


const App = () => {
  const [isOffice, setIsOffice] = useState(true);
  const [microScreen, setMicroScreen] = useState("");

  const handleClick = () => {
    setIsOffice(!isOffice); 
  };

  const handleReset = () => {
    localStorage.clear();
    window.location.reload(); 
  };

  return (
    <div style={{ position: "relative" }}>
      <Button
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1, 
        }}
        onClick={handleClick}
      >
        {isOffice ? "Laboratorio ->" : "Escritorio ->"}
      </Button>
      <Button
        style={{
          position: "absolute",
          top: 0,
          left: 120,
          zIndex: 1,
        }}
        onClick={handleReset}
      >
        Reset Local Storage
      </Button>
      <div>{isOffice ? <OfficeScreen setIsOffice={setIsOffice} setMicroScreen={setMicroScreen} /> : <LabScreen microScreen={microScreen} setMicroScreen={setMicroScreen}/>}</div>
    </div>
  );
};

export default App;

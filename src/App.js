import React, { useState, useEffect } from "react";
import "./App.css";
import OfficeScreen from "./Components/OfficeScreen";
import LabScreen from "./Components/LabScreen";
import { Button } from "antd";


const App = () => {
  const [isOffice, setIsOffice] = useState(true);
  const [microScreen, setMicroScreen] = useState("");
  const [dnaScreen, setDnaScreen] = useState(false);
  const [currentStage, setCurrentStage] = useState(localStorage.getItem("currentStage") || 0);

  const handleClick = () => {
    setIsOffice(!isOffice); 
  };

  const handleReset = () => {
    localStorage.clear();
    window.location.reload(); 
  };
  
  useEffect(() => {
    localStorage.setItem("currentStage", currentStage);
    console.log(localStorage.getItem("currentStage"))
  }, [currentStage]);
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
      <div>{isOffice ? <OfficeScreen currentStage={currentStage} setCurrentStage={setCurrentStage} dnaScreen={dnaScreen} setDnaScreen={setDnaScreen} setIsOffice={setIsOffice} setMicroScreen={setMicroScreen} /> : <LabScreen currentStage={currentStage} setCurrentStage={setCurrentStage} setDnaScreen={setDnaScreen} setIsOffice={setIsOffice} microScreen={microScreen} setMicroScreen={setMicroScreen}/>}</div>
    </div>
  );
};

export default App;

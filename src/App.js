import React, { useState, useEffect } from "react";
import "./App.css";
import OfficeScreen from "./Components/OfficeScreen";
import LabScreen from "./Components/LabScreen";
import { Button } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined, RedoOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { ReactFloatingBalloons } from 'react-floating-balloons';  // Importe o componente corretamente
import ModalButtons from "./Components/ModalButtons";

const App = () => {
  const [isOffice, setIsOffice] = useState(true);
  const [microScreen, setMicroScreen] = useState("");
  const [dnaScreen, setDnaScreen] = useState(false);
  const [showFirstDialog, setShowFirstDialog] = useState(false);
  const [showSecondDialog, setShowSecondDialog] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [showAuthorsDialog, setShowAuthorsDialog] = useState(false);
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
    console.log(localStorage.getItem("currentStage"));
  }, [currentStage]);

  return (
    <div style={{ position: "relative" }}>
      {currentStage === 10 && <ReactFloatingBalloons count={20} msgText="" />}
      <ModalButtons
        textCancel="Cancelar"
        textConfirm="Reiniciar"
        message="Tem certeza que deseja Reiniciar? Você perderá todo o seu progresso!"
        onBack={() => {
          setShowResetDialog(false);
        }}
        onConfirm={() => {
          handleReset();
        }}
        onCancel={() => {
          setShowResetDialog(false);
        }}
        show={showResetDialog}
        closable
      /> 
      <ModalButtons
        textCancel=""
        textConfirm="Próximo"
        message="Parabéns pelo trabalho, Perito! 
        Com base em todas as análises realizadas e diagnósticos obtidos, 
        concluímos que a morte de Mark foi causada pela presença de um Protozoário 
        no cérebro, causando focos de hemorragia e necrose, além de inflamações no córtex frontal. 
        Essa grave infecção originou-se após o contato de Mark no Rio Manso em seu primeiro dia no Hotel, 
        que de acordo com a Análise Microbiológica da Água, foi possível obtermos a confirmação da presença 
        de organismos eucariontes de vida livre (Protozoário Ameba) no local."
        onConfirm={() => {
          setShowFirstDialog(false);
          setShowSecondDialog(true);
        }}
        onCancel={() => {
          setShowFirstDialog(false);
        }}
        show={showFirstDialog}
        closable
      /> 
      <ModalButtons
        textCancel="Voltar"
        textConfirm="Próximo"
        message="Quando essa Ameba entra no corpo humano, geralmente pelo nariz, se desloca até o cérebro, 
        causando a inflamação e, em poucos dias, a morte. É importante ressaltar que essa é uma situação 
        incomum e que a infecção pela ameba Naegleria fowleri é extremamente rara!"
        onBack={() => {
          setShowFirstDialog(true);
          setShowSecondDialog(false);
        }}
        onCancel={() => {
          setShowSecondDialog(false);
        }}
        onConfirm={() => {
          setShowSecondDialog(false);
        }}
        show={showSecondDialog}
        closable
      />
      <ModalButtons
        buttonless
        textCancel="Fechar"
        textConfirm=""
        message= {<p> Autores: 
        <br/><br/>Nome: João Silva 
        <br/>Email: joao.silva@example.com
        <br/><br/>Nome: Maria Oliveira 
        <br/>Email: maria.oliveira@example.com </p>}
        onCancel={() => {
          setShowAuthorsDialog(false);
        }}
        show={showAuthorsDialog}
        closable
      />
      <Button
        style={{
          position: "absolute",
          top: "1%",
          left: "1%",
          zIndex: 1,
          backgroundColor: "#4CAF50",  // Verde
          color: "white",
          border: "2px solid #4CAF50",
          borderRadius: "10px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
        }}
        onClick={handleClick}
      >
        {isOffice ? "Laboratório " : "Escritório "}
        {isOffice ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
      </Button>
      <Button
        style={{
          position: "absolute",
          top: "1%",
          right: "10%",
          zIndex: 1,
          backgroundColor: "#1890FF",  // Azul
          color: "white",
          border: "2px solid #1890FF",
          borderRadius: "10px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => setShowAuthorsDialog(true)}
        icon={<InfoCircleOutlined />}
      >
        Autores
      </Button>
      <Button
        style={{
          position: "absolute",
          top: "1%",
          right: "1%",
          zIndex: 1,
          backgroundColor: "#f44336",  // Vermelho
          color: "white",
          border: "2px solid #f44336",
          borderRadius: "10px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => setShowResetDialog(true)}
        icon={<RedoOutlined />}
      >
        Reiniciar
      </Button>
      <div>
        {isOffice ? 
          <OfficeScreen 
            currentStage={currentStage} 
            setCurrentStage={setCurrentStage} 
            dnaScreen={dnaScreen} 
            setDnaScreen={setDnaScreen} 
            setIsOffice={setIsOffice} 
            setMicroScreen={setMicroScreen} 
          /> 
          : 
          <LabScreen 
            currentStage={currentStage} 
            setCurrentStage={setCurrentStage} 
            setDnaScreen={setDnaScreen} 
            setIsOffice={setIsOffice} 
            microScreen={microScreen} 
            setMicroScreen={setMicroScreen}
            setShowFirstDialog={setShowFirstDialog}
          />
        }
      </div>
    </div>
  );
};

export default App;

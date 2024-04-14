import React, { useState, useEffect } from "react";
import evidence_background from "../assets/evidence_background.png";
import image1 from "../assets/prints.svg";
import ModalButtons from "./ModalButtons";
import { Button } from "antd";

const PrintsScreen = ({ handlePrints }) => {
  const [showFirstDialog, setShowFirstDialog] = useState(false);
  const [showSecondDialog, setShowSecondDialog] = useState(false);
  const [showImage1, setShowImage1] = useState(false);

  useEffect(() => {
    const firstTime = localStorage.getItem('firstTimePrints');
    if (firstTime === 'no') {
      setShowImage1(true);
    } else {
      setShowFirstDialog(true);
      localStorage.setItem('firstTimePrints', 'no');
    }
  }, []);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        <img
          src={evidence_background}
          alt="Evidence Background"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        {showImage1 && (
          <div style={{position: "absolute", top: "10%", left: "30%", width: "70vw", zIndex: 1, display:"flex", flexDirection:"column", gap:20, alignItems:"end" }}>
            <img style={{width:"100%"}} src={image1} alt="Digitais" />
            <Button onClick={handlePrints} style={{width:"30%", marginRight:"15%"}}>Voltar</Button>
          </div>
        )}
      </div>
      <ModalButtons
        textCancel=""
        textConfirm="Próximo"
        message="Olá perito! Primeiramente, para analisarmos as digitais, vamos observar os locais em que foram encontradas."
        onConfirm={() => {
          setShowFirstDialog(false);
          setShowSecondDialog(true);
        }}
        show={showFirstDialog}
      />
      <ModalButtons
        textCancel="Voltar"
        textConfirm="Próximo"
        message="Em seguida, volte para o escritório e abra as fichas das testemunhas para efetuar a comparação e descobrir os responsáveis pelas digitais que foram encontradas."
        onCancel={() => {
          setShowFirstDialog(true);
          setShowSecondDialog(false);
        }}
        onConfirm={() => {
          setShowSecondDialog(false);
          setShowImage1(true);
        }}
        show={showSecondDialog}
      />
    </>
  );
};

export default PrintsScreen;

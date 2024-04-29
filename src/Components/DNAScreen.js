import React, { useState, useEffect } from "react";
import evidence_background from "../assets/evidence_background.png";
import dna_perfil from "../assets/dna_perfil.svg";
import ModalButtons from "./ModalButtons";

const DNAScreen = ({ handleDNA }) => {
  const [showFirstDialog, setShowFirstDialog] = useState(true);
  const [showSecondDialog, setShowSecondDialog] = useState(false);

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
      </div>
      <ModalButtons
        textCancel=""
        textConfirm="Próximo"
        message="Para saber a quem pertence o fio de cabelo humano, é necessário efetuar uma análise do DNA 
        presente na raiz do fio. O DNA é constituído por proteínas chamadas bases nitrogenadas. Cada uma delas 
        carrega o menor pedacinho possível de informação genética. "
        onConfirm={() => {
          setShowFirstDialog(false);
          setShowSecondDialog(true);
        }}
        show={showFirstDialog}
      />
      <ModalButtons
        textCancel="Voltar"
        textConfirm="Ir para o Escritório"
        message={
          <>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <p>
              O DNA do fio encontrado noo moletom da vítima foi extraído do
              bulbo capilar (raiz do pêlo) resultando na sequência de
              nucleotídeos a seguir:
            </p>
            <img style={{width:"60%"}} src={dna_perfil}></img>
            <p>
            Agora, volte para o escritório e abra as fichas das testemunhas 
            para efetuar a comparação e descobrir o responsável pelo fio que foi encontrado.
            </p>
            </div>
          </>
        }
        onCancel={() => {
          setShowFirstDialog(true);
          setShowSecondDialog(false);
        }}
        onConfirm={() => {
          setShowSecondDialog(false);
          handleDNA();
        }}
        show={showSecondDialog}
      />
    </>
  );
};

export default DNAScreen;

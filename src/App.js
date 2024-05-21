import React, { useState, useEffect } from "react";
import "./App.css";
import OfficeScreen from "./Components/OfficeScreen";
import LabScreen from "./Components/LabScreen";
import { Button, Radio } from "antd";
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  RedoOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import Confetti from "react-confetti";
import ModalButtons from "./Components/ModalButtons";
import ModalQuestion from "./Components/ModalQuestion";

const App = () => {
  const [isOffice, setIsOffice] = useState(true);
  const [microScreen, setMicroScreen] = useState("");
  const [dnaScreen, setDnaScreen] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showFirstDialog, setShowFirstDialog] = useState(false);
  const [showSecondDialog, setShowSecondDialog] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [showAuthorsDialog, setShowAuthorsDialog] = useState(false);
  const [currentStage, setCurrentStage] = useState(
    localStorage.getItem("currentStage") || 0
  );
  const [validationMessage_A, setValidationMessage_A] = useState(
    localStorage.getItem("validationFinalMessage_A") || null
  );
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "1) Foi assassinado com golpes de faca por Andrey",
    "2) Foi envenenado por Chiara",
    "3) Feriu-se fatalmente em uma briga com Gregório",
    "4) Foi contaminado com um protozoário que afetou seu cérebro",
  ];

  useEffect(() => {
    const isCorrect =
      selectedOption ===
      "4) Foi contaminado com um protozoário que afetou seu cérebro";
    if (isCorrect) {
      setValidationMessage_A("Correto");
    } else {
      setValidationMessage_A("Incorreto");
    }
    localStorage.setItem("AnswerFinal_A", selectedOption);
  }, [selectedOption]);

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

  const copyToClipboard = (email, event) => {
    event.preventDefault();
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert(`${email} copiado para a área de transferência!`);
      })
      .catch((err) => {
        console.error("Falha ao copiar e-mail: ", err);
      });
  };

  return (
    <div style={{ position: "relative" }}>
      {currentStage === 11 && <Confetti numberOfPieces={200} />}
      <ModalButtons
        textCancel="Cancelar"
        textConfirm="Reiniciar"
        message="Tem certeza que deseja Reiniciar? Você perderá todo o seu progresso!"
        onBack={() => setShowResetDialog(false)}
        onConfirm={handleReset}
        onCancel={() => setShowResetDialog(false)}
        show={showResetDialog}
        closable
      />
      <ModalQuestion
        unclosable
        noExam
        textConfirm="Confirmar"
        message={<p style={{textAlign:"justify"}}>Chegou o momento mais esperado, perito! Após investigar e 
        analisar as evidências, qual é a causa da morte de Mark?</p>}
        onConfirm={() => {
          setShowQuestion(false);
          setShowFirstDialog(true);
          setCurrentStage(11)
        }}
        show={showQuestion}
        onCancel={() => setShowQuestion(false)}
        correctAnswer={
          selectedOption ===
          "4) Foi contaminado com um protozoário que afetou seu cérebro"
        }
      >
        <Radio.Group
          onChange={(e) => setSelectedOption(e.target.value)}
          value={selectedOption}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          {options.map((option, index) => (
            <Radio key={index} value={option} style={{ whiteSpace: "nowrap" }}>
              {option}
            </Radio>
          ))}
        </Radio.Group>
        <p
          style={{ color: validationMessage_A === "Correto" ? "green" : "red" }}
        >
          {validationMessage_A}
        </p>
      </ModalQuestion>
      <ModalButtons
        textCancel=""
        textConfirm="Próximo"
        message={<p style={{textAlign:"justify"}}>Parabéns pelo trabalho, Perito! 
        Com base em todas as análises realizadas e diagnósticos obtidos, 
        concluímos que a morte de Mark foi causada pela presença de um Protozoário 
        no cérebro, causando focos de hemorragia e necrose, além de inflamações no córtex frontal. 
        Essa grave infecção originou-se após o contato de Mark no Rio Manso em seu primeiro dia no Hotel, 
        que de acordo com a Análise Microbiológica da Água, foi possível obtermos a confirmação da presença 
        de organismos eucariontes de vida livre (Protozoário Ameba) no local.</p>}
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
        message={<p style={{textAlign:"justify"}}>Quando essa Ameba entra no corpo humano, geralmente pelo nariz, se desloca até o cérebro, 
        causando a inflamação e, em poucos dias, a morte. É importante ressaltar que essa é uma situação 
        incomum e que a infecção pela ameba Naegleria fowleri é extremamente rara!</p>}
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
        message={
          <p>
            Créditos:
            <br />
            <br />
            Autoria: Melissa Spíndola Estevam
            <br />
            Emails:
            <br />
            <a
              href="#"
              onClick={(e) => copyToClipboard("melissa.estevam@ufpr.br", e)}
            >
              melissa.estevam@ufpr.br
            </a>
            <br />
            <a
              href="#"
              onClick={(e) => copyToClipboard("melissa.s.estevam@gmail.com", e)}
            >
              melissa.s.estevam@gmail.com
            </a>
            <br />
            <br />
            Programação: Gabriel Godinho Ferreira
            <br />
            Emails: <br />
            <a
              href="#"
              onClick={(e) => copyToClipboard("gabrielgodinho014@gmail.com", e)}
            >
              gabrielgodinho014@gmail.com
            </a>
            <br />
            <a
              href="#"
              onClick={(e) =>
                copyToClipboard("gabriel.ferreira4@pucpr.edu.br", e)
              }
            >
              gabriel.ferreira4@pucpr.edu.br
            </a>
            <br />
            <br />
            Orientação: Profa. Dra. Flavia Sant’Anna Rios
            <br />
            Emails: <br />
            <a
              href="#"
              onClick={(e) => copyToClipboard("flaviasrios@ufpr.br", e)}
            >
              flaviasrios@ufpr.br
            </a>
            <br />
            <a
              href="#"
              onClick={(e) => copyToClipboard("flaviasrios@gmail.com", e)}
            >
              flaviasrios@gmail.com
            </a>
          </p>
        }
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
          backgroundColor: "#4CAF50", // Verde
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
          backgroundColor: "#1890FF", // Azul
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
        Créditos
      </Button>
      <Button
        style={{
          position: "absolute",
          top: "1%",
          right: "1%",
          zIndex: 1,
          backgroundColor: "#f44336", // Vermelho
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
        {isOffice ? (
          <OfficeScreen
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
            dnaScreen={dnaScreen}
            setDnaScreen={setDnaScreen}
            setIsOffice={setIsOffice}
            setMicroScreen={setMicroScreen}
          />
        ) : (
          <LabScreen
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
            setDnaScreen={setDnaScreen}
            setIsOffice={setIsOffice}
            microScreen={microScreen}
            setMicroScreen={setMicroScreen}
            setShowQuestion={setShowQuestion}
          />
        )}
      </div>
    </div>
  );
};

export default App;

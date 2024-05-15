import React, { useState, useEffect } from "react";
import evidence_background from "../assets/evidence_background.png";
import image1 from "../assets/dnaimage.png";
import dna_perfil from "../assets/dna_perfil.svg";
import ModalButtons from "./ModalButtons";
import AndreyRecord from "../assets/andrey_record.svg";
import MarietaRecord from "../assets/marieta_record.svg";
import GregorioRecord from "../assets/gregorio_record.svg";
import ChiaraRecord from "../assets/chiara_record.svg";
import OlegarioRecord from "../assets/olegario_record.svg";
import MarkRecord from "../assets/mark_record.svg";
import GeremiasRecord from "../assets/geremias_record.svg";
import Menu from "./Menu";
import { Button, Select } from "antd";
import ImageModal from "./ImageModal";
import ModalQuestion from "./ModalQuestion";
import { Option } from "antd/es/mentions";

const DNAScreen = ({ handleDNA, handleDNAFinish }) => {
  const [showFirstDialog, setShowFirstDialog] = useState(true);
  const [showImage1, setShowImage1] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [isAndreyRecordVisible, setIsAndreyRecordVisible] = useState(false);
  const [isOlegarioRecordVisible, setIsOlegarioRecordVisible] = useState(false);
  const [isGeremiasRecordVisible, setIsGeremiasRecordVisible] = useState(false);
  const [isChiaraRecordVisible, setIsChiaraRecordVisible] = useState(false);
  const [isMarietaRecordVisible, setIsMarietaRecordVisible] = useState(false);
  const [isGregorioRecordVisible, setIsGregorioRecordVisible] = useState(false);
  const [isMarkRecordVisible, setIsMarkRecordVisible] = useState(false);
  const [validationMessage_A, setValidationMessage_A] = useState(
    localStorage.getItem("validationDNAMessage_A") || null
  );
  const [answer_A, setAnswer_A] = useState(
    localStorage.getItem("AnswerDNA_A") || null
  );
  const [correctAnswer, setCorrectAnswer] = useState(false);

  const options = [
    { name: "Andrey" },
    { name: "Marieta" },
    { name: "Gregorio" },
    { name: "Chiara" },
    { name: "Olegario" },
    { name: "Mark" },
    { name: "Geremias" },
  ];

  useEffect(() => {
    if (validationMessage_A === "Correto") {
      setCorrectAnswer(true);
    } else setCorrectAnswer(false);
  }, [validationMessage_A]);

  const onChange_A = (value) => {
    const msg = value === "Chiara" ? "Correto" : "Incorreto";
    setValidationAndStore("validationDNAMessage_A", msg);
    setAnswer_A(value);
    localStorage.setItem("AnswerDNA_A", value);
  };

  const setValidationAndStore = (key, value) => {
    localStorage.setItem(key, value);
        setValidationMessage_A(value);
  };


  const menuOptionsWitness = [
    {
      title: "Olegário",
      onClick: () => setIsOlegarioRecordVisible(true),
    },
    {
      title: "Marieta",
      onClick: () => setIsMarietaRecordVisible(true),
    },
    {
      title: "Chiara",
      onClick: () => setIsChiaraRecordVisible(true),
    },
    {
      title: "Andrey",
      onClick: () => setIsAndreyRecordVisible(true),
    },
    {
      title: "Geremias",
      onClick: () => setIsGeremiasRecordVisible(true),
    },
    {
      title: "Gregório",
      onClick: () => setIsGregorioRecordVisible(true),
    },
    {
      title: "Mark",
      onClick: () => setIsMarkRecordVisible(true),
    },
  ];
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
          <>
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "80%",
                width: "70vw",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                gap: 20,
                alignItems: "end",
              }}
            >
              <Menu options={menuOptionsWitness} />
            </div>
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "30%",
                width: "70vw",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 6,
                alignItems: "end",
              }}
            >
              <img style={{ width: "100%" }} src={image1} alt="Digitais" />
              <div
                style={{
                  width: "80%",
                  marginRight: "10%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  onClick={() => setShowQuestion(true)}
                  style={{ width: "30%", minHeight: 40 }}
                >
                  VERIFICAÇÃO FINAL
                </Button>
                <Button
                  onClick={handleDNA}
                  style={{ width: "30%", minHeight: 40 }}
                >
                  VOLTAR
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      <ModalQuestion
        textConfirm="Ir para o Escritório"
        message=""
        onConfirm={() => {
          handleDNAFinish();
        }}
        show={showQuestion}
        onCancel={() => {
          setShowQuestion(false);
        }}
        correctAnswer={correctAnswer}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <p>A sequência de nucleotídeos corresponde ao fio de cabelo de:</p>
            <Select
              value={answer_A}
              style={{ minWidth: "25%" }}
              onChange={onChange_A}
              placeholder="Selecione"
            >
              {options.map((option) => {
                return (
                  <Option key={option.index} value={option.name}>
                    {option.name}
                  </Option>
                );
              })}
            </Select>
            <p
              style={{
                color: validationMessage_A === "Correto" ? "green" : "red",
              }}
            >
              {validationMessage_A}
            </p>
          </div>
        </div>
      </ModalQuestion>
      <ModalButtons
        textCancel=""
        textConfirm="Próximo"
        message="Para saber a quem pertence o fio de cabelo humano, é necessário efetuar uma análise do DNA 
        presente na raiz do fio. O DNA é constituído por proteínas chamadas bases nitrogenadas. Cada uma delas 
        carrega o menor pedacinho possível de informação genética. "
        onConfirm={() => {
          setShowFirstDialog(false);
          setShowImage1(true);
        }}
        onCancel={() => {
          handleDNA();
        }}
        closable
        show={showFirstDialog}
      />
      <ImageModal
        isVisible={isAndreyRecordVisible}
        onClose={() => {
          setIsAndreyRecordVisible(false);
        }}
        imageSrc={AndreyRecord}
      />

      <ImageModal
        isVisible={isMarietaRecordVisible}
        onClose={() => {
          setIsMarietaRecordVisible(false);
        }}
        imageSrc={MarietaRecord}
      />

      <ImageModal
        isVisible={isGregorioRecordVisible}
        onClose={() => {
          setIsGregorioRecordVisible(false);
        }}
        imageSrc={GregorioRecord}
      />

      <ImageModal
        isVisible={isChiaraRecordVisible}
        onClose={() => {
          setIsChiaraRecordVisible(false);
        }}
        imageSrc={ChiaraRecord}
      />

      <ImageModal
        isVisible={isOlegarioRecordVisible}
        onClose={() => {
          setIsOlegarioRecordVisible(false);
        }}
        imageSrc={OlegarioRecord}
      />

      <ImageModal
        isVisible={isMarkRecordVisible}
        onClose={() => {
          setIsMarkRecordVisible(false);
        }}
        imageSrc={MarkRecord}
      />

      <ImageModal
        isVisible={isGeremiasRecordVisible}
        onClose={() => {
          setIsGeremiasRecordVisible(false);
        }}
        imageSrc={GeremiasRecord}
      />
    </>
  );
};

export default DNAScreen;

import React, { useState, useEffect } from "react";
import evidence_background from "../assets/evidence_background.png";
import image1 from "../assets/prints.svg";
import ModalButtons from "./ModalButtons";
import { Button, Input, Select } from "antd";
import ImageModal from "./ImageModal";
import Menu from "./Menu";
import AndreyRecord from "../assets/andrey_record.svg";
import MarietaRecord from "../assets/marieta_record.svg";
import GregorioRecord from "../assets/gregorio_record.svg";
import ChiaraRecord from "../assets/chiara_record.svg";
import OlegarioRecord from "../assets/olegario_record.svg";
import MarkRecord from "../assets/mark_record.svg";
import GeremiasRecord from "../assets/geremias_record.svg";
import ModalQuestion from "./ModalQuestion";
import { Option } from "antd/es/mentions";

const PrintsScreen = ({ handlePrints, handlePrintsFinish }) => {
  const [showFirstDialog, setShowFirstDialog] = useState(true);
  const [showSecondDialog, setShowSecondDialog] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showImage1, setShowImage1] = useState(false);
  const [isAndreyRecordVisible, setIsAndreyRecordVisible] = useState(false);
  const [isOlegarioRecordVisible, setIsOlegarioRecordVisible] = useState(false);
  const [isGeremiasRecordVisible, setIsGeremiasRecordVisible] = useState(false);
  const [isChiaraRecordVisible, setIsChiaraRecordVisible] = useState(false);
  const [isMarietaRecordVisible, setIsMarietaRecordVisible] = useState(false);
  const [isGregorioRecordVisible, setIsGregorioRecordVisible] = useState(false);
  const [isMarkRecordVisible, setIsMarkRecordVisible] = useState(false);
  const [validationMessage_A, setValidationMessage_A] = useState(
    localStorage.getItem("validationPrintsMessage_A") || null
  );
  const [validationMessage_B, setValidationMessage_B] = useState(
    localStorage.getItem("validationPrintsMessage_B") || null
  );
  const [validationMessage_C, setValidationMessage_C] = useState(
    localStorage.getItem("validationPrintsMessage_C") || null
  );
  const [validationMessage_D, setValidationMessage_D] = useState(
    localStorage.getItem("validationPrintsMessage_D") || null
  );
  const [validationMessage_E, setValidationMessage_E] = useState(
    localStorage.getItem("validationPrintsMessage_E") || null
  );
  const [answer_A, setAnswer_A] = useState(localStorage.getItem("AnswerPrints_A") || null);
  const [answer_B, setAnswer_B] = useState(localStorage.getItem("AnswerPrints_B") || null);
  const [answer_C, setAnswer_C] = useState(localStorage.getItem("AnswerPrints_C") || null);
  const [answer_D, setAnswer_D] = useState(localStorage.getItem("AnswerPrints_D") || null);
  const [answer_E, setAnswer_E] = useState(localStorage.getItem("AnswerPrints_E") || null);
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
    if (
      validationMessage_A === "Correto" &&
      validationMessage_B === "Correto" &&
      validationMessage_C === "Correto" &&
      validationMessage_D === "Correto" &&
      validationMessage_E === "Correto"
    ) {
      setCorrectAnswer(true);
    } else setCorrectAnswer(false);
  }, [
    validationMessage_A,
    validationMessage_B,
    validationMessage_C,
    validationMessage_D,
    validationMessage_E,
  ]);

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

const setValidationAndStore = (key, value) => {
    localStorage.setItem(key, value);
    switch (key) {
      case "validationPrintsMessage_A":
        setValidationMessage_A(value);
        break;
      case "validationPrintsMessage_B":
        setValidationMessage_B(value);
        break;
      case "validationPrintsMessage_C":
        setValidationMessage_C(value);
        break;
      case "validationPrintsMessage_D":
        setValidationMessage_D(value);
        break;
      case "validationPrintsMessage_E":
        setValidationMessage_E(value);
        break;
      default:
        break;
    }
  };

  const onChange_A = (value) => {
    const msg = value === "Chiara" ? "Correto" : "Incorreto";
    setValidationAndStore("validationPrintsMessage_A", msg);
    setAnswer_A(value);
    localStorage.setItem("AnswerPrints_A", value);
  };

  const onChange_B = (value) => {
    const msg = value === "Mark" ? "Correto" : "Incorreto";
    setValidationAndStore("validationPrintsMessage_B", msg);
    setAnswer_B(value);
    localStorage.setItem("AnswerPrints_B", value);
  };

  const onChange_C = (value) => {
    const msg = value === "Gregorio" ? "Correto" : "Incorreto";
    setValidationAndStore("validationPrintsMessage_C", msg);
    setAnswer_C(value);
    localStorage.setItem("AnswerPrints_C", value);
  };

  const onChange_D = (value) => {
    const msg = value === "Marieta" ? "Correto" : "Incorreto";
    setValidationAndStore("validationPrintsMessage_D", msg);
    setAnswer_D(value);
    localStorage.setItem("AnswerPrints_D", value);
  };

  const onChange_E = (value) => {
    const msg = value === "Andrey" ? "Correto" : "Incorreto";
    setValidationAndStore("validationPrintsMessage_E", msg);
    setAnswer_E(value);
    localStorage.setItem("AnswerPrints_E", value);
  };

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
                  className="btnConfirmLab"
                >
                  VERIFICAÇÃO FINAL
                </Button>
                <Button
                  onClick={handlePrints}
                  style={{ width: "30%", minHeight: 40 }}
                  className="btnConfirmLab"
                >
                  VOLTAR
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      <ModalButtons
        textCancel=""
        textConfirm="Próximo"
        message={<p style={{textAlign:"justify"}}>Olá perito! Para analisarmos as Impressões Digitais, vamos observar os locais em 
        que foram coletadas. Na lateral esquerda, você encontrará as fichas dos envolvidos para 
        compararmos com as   digitais encontradas próximo à vítima. 
        Feita a comparação,confira as digitais correspondentes a cada local na VERIFICAÇÃO FINAL
        </p>}
        onConfirm={() => {
          setShowFirstDialog(false);
          setShowImage1(true);
        }}
        onCancel={() => {
          handlePrints();
        }}
        closable
        show={showFirstDialog}
      />
      <ModalQuestion
        textConfirm="Ir para o Escritório"
        message="VERIFICAÇÃO DIGITAIS"
        onConfirm={() => {
          handlePrintsFinish();
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
            <p>A) Garrafa de água</p>
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <p>B) Cofre</p>
            <Select
              value={answer_B}
              style={{ minWidth: "25%" }}
              onChange={onChange_B}
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
                color: validationMessage_B === "Correto" ? "green" : "red",
              }}
            >
              {validationMessage_B}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <p>C) Maçaneta</p>
            <Select
              value={answer_C}
              style={{ minWidth: "25%" }}
              onChange={onChange_C}
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
                color: validationMessage_C === "Correto" ? "green" : "red",
              }}
            >
              {validationMessage_C}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <p>D) Cômoda</p>
            <Select
              value={answer_D}
              style={{ minWidth: "25%" }}
              onChange={onChange_D}
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
                color: validationMessage_D === "Correto" ? "green" : "red",
              }}
            >
              {validationMessage_D}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <p>E) Faca com sangue</p>
            <Select
              value={answer_E}
              style={{ minWidth: "25%" }}
              onChange={onChange_E}
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
                color: validationMessage_E === "Correto" ? "green" : "red",
              }}
            >
              {validationMessage_E}
            </p>
          </div>
        </div>
      </ModalQuestion>
      <ImageModal
      digital
        isVisible={isAndreyRecordVisible}
        onClose={() => {
          setIsAndreyRecordVisible(false);
        }}
        imageSrc={AndreyRecord}
      />

      <ImageModal
      digital
        isVisible={isMarietaRecordVisible}
        onClose={() => {
          setIsMarietaRecordVisible(false);
        }}
        imageSrc={MarietaRecord}
      />

      <ImageModal
      digital
        isVisible={isGregorioRecordVisible}
        onClose={() => {
          setIsGregorioRecordVisible(false);
        }}
        imageSrc={GregorioRecord}
      />

      <ImageModal
      digital
        isVisible={isChiaraRecordVisible}
        onClose={() => {
          setIsChiaraRecordVisible(false);
        }}
        imageSrc={ChiaraRecord}
      />

      <ImageModal
      digital
        isVisible={isOlegarioRecordVisible}
        onClose={() => {
          setIsOlegarioRecordVisible(false);
        }}
        imageSrc={OlegarioRecord}
      />

      <ImageModal
      digital
        isVisible={isMarkRecordVisible}
        onClose={() => {
          setIsMarkRecordVisible(false);
        }}
        imageSrc={MarkRecord}
      />

      <ImageModal
      digital
        isVisible={isGeremiasRecordVisible}
        onClose={() => {
          setIsGeremiasRecordVisible(false);
        }}
        imageSrc={GeremiasRecord}
      />
    </>
  );
};

export default PrintsScreen;

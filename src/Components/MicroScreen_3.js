import micro_background from "../assets/micro_background.png";
import micro from "../assets/micro.svg";
import image1 from "../assets/image1_micro3.svg";
import image2 from "../assets/image2_micro3.svg";
import image3 from "../assets/image3_micro3.svg";
import ModalButtons from "./ModalButtons";
import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import ModalQuestion from "./ModalQuestion";
import { Button, Select } from "antd";
import { Option } from "antd/es/mentions";

const MicroScreen_3 = ({setShowMicroScreen, handleMicro3Finish}) => {
  const [showLaminas, setShowLaminas] = useState(false);
  const [showFirstDialog, setShowFirstDialog] = useState(true);
  const [showSecondDialog, setShowSecondDialog] = useState(false);
  const [hoveredLamina1, setHoveredLamina1] = useState(false);
  const [hoveredLamina2, setHoveredLamina2] = useState(false);
  const [hoveredLamina3, setHoveredLamina3] = useState(false);
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [validationMessage_A, setValidationMessage_A] = useState(
    localStorage.getItem("validationMicro3Message_A") || null
  );
  const [validationMessage_B, setValidationMessage_B] = useState(
    localStorage.getItem("validationMicro3Message_B") || null
  );
  const [validationMessage_C, setValidationMessage_C] = useState(
    localStorage.getItem("validationMicro3Message_C") || null
  );
  const [answer_A, setAnswer_A] = useState(
    localStorage.getItem("AnswerMicro3_A") || null
  );
  const [answer_B, setAnswer_B] = useState(
    localStorage.getItem("AnswerMicro3_B") || null
  );
  const [answer_C, setAnswer_C] = useState(
    localStorage.getItem("AnswerMicro3_C") || null
  );
  const [correctAnswer, setCorrectAnswer] = useState(false);

  const options = [
    { name: "Fígado" },
    { name: "Cérebro" },
    { name: "Coração" },
  ];

  const setValidationAndStore = (key, value) => {
    localStorage.setItem(key, value);
    switch (key) {
      case "validationMicro3Message_A":
        setValidationMessage_A(value);
        break;
      case "validationMicro3Message_B":
        setValidationMessage_B(value);
        break;
        case "validationMicro3Message_C":
        setValidationMessage_C(value);
        break;
      default:
        break;
    }
  };

  const onChange_A = (value) => {
    const msg = value === "Coração" ? "Correto" : "Incorreto";
    setValidationAndStore("validationMicro3Message_A", msg);
    setAnswer_A(value);
    localStorage.setItem("AnswerMicro3_A", value);
  };

  const onChange_B = (value) => {
    const msg = value === "Fígado" ? "Correto" : "Incorreto";
    setValidationAndStore("validationMicro3Message_B", msg);
    setAnswer_B(value);
    localStorage.setItem("AnswerMicro3_B", value);
  };
  const onChange_C = (value) => {
    const msg = value === "Cérebro" ? "Correto" : "Incorreto";
    setValidationAndStore("validationMicro3Message_C", msg);
    setAnswer_C(value);
    localStorage.setItem("AnswerMicro3_C", value);
  };

  useEffect(() => {
    if (validationMessage_A === "Correto" && validationMessage_B === "Correto" && validationMessage_C === "Correto") {
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }
  }, [validationMessage_A, validationMessage_B, validationMessage_C]);

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
          src={micro_background}
          alt="Office Background"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "25%",
            left: "5%",
            width: "55vw",
            zIndex: 1,
          }}
        >
          <img src={micro} style={{ width: "100%" }} alt="micro"></img>
        </div>
        {showLaminas && (
          <>
            <div
              onClick={() => setShowImage1(true)}
              onMouseEnter={() => setHoveredLamina1(true)}
              onMouseLeave={() => setHoveredLamina1(false)}
              style={{
                cursor: "pointer",
                width: "30%",
                padding: "20px",
                position: "absolute",
                top: "25%",
                left: "50%",
                backgroundColor: "#808080",
                textAlign: "center",
                borderRadius: "25px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                fontFamily: '"Arial", sans-serif',
                transition: "transform 0.3s ease",
                transform: hoveredLamina1 ? "scale(1.1)" : "scale(1)",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "white",
                }}
              >
                LÂMINA 1:
              </div>
              <div style={{ color: "white" }}>ÓRGÃO 1</div>
            </div>
            <div
              onClick={() => setShowImage2(true)}
              onMouseEnter={() => setHoveredLamina2(true)}
              onMouseLeave={() => setHoveredLamina2(false)}
              style={{
                cursor: "pointer",
                width: "30%",
                padding: "20px",
                position: "absolute",
                top: "45%",
                left: "50%",
                backgroundColor: "#808080",
                textAlign: "center",
                borderRadius: "25px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                fontFamily: '"Arial", sans-serif',
                transition: "transform 0.3s ease",
                transform: hoveredLamina2 ? "scale(1.1)" : "scale(1)",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "white",
                }}
              >
                LÂMINA 2:
              </div>
              <div style={{ color: "white" }}>ÓRGÃO 2</div>
            </div>
            <div
              onClick={() => setShowImage3(true)}
              onMouseEnter={() => setHoveredLamina3(true)}
              onMouseLeave={() => setHoveredLamina3(false)}
              style={{
                cursor: "pointer",
                width: "30%",
                padding: "20px",
                position: "absolute",
                top: "65%",
                left: "50%",
                backgroundColor: "#808080",
                textAlign: "center",
                borderRadius: "25px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                fontFamily: '"Arial", sans-serif',
                transition: "transform 0.3s ease",
                transform: hoveredLamina3 ? "scale(1.1)" : "scale(1)",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "white",
                }}
              >
                LÂMINA 3:
              </div>
              <div style={{ color: "white" }}>ÓRGÃO 3</div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "80%",
                left: "30%",
                width: "70vw",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 6,
                alignItems: "end",
              }}
            >
              <div
                style={{
                  width: "80%",
                  marginRight: "8%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 20,
                }}
              >
                <Button
                  onClick={() => setShowQuestion(true)}
                  style={{ width: "30%", minHeight: 40 }}
                >
                  VERIFICAÇÃO FINAL
                </Button>
                <Button
                  onClick={() => setShowMicroScreen(false)}
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
        textConfirm="Ir para o Laboratório"
        message="VERIFICAÇÃO ÓRGÃOS"
        onConfirm={() => handleMicro3Finish()}
        show={showQuestion}
        onCancel={() => setShowQuestion(false)}
        correctAnswer={correctAnswer}
        noExam
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
            <p>A) Órgão 1</p>
            <Select
              value={answer_A}
              style={{ minWidth: "30%" }}
              onChange={onChange_A}
              placeholder="Selecione"
            >
              {options.map((option) => (
                <Option key={option.name} value={option.name}>
                  {option.name}
                </Option>
              ))}
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
            <p>B) Órgão 2</p>
            <Select
              value={answer_B}
              style={{ minWidth: "30%" }}
              onChange={onChange_B}
              placeholder="Selecione"
            >
              {options.map((option) => (
                <Option key={option.name} value={option.name}>
                  {option.name}
                </Option>
              ))}
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
            <p>C) Órgão 3</p>
            <Select
              value={answer_C}
              style={{ minWidth: "30%" }}
              onChange={onChange_C}
              placeholder="Selecione"
            >
              {options.map((option) => (
                <Option key={option.name} value={option.name}>
                  {option.name}
                </Option>
              ))}
            </Select>
            <p
              style={{
                color: validationMessage_C === "Correto" ? "green" : "red",
              }}
            >
              {validationMessage_C}
            </p>
          </div>
        </div>
      </ModalQuestion>
      <ModalButtons
        textCancel=""
        textConfirm="Próximo"
        message="OH NÃO! Amostras de órgãos do corpo de Mark foram coletadas, 
        porém, não foram corretamente identificadas por outro biólogo aqui do laboratório, 
        isso é uma grave falha técnica! Precisamos obervar a organização histológica descrita 
        no exame anatomopatológico fornecido e comparar com as lâminas que fizemos para 
        identificarmos a qual órgão de Mark cada lâmina pertence. "
        
        onConfirm={() => {
          setShowFirstDialog(false);
          setShowSecondDialog(true);
        }}
        onCancel={()=>{
          setShowMicroScreen(false)
        }}
        closable
        show={showFirstDialog}
      />
      <ModalButtons
        textCancel="Voltar"
        textConfirm="Próximo"
        message="Antes, precisamos saber que o coração é um órgão formado, principalmente, 
        por tecido muscular estriado cardíaco, o qual se caracteriza por apresentar células 
        musculares. O fígado é um órgão formado por células epitelias globosas organizadas em 
        fileiras (cordões). Já o cérebro, é um órgão que compõe o sistema nervoso central, apresentando 
        tecido nervoso com células neuronais capazes de conduzir os impulsos nervosos."
        onBack={() => {
          setShowFirstDialog(true);
          setShowSecondDialog(false);
        }}
        onConfirm={() => {
          setShowSecondDialog(false);
          setShowLaminas(true);
        }}
        onCancel={()=>{
          setShowMicroScreen(false)
        }}
        closable
        show={showSecondDialog}
      />
      <ImageModal
        isVisible={showImage1}
        onClose={() => setShowImage1(false)}
        imageSrc={image1}
      />
      <ImageModal
        isVisible={showImage2}
        onClose={() => setShowImage2(false)}
        imageSrc={image2}
      />
      <ImageModal
        isVisible={showImage3}
        onClose={() => setShowImage3(false)}
        imageSrc={image3}
      />
    </>
  );
};

export default MicroScreen_3;

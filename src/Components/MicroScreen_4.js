import micro_background from "../assets/micro_background.png";
import micro from "../assets/micro.svg";
import image1 from "../assets/image1_micro4.svg";
import image2 from "../assets/image2_micro4.svg";
import image3 from "../assets/image3_micro4.svg";
import ModalButtons from "./ModalButtons";
import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import { Button, Select } from "antd";
import ModalQuestion from "./ModalQuestion";
import { Option } from "antd/es/mentions";

const MicroScreen_4 = ({setShowMicroScreen, handleMicro4Finish}) => {
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
    localStorage.getItem("validationMicro4Message_A") || null
  );
  const [validationMessage_B, setValidationMessage_B] = useState(
    localStorage.getItem("validationMicro4Message_B") || null
  );
  const [validationMessage_C, setValidationMessage_C] = useState(
    localStorage.getItem("validationMicro4Message_C") || null
  );
  const [answer_A, setAnswer_A] = useState(
    localStorage.getItem("AnswerMicro4_A") || null
  );
  const [answer_B, setAnswer_B] = useState(
    localStorage.getItem("AnswerMicro4_B") || null
  );
  const [answer_C, setAnswer_C] = useState(
    localStorage.getItem("AnswerMicro4_C") || null
  );
  const [correctAnswer, setCorrectAnswer] = useState(false);

  const options = [
    { name: "Animal (Cavalo)" },
    { name: "Humano" },
    { name: "Animal (Gato)" },

  ];

  const setValidationAndStore = (key, value) => {
    localStorage.setItem(key, value);
    switch (key) {
      case "validationMicro4Message_A":
        setValidationMessage_A(value);
        break;
      case "validationMicro4Message_B":
        setValidationMessage_B(value);
        break;
        case "validationMicro4Message_C":
        setValidationMessage_C(value);
        break;
      default:
        break;
    }
  };

  const onChange_A = (value) => {
    const msg = value === "Humano" ? "Correto" : "Incorreto";
    setValidationAndStore("validationMicro4Message_A", msg);
    setAnswer_A(value);
    localStorage.setItem("AnswerMicro4_A", value);
  };

  const onChange_B = (value) => {
    const msg = value === "Animal (Gato)" ? "Correto" : "Incorreto";
    setValidationAndStore("validationMicro4Message_B", msg);
    setAnswer_B(value);
    localStorage.setItem("AnswerMicro4_B", value);
  };
  const onChange_C = (value) => {
    const msg = value === "Animal (Cavalo)" ? "Correto" : "Incorreto";
    setValidationAndStore("validationMicro4Message_C", msg);
    setAnswer_C(value);
    localStorage.setItem("AnswerMicro4_C", value);
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
              <div style={{ color: "white" }}>Fio encontrado no moletom da vítima</div>
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
              <div style={{ color: "white" }}>Fio encontrado na varanda do chalé</div>
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
              <div style={{ color: "white" }}>Fio encontrado na calça da vítima</div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "85%",
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
                  className="btnConfirmLab"
                >
                  VERIFICAÇÃO FINAL
                </Button>
                <Button
                  onClick={() => setShowMicroScreen(false)}
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
      <ModalQuestion
        textConfirm="Ir para o Laboratório"
        message="VERIFICAÇÃO TRICOLOGIA"
        onConfirm={() => handleMicro4Finish()}
        show={showQuestion}
        onCancel={() => setShowQuestion(false)}
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
            <p>A) Moletom de Mark</p>
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
            <p>B) Poltrona</p>
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
            <p>C) Calça de Mark</p>
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
        message={<p>Durante a investigação, foram coletadas quatro amostras de pelos e cabelos em 
            locais estratégicos do cenário do crime. Primeiro, é preciso diferenciar se cada amostra 
            é proveniente de humanos ou outros animais e a qual animal refere-se. A técnica consiste no 
            exame microscópico da cor, da espessura e da curvatura dos fios para descobrirmos sua origem. </p>}
        onConfirm={() => {
          setShowFirstDialog(false);
          setShowSecondDialog(true);
        }}
        onCancel={()=>{
          setShowMicroScreen(false)
        }}
        show={showFirstDialog}
        closable
      />
      <ModalButtons
        textCancel="Voltar"
        textConfirm="Próximo"
        message={<p>Para isso, vamos analisar no microscópio óptico os fios encontrados no: 
            Moletom da vítima,      
            na varanda do chalé e
            na calça da vítima, após comparar com as imagens disponíveis em <a target="_blank" rel="noreferrer" href="http://www.microlabgallery.com/hair.aspx">http://www.microlabgallery.com/hair.aspx</a>.</p>}
        onBack={() => {
          setShowFirstDialog(true);
          setShowSecondDialog(false);
        }}
        onCancel={()=>{
          setShowMicroScreen(false)
        }}
        closable
        onConfirm={() => {
          setShowSecondDialog(false);
          setShowLaminas(true);
        }}
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

export default MicroScreen_4;

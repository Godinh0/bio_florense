import micro_background from "../assets/micro_background.png";
import micro from "../assets/micro.svg";
import image1 from "../assets/image1_micro2.svg";
import image2 from "../assets/image2_micro2.svg";
import ModalButtons from "./ModalButtons";
import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import { Button, Select } from "antd";
import ModalQuestion from "./ModalQuestion";
import { Option } from "antd/es/mentions";

const MicroScreen_2 = ({setShowMicroScreen, handleMicro2Finish}) => {
  const [showLaminas, setShowLaminas] = useState(false);
  const [showFirstDialog, setShowFirstDialog] = useState(true);
  const [showSecondDialog, setShowSecondDialog] = useState(false);
  const [hoveredLamina1, setHoveredLamina1] = useState(false);
  const [hoveredLamina2, setHoveredLamina2] = useState(false);
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [validationMessage_A, setValidationMessage_A] = useState(
    localStorage.getItem("validationMicro2Message_A") || null
  );
  const [validationMessage_B, setValidationMessage_B] = useState(
    localStorage.getItem("validationMicro2Message_B") || null
  );
  const [answer_A, setAnswer_A] = useState(
    localStorage.getItem("AnswerMicro2_A") || null
  );
  const [answer_B, setAnswer_B] = useState(
    localStorage.getItem("AnswerMicro2_B") || null
  );
  const [correctAnswer, setCorrectAnswer] = useState(false);

  const options = [
    { name: "Protozoário" },
    { name: "Bactéria" }
  ];

  const setValidationAndStore = (key, value) => {
    localStorage.setItem(key, value);
    switch (key) {
      case "validationMicro2Message_A":
        setValidationMessage_A(value);
        break;
      case "validationMicro2Message_B":
        setValidationMessage_B(value);
        break;
      default:
        break;
    }
  };

  const onChange_A = (value) => {
    const msg = value === "Protozoário" ? "Correto" : "Incorreto";
    setValidationAndStore("validationMicro2Message_A", msg);
    setAnswer_A(value);
    localStorage.setItem("AnswerMicro2_A", value);
  };

  const onChange_B = (value) => {
    const msg = value === "Bactéria" ? "Correto" : "Incorreto";
    setValidationAndStore("validationMicro2Message_B", msg);
    setAnswer_B(value);
    localStorage.setItem("AnswerMicro2_B", value);
  };

  useEffect(() => {
    if (validationMessage_A === "Correto" && validationMessage_B === "Correto") {
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }
  }, [validationMessage_A, validationMessage_B]);


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
                top: "30%",
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
              <div style={{ color: "white" }}>AMOSTRA DO RIO MANSO</div>
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
                top: "50%",
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
              <div style={{ color: "white" }}>AMOSTRA DO POÇO ARTESIANO</div>
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
        message="VERIFICAÇÃO MICROBIOLOGIA"
        onConfirm={() => handleMicro2Finish()}
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
            <p>A) RIO MANSO</p>
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
            <p>B) POÇO ARTESIANO</p>
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
        </div>
      </ModalQuestion>
      <ModalButtons
        textCancel=""
        textConfirm="Próximo"
        message={<p style={{textAlign:"justify"}}>Amostras de água foram coletadas no poço artesiano que abastecia o hotel e no 
        Rio Manso em que Mark foi nadar no primeiro dia de sua estada. Para analisarmos estas 
        duas amostras, precisamos saber que Bactérias são unicelulares e procariontes (sem núcleo) 
        e Protozoários são unicelulares e eucariontes (com núcleo).</p>}
        onConfirm={() => {
          setShowFirstDialog(false);
          setShowSecondDialog(true);
        }}
        show={showFirstDialog}
        onCancel={()=>{
          setShowMicroScreen(false)
        }}
        closable
      />
      <ModalButtons
        textCancel="Voltar"
        textConfirm="Próximo"
        message={<p style={{textAlign:"justify"}}>Vamos analisar no microscópio óptico a amostra de água do Rio Manso 
        e em microscópio eletrônico a amostra do poço artesiano. Em seguida, compare o que observou 
        com as informações presentes no laudo da análise 
        microbiológica da água para obtermos uma conclusão. </p>}
        onBack={() => {
          setShowFirstDialog(true);
          setShowSecondDialog(false);
        }}
        onCancel={()=>{
          setShowMicroScreen(false)
        }}
        onConfirm={() => {
          setShowSecondDialog(false);
          setShowLaminas(true);
        }}
        show={showSecondDialog}
        closable
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
    </>
  );
};

export default MicroScreen_2;

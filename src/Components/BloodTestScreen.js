import bloodTest_background from "../assets/bloodTest_background.png";
import cursor_image from "../assets/cursor_image.png";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import ModalButtons from "./ModalButtons";
import MarkRecord from "../assets/mark_record.svg";
import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import BloodTest from "./BloodTest";
import "../App.css";
import { Button, Select } from "antd";


const BloodTestScreen = ({ setShowBloodTestScreen, handleBloodTestFinish }) => {
  const [bloodType, setBloodType] = useState(
    localStorage.getItem("bloodType") || null
  );
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [showBloodTest, setShowBloodTest] = useState(false);
  const [showFirstDialog, setShowFirstDialog] = useState(true);
  const [showSecondDialog, setShowSecondDialog] = useState(false);
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [validationMessage, setValidationMessage] = useState(
    localStorage.getItem("validationBloodMessage") || null
  );
  const [circle1Clicked, setCircle1Clicked] = useState(localStorage.getItem("circle1Clicked") === "true");
  const [circle2Clicked, setCircle2Clicked] = useState(localStorage.getItem("circle2Clicked") === "true");
  const [circle3Clicked, setCircle3Clicked] = useState(localStorage.getItem("circle3Clicked") === "true");


  useEffect(() => {
    if (circle1Clicked && circle2Clicked && circle3Clicked) {
      setShowCustomCursor(false);
    }
    else
      setShowCustomCursor(true);
  }, [showBloodTest, circle1Clicked, circle2Clicked, circle3Clicked]);

  
  useEffect(() => {
    localStorage.setItem("validationBloodMessage",validationMessage)
  }, [validationMessage]);

  useEffect(() => {
    localStorage.setItem("circle1Clicked", circle1Clicked);
    localStorage.setItem("circle2Clicked", circle2Clicked);
    localStorage.setItem("circle3Clicked", circle3Clicked);
  }, [circle1Clicked, circle2Clicked, circle3Clicked]);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
          cursor: showCustomCursor
            ? `url(${cursor_image})0 80, pointer`
            : "default",
        }}
      >
        <img
          src={bloodTest_background}
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
            left: "25%",
            width: "55vw",
            zIndex: 1,
          }}
        >
          {showBloodTest && (
            <BloodTest
              bloodType={bloodType}
              setBloodType={setBloodType}
              validationMessage={validationMessage}
              circle1Clicked={circle1Clicked}
              circle2Clicked={circle2Clicked}
              circle3Clicked={circle3Clicked}
              setValidationMessage={setValidationMessage}
              setCircle1Clicked={setCircle1Clicked}
              setCircle2Clicked={setCircle2Clicked}
              setCircle3Clicked={setCircle3Clicked}
            />
          )}
        </div>
        {showBloodTest && (
          <div
            style={{
              position: "absolute",
              top: "85%",
              left: "17%",
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
                marginRight: "9%",
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
                disabled={validationMessage === "Correto" ? false : true}
              >
                VERIFICAÇÃO FINAL
              </Button>
              <Button
                onClick={() => setShowBloodTestScreen(false)}
                style={{ width: "30%", minHeight: 40 }}
                className="btnConfirmLab"
              >
                Ir para o Laboratório
              </Button>
            </div>
          </div>
        )}
      </div>
      <ModalButtons
        textCancel=""
        textConfirm="Ir para o Laboratório"
        message={
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <p>Sendo B-, podemos concluir que o sangue presente no caco de vidro é de Mark</p>
          <img style={{width:"160%"}} src={MarkRecord}></img>
          </div>
        }
        onConfirm={() => {
          setShowBloodTestScreen(false);
          handleBloodTestFinish()
        }}
        show={showQuestion}
        closable
        onCancel={() => {
          setShowQuestion(false);
        }}
      />
      <ModalButtons
        textCancel=""
        textConfirm="Próximo"
        message={
          <p style={{textAlign:"justify"}}>
            Os tipos sanguíneos servem para classificar o sangue de acordo com a 
            presença de duas proteínas no plasma, chamadas de aglutinogênio A e
            aglutinogênio B. Sendo assim, o sangue pode ser classificado nos tipos: A, B, AB e O, 
            conhecido como sistema ABO.
            <br />
            <br />O tipo sanguíneo também pode ser positivo ou negativo. Isso depende do fator Rh,
             que determina a presença ou a ausência de aglutinina nas hemácias. O sangue com Rh+ 
             possui aglutinina, enquanto que o Rh- não possui.
          </p>
        }
        onConfirm={() => {
          setShowFirstDialog(false);
          setShowSecondDialog(true);
        }}
        show={showFirstDialog}
        closable
        onCancel={() => {
          setShowBloodTestScreen(false);
        }}
      />
      <ModalButtons
        textCancel="Voltar"
        textConfirm="Próximo"
        message={
          <p style={{textAlign:"justify"}}>
            Se descobrimos qual é o tipo sanguíneo na amostra de sangue da faca (sangue humano), 
            podemos comparar com o tipo sanguíneo dos suspeitos. Você encontrará essa informação 
            nas fichas dos envolvidos. Para isso, aplique  os reagentes dos antígenos na amostra. 
            É necessário colocar três gotas do sangue em uma lâmina e, sobre o ele, os soros: uma 
            gota do soro anti- A, uma do soro anti-B e outra do soro que determina o fator Rh.

            <br />
            <br />
            Se o sangue coagular nas três gotas a pessoa tem o tipo sanguíneo AB e fator RH positivo. 
            Se o sangue não coagular em nenhuma das três gotas dizemos que a pessoa é do tipo O e fator 
            RH negativo.
          </p>
        }
        onBack={() => {
          setShowFirstDialog(true);
          setShowSecondDialog(false);
        }}
        onCancel={() => {
          setShowBloodTestScreen(false);
        }}
        onConfirm={() => {
          setShowSecondDialog(false);
          setShowBloodTest(true);
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

export default BloodTestScreen;

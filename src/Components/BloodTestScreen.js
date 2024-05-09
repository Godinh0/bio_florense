import bloodTest_background from "../assets/bloodTest_background.png";
import micro from "../assets/micro.svg";
import cursor_image from "../assets/cursor_image.png";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import ModalButtons from "./ModalButtons";
import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import BloodTest from "./BloodTest";
import "../App.css";
import { Button } from "antd";

const BloodTestScreen = ({ setShowBloodTestScreen }) => {
  const [bloodType, setBloodType] = useState(
    localStorage.getItem("bloodType") || null
  );
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [showBloodTest, setShowBloodTest] = useState(false);
  const [showFirstDialog, setShowFirstDialog] = useState(true);
  const [showSecondDialog, setShowSecondDialog] = useState(false);
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [validationMessage, setValidationMessage] = useState(
    localStorage.getItem("validationBloodMessage") || null
  );
  const [circle1Clicked, setCircle1Clicked] = useState(false);
  const [circle2Clicked, setCircle2Clicked] = useState(false);
  const [circle3Clicked, setCircle3Clicked] = useState(false);

  useEffect(() => {
    if (circle1Clicked && circle2Clicked && circle3Clicked) {
      setShowCustomCursor(false);
    }
  }, [circle1Clicked, circle2Clicked, circle3Clicked]);

  useEffect(() => {
    setShowCustomCursor(showBloodTest);
  }, [showBloodTest]);
  useEffect(() => {
    localStorage.setItem("validationBloodMessage",validationMessage)
  }, [validationMessage]);

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
              top: "80%",
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
                marginRight: "8%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <Button
                onClick={() => setShowBloodTestScreen(false)}
                style={{ width: "30%", minHeight: 40 }}
                className="btnConfirmLab"
                disabled={validationMessage === "Correto" ? false : true}
              >
                Ir para o Laboratório
              </Button>
            </div>
          </div>
        )}
      </div>
      <ModalButtons
        textCancel=""
        textConfirm="Próximo"
        message={
          <p>
            Os tipos sanguíneos servem para classificar o sangue de acordo com a
            presença de duas proteínas no plasma, chamadas de aglutinogênio A ou
            aglutinogênio B. Sendo assim, o tecido sanguíneo foi classificado de
            acordo com os tipos: A, B, AB e O, conhecido como sistema ABO
            <br />
            <br />E sangue positivo ou negativo? Isso depende do fator Rh, que
            determina a presença ou a ausência de aglutinina nas hemácias. O
            sangue que tem Rh- não possui aglutinina, enquanto o Rh+ possui.
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
          <p>
            Para descobrirmos, iremos aplicar os reagentes dos antígenos na
            amostra de sangue da faca (sangue humano). É necessário colocar em
            uma lâmina três gotas do sangue e, sobre o ele, os soros: uma gota
            do soro anti- A, uma do soro anti-B e outra do soro que determina o
            fator Rh.
            <br />
            <br />
            Se o sangue coagular nas três gotas a pessoa tem o tipo sanguíneo AB
            e fator RH positivo. Se o sangue não coagular nas três gotas dizemos
            que a pessoa é do tipo O e fator RH negativo.
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

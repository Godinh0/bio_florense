import React, { useEffect, useState } from "react";
import lab_background from "../assets/lab_background.png";
import left_shelf from "../assets/left_shelf.svg";
import micro from "../assets/micro_label.svg";
import right_shelf from "../assets/right_shelf.svg";
import results from "../assets/results_label.svg";
import exame_anato from "../assets/exame_anato.jpg";
import exame_necro from "../assets/exame_necro.jpg";
import exame_sangue from "../assets/exame_sangue.jpg";
import laudo_agua from "../assets/laudo_agua.png";
import Menu from "./Menu";
import { Popover } from "antd";
import ImageModal from "./ImageModal";
import MicroScreen_1 from "./MicroScreen_1";
import MicroScreen_2 from "./MicroScreen_2";
import MicroScreen_3 from "./MicroScreen_3";
import BloodTestScreen from "./BloodTestScreen";
import MicroScreen_4 from "./MicroScreen_4";

const LabScreen = ({
  setDnaScreen,
  setIsOffice,
  microScreen,
  setCurrentStage,
  currentStage,
  setMicroScreen,
}) => {
  const [showLabScreen, setShowLabScreen] = useState(true);
  const [isBlinkingMicro, setIsBlinkingMicro] = useState(false);
  const [showMicroScreen1, setShowMicroScreen1] = useState(false);
  const [showMicroScreen2, setShowMicroScreen2] = useState(false);
  const [showMicroScreen3, setShowMicroScreen3] = useState(false);
  const [showMicroScreen4, setShowMicroScreen4] = useState(false);
  const [showBloodTest, setShowBloodTest] = useState(false);
  const [isHoveredLeftBoard, setIsHoveredLeftBoard] = useState(false);
  const [isHoveredMicro, setIsHoveredMicro] = useState(false);
  const [isHoveredRightBoard, setIsHoveredRightBoard] = useState(false);
  const [isHoveredResults, setIsHoveredResults] = useState(false);
  const [isExameNecroVisible, setIsExameNecroVisible] = useState(false);
  const [isExameSangueVisible, setIsExameSangueVisible] = useState(false);
  const [isLaudoAguaVisible, setIsLaudoAguaVisible] = useState(false);
  const [isExameAnatoVisible, setIsExameAnatoVisible] = useState(false);

  useEffect(() => {
    if (
      showMicroScreen1 === false &&
      showMicroScreen2 === false &&
      showMicroScreen3 === false &&
      showMicroScreen4 === false &&
      showBloodTest === false
    ) {
      setShowLabScreen(true);
    }
  }, [showMicroScreen1, showMicroScreen2, showMicroScreen3, showMicroScreen4, showBloodTest]);

  const handleFacaCacoClick = () => {
    setShowMicroScreen1(true);
    setShowLabScreen(false);
    setMicroScreen("");
  };
  const handleMicro1Finish = () => {
    setShowMicroScreen1(false);
    setShowLabScreen(true);
    if(currentStage<2){
      setCurrentStage(2)
      setIsBlinkingMicro(true)
    }
  }
  const handleMicro2Finish = () => {
    setShowMicroScreen2(false);
    setShowLabScreen(true);
    // if(currentStage<4){
    //   setCurrentStage(4)
    //   setIsBlinkingMicro(true)
    // }
  };
  const handleAmostraAguaClick = () => {
    setShowMicroScreen2(true);
    setShowLabScreen(false);
    setMicroScreen("");
  };
  const handleMicro3Finish = () => {
    setShowMicroScreen3(false);
    setShowLabScreen(true);
    // if(currentStage<4){
    //   setCurrentStage(4)
    //   setIsBlinkingMicro(true)
    // }
  };
  const handleAmostraOrgaoClick = () => {
    setShowMicroScreen3(true);
    setShowLabScreen(false);
    setMicroScreen("");
  };
  const handleMicro4Finish = () => {
    setShowMicroScreen4(false);
    setShowLabScreen(true);
    // if(currentStage<4){
    //   setCurrentStage(4)
    //   setIsBlinkingMicro(true)
    // }
  };
  const handleFiosClick = () => {
    setShowMicroScreen4(true);
    setShowLabScreen(false);
    setMicroScreen("");
  };
  const handleBloodTestClick = () => {
    setShowBloodTest(true);
    setShowLabScreen(false);
    setMicroScreen("");
  };
  const handleDNAClick = () => {
    setIsOffice(true);
    setDnaScreen(true);
  };
  const menuOptionsMicro = [
    {
      title: "Sangue presente na faca e caco de vidro",
      onClick: handleFacaCacoClick,
      disabled: currentStage < 1 ? true : false,
    },
    {
      title: "Tipagem sanguínea",
      onClick: handleBloodTestClick,
      disabled: currentStage < 1 ? true : false,

    },
    {
      title: "Tricologia dos fios encontrados",
      onClick: handleFiosClick,
      disabled: currentStage < 1 ? true : false,

    },
    {
      title: "DNA dos fios (análise no escritório)",
      onClick: handleDNAClick,
      disabled: currentStage < 1 ? true : false,

    },
    {
      title: "Análise microbiológica da água",
      onClick: handleAmostraAguaClick,
      disabled: currentStage < 1 ? true : false,

    },
    {
      title: "Histologia dos órgãos da vítima",
      onClick: handleAmostraOrgaoClick,
      disabled: currentStage < 1 ? true : false,

    },
  ];
  const menuOptionsResults = [
    {
      title: "Exame Necroscópico",
      onClick: () => setIsExameNecroVisible(true),
    },
    {
      title: "Exame de Sangue",
      onClick: () => setIsExameSangueVisible(true),
    },
    {
      title: "Análise microbiológica da Água",
      onClick: () => setIsLaudoAguaVisible(true),
    },
    {
      title: "Exame Anatomopatológico",
      onClick: () => setIsExameAnatoVisible(true),
    },
  ];

  const generatePopoverContent = (src, alt, isHovered,isBlinking ) => (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        transition: "transform 0.3s ease",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        animation: isBlinking ? "blink 0.6s infinite" : "none",
      }}
    />
  );

  return (
    <>
      {showLabScreen && (
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
            src={lab_background}
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
              top: "11%",
              left: "2%",
              width: "45vw",
              zIndex: 1,
            }}
          >
            <div>
              {generatePopoverContent(
                left_shelf,
                "Left Board",
                isHoveredLeftBoard
              )}
            </div>
          </div>
          {/* Similar wrapping for other images */}
          <div
            style={{
              position: "absolute",
              bottom: "25%",
              left: "30%",
              width: "20vw",
              zIndex: 1,
            }}
          >
            <Popover
              placement="right"
              content={<Menu options={menuOptionsMicro} />}
              trigger="hover"
            >
              <div
                onMouseEnter={() => {setIsHoveredMicro(true);setIsBlinkingMicro(false)}}
                onMouseLeave={() => setIsHoveredMicro(false)}
              >
                {generatePopoverContent(micro, "Micro", isHoveredMicro, isBlinkingMicro)}
              </div>
            </Popover>
          </div>
          <div
            style={{
              position: "absolute",
              top: "13%",
              right: "2%",
              width: "45vw",
              zIndex: 1,
            }}
          >
            <div>
              {generatePopoverContent(
                right_shelf,
                "Right Board",
                isHoveredRightBoard
              )}
            </div>
          </div>
          <Popover
            placement="right"
            content={<Menu options={menuOptionsResults} />}
            trigger="hover"
          >
            <div
              style={{
                position: "absolute",
                bottom: "170px",
                right: "20px",
                width: "15vw",
                zIndex: 1,
              }}
            >
              <div
                onMouseEnter={() => setIsHoveredResults(true)}
                onMouseLeave={() => setIsHoveredResults(false)}
              >
                {generatePopoverContent(results, "Witness", isHoveredResults)}
              </div>
            </div>
          </Popover>
          <ImageModal
            isVisible={isExameNecroVisible}
            onClose={() => setIsExameNecroVisible(false)}
            imageSrc={exame_necro}
            oversized
          />
          <ImageModal
            isVisible={isExameSangueVisible}
            onClose={() => setIsExameSangueVisible(false)}
            imageSrc={exame_sangue}
            oversized
          />
          <ImageModal
            isVisible={isLaudoAguaVisible}
            onClose={() => setIsLaudoAguaVisible(false)}
            imageSrc={laudo_agua}
            oversized
          />
          <ImageModal
            isVisible={isExameAnatoVisible}
            onClose={() => setIsExameAnatoVisible(false)}
            imageSrc={exame_anato}
            oversized
          />
        </div>
      )}
      {showMicroScreen1 && (
        <MicroScreen_1 setShowMicroScreen1={setShowMicroScreen1} handleMicro1Finish={handleMicro1Finish} />
      )}
      {showMicroScreen2 && <MicroScreen_2 handleMicro2Finish={handleMicro2Finish} setShowMicroScreen={setShowMicroScreen2} />}
      {showMicroScreen3 && <MicroScreen_3 handleMicro3Finish={handleMicro3Finish} setShowMicroScreen={setShowMicroScreen3} />}
      {showMicroScreen4 && <MicroScreen_4 handleMicro4Finish={handleMicro4Finish} setShowMicroScreen={setShowMicroScreen4} />}
      {showBloodTest && <BloodTestScreen setShowBloodTestScreen={setShowBloodTest}/>}
    </>
  );
};

export default LabScreen;

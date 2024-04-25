import React, { useEffect, useState } from "react";
import lab_background from "../assets/lab_background.png";
import left_shelf from "../assets/left_shelf.svg";
import micro from "../assets/micro.svg";
import right_shelf from "../assets/right_shelf.svg";
import results from "../assets/results.svg";
import witnessResume from "../assets/witness_resume.svg";
import OlegarioDepo from "../assets/olegario_depo.svg";
import GeremiasDepo from "../assets/geremias_depo.svg";
import AndreyDepo from "../assets/andrey_depo.svg";
import ChiaraDepo from "../assets/chiara_depo.svg";
import MarietaDepo from "../assets/marieta_depo.svg";
import map from "../assets/map.svg";
import Menu from "./Menu";
import { Popover } from "antd";
import ImageModal from "./ImageModal";
import MicroScreen_1 from "./MicroScreen_1";
import MicroScreen_2 from "./MicroScreen_2";
import MicroScreen_3 from "./MicroScreen_3";
import BloodTestScreen from "./BloodTestScreen";
import MicroScreen_4 from "./MicroScreen_4";

const LabScreen = ({microScreen, setMicroScreen}) => {
  const [showLabScreen, setShowLabScreen] = useState(true);
  const [showMicroScreen1, setShowMicroScreen1] = useState(false);
  const [showMicroScreen2, setShowMicroScreen2] = useState(false);
  const [showMicroScreen3, setShowMicroScreen3] = useState(false);
  const [showMicroScreen4, setShowMicroScreen4] = useState(false);
  const [showBloodTest, setShowBloodTest] = useState(false);
  const [isHoveredLeftBoard, setIsHoveredLeftBoard] = useState(false);
  const [isHoveredMicro, setIsHoveredMicro] = useState(false);
  const [isHoveredRightBoard, setIsHoveredRightBoard] = useState(false);
  const [isHoveredResults, setIsHoveredResults] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isWitnessResumeVisible, setIsWitnessResumeVisible] = useState(false);
  const [isAndreyDepoVisible, setIsAndreyDepoVisible] = useState(false);
  const [isOlegarioDepoVisible, setIsOlegarioDepoVisible] = useState(false);
  const [isGeremiasDepoVisible, setIsGeremiasDepoVisible] = useState(false);
  const [isChiaraDepoVisible, setIsChiaraDepoVisible] = useState(false);
  const [isMarietaDepoVisible, setIsMarietaDepoVisible] = useState(false);

  useEffect(() => {
    if(microScreen.length!==0){
        if(microScreen==="microScreen_1"){
          handleFacaCacoClick()}
        if(microScreen==="microScreen_2"){
          handleAmostraAguaClick()}
        if(microScreen==="microScreen_3"){
          handleAmostraOrgaoClick()}
        if(microScreen==="microScreen_4"){
          handleFiosClick()}
    }
  }, [microScreen]);

  const handleFacaCacoClick = () =>{
    setShowMicroScreen1(true);
    setShowLabScreen(false);
    setMicroScreen("");
  }
  const handleAmostraAguaClick = () =>{
    setShowMicroScreen2(true);
    setShowLabScreen(false);
    setMicroScreen("");
  }
  const handleAmostraOrgaoClick = () =>{
    setShowMicroScreen3(true);
    setShowLabScreen(false);
    setMicroScreen("");
  }
  const handleFiosClick = () =>{
    setShowMicroScreen4(true);
    setShowLabScreen(false);
    setMicroScreen("");
  }
  const handleBloodTestClick = () =>{
    setShowBloodTest(true);
    setShowLabScreen(false);
    setMicroScreen("");
  }
  const menuOptionsMicro = [
    {
        title: "Faca e Caco de Vidro",
        onClick: handleFacaCacoClick,
    },
    {
        title: "Fios de Cabelos e Pelos",
        onClick: handleFiosClick,
    },
    {
        title: "Amostra de água",
        onClick: handleAmostraAguaClick,
    },
    {
        title: "Amostra de orgãos",
        onClick: handleAmostraOrgaoClick,
    },
  ];
  const menuOptionsResults= [
    {
      title: "Exame Necroscópico",
      onClick: () => {},
    },
    {
        title: "Exame de Sangue",
        onClick: () => {},
    },
    {
        title: "DNA dos Cabelos",
        onClick: () => {},
    },
    {
        title: "Análise da Água",
        onClick: () => {},
    },
    {
        title: "Exame Anatomopatológico",
        onClick: () => {},
    },
  ];


  const generatePopoverContent = (src, alt, isHovered) => (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        transition: "transform 0.3s ease",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
    />
  );

  return (
    <>
    {showLabScreen &&
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
        <div style={{ position: "absolute", top: "10%", left: "2%", width: "45vw", zIndex: 1 }}>
            <div
              onMouseEnter={() => setIsHoveredLeftBoard(true)}
              onMouseLeave={() => setIsHoveredLeftBoard(false)}
              onClick={handleBloodTestClick}
            >
              {generatePopoverContent(left_shelf, "Left Board", isHoveredLeftBoard)}
            </div>
        </div>
        {/* Similar wrapping for other images */}
        <div style={{ position: "absolute", bottom: "30%", left: "25%", width: "25vw", zIndex: 1 }}>
          <Popover placement="right" content={<Menu options={menuOptionsMicro}/>} trigger="hover">
            <div
              onMouseEnter={() => setIsHoveredMicro(true)}
              onMouseLeave={() => setIsHoveredMicro(false)}
            >
              {generatePopoverContent(micro, "Micro", isHoveredMicro)}
            </div>
          </Popover>
        </div>
        <div style={{ position: "absolute", top: "12%", right: "2%", width: "45vw", zIndex: 1 }}>
            <div
              onMouseEnter={() => setIsHoveredRightBoard(true)}
              onMouseLeave={() => setIsHoveredRightBoard(false)}
            >
              {generatePopoverContent(right_shelf, "Right Board", isHoveredRightBoard)}
            </div>
        </div>
        <Popover placement="right" content={<Menu options={menuOptionsResults}/>} trigger="hover">
        <div style={{ position: "absolute", bottom: "170px", right: "20px", width: "15vw", zIndex: 1 }}>
            <div
              onMouseEnter={() => setIsHoveredResults(true)}
              onMouseLeave={() => setIsHoveredResults(false)}
            >
              {generatePopoverContent(results, "Witness", isHoveredResults)}
            </div>
        </div>
        </Popover>
        <ImageModal
          isVisible={isMapVisible}
          onClose={()=>setIsMapVisible(false)}
          imageSrc={map}
        />
        <ImageModal
          isVisible={isWitnessResumeVisible}
          onClose={()=>setIsWitnessResumeVisible(false)}
          imageSrc={witnessResume}
        />
        <ImageModal
          isVisible={isAndreyDepoVisible}
          onClose={()=>setIsAndreyDepoVisible(false)}
          imageSrc={AndreyDepo}
        />
        <ImageModal
          isVisible={isGeremiasDepoVisible}
          onClose={()=>setIsGeremiasDepoVisible(false)}
          imageSrc={GeremiasDepo}
        />
        <ImageModal
          isVisible={isOlegarioDepoVisible}
          onClose={()=>setIsOlegarioDepoVisible(false)}
          imageSrc={OlegarioDepo}
        />
        <ImageModal
          isVisible={isMarietaDepoVisible}
          onClose={()=>setIsMarietaDepoVisible(false)}
          imageSrc={MarietaDepo}
        />
        <ImageModal
          isVisible={isChiaraDepoVisible}
          onClose={()=>setIsChiaraDepoVisible(false)}
          imageSrc={ChiaraDepo}
        />
      </div>
    }
    {showMicroScreen1&&<MicroScreen_1/>}
    {showMicroScreen2&&<MicroScreen_2/>}
    {showMicroScreen3&&<MicroScreen_3/>}
    {showMicroScreen4&&<MicroScreen_4/>}
    {showBloodTest&&<BloodTestScreen/>}
   </>
  );
};

export default LabScreen;

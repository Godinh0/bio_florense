import React, { useState } from "react";
import office_background from "../assets/office_background.png";
import left_board from "../assets/left_board.svg";
import evidences from "../assets/evidences.svg";
import right_board from "../assets/right_board.svg";
import witness from "../assets/witness.svg";
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

const OfficeScreen = () => {
  const [isHoveredLeftBoard, setIsHoveredLeftBoard] = useState(false);
  const [isHoveredEvidences, setIsHoveredEvidences] = useState(false);
  const [isHoveredRightBoard, setIsHoveredRightBoard] = useState(false);
  const [isHoveredWitness, setIsHoveredWitness] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isWitnessResumeVisible, setIsWitnessResumeVisible] = useState(false);
  const [isAndreyDepoVisible, setIsAndreyDepoVisible] = useState(false);
  const [isOlegarioDepoVisible, setIsOlegarioDepoVisible] = useState(false);
  const [isGeremiasDepoVisible, setIsGeremiasDepoVisible] = useState(false);
  const [isChiaraDepoVisible, setIsChiaraDepoVisible] = useState(false);
  const [isMarietaDepoVisible, setIsMarietaDepoVisible] = useState(false);

  const menuOptionsLeftBoard = [
    {
      title: "Mapa",
      onClick: () => setIsMapVisible(true),
    },
    {
      title: "Testemunhas",
      onClick: () => setIsWitnessResumeVisible(true),
    },
  ];
  const menuOptionsEvidences = [
    {
      title: "Digitais",
      onClick: () => {},
    },
    {
        title: "Faca e Caco de Vidro",
        onClick: () => {},
    },
    {
        title: "Fios de Cabelos e Pelos",
        onClick: () => {},
    },
    {
        title: "Amostra de água",
        onClick: () => {},
    },
    {
        title: "Amostra de orgãos",
        onClick: () => {},
    },
  ];
  const menuOptionsRighBoard = [
    {
      title: "Olegário",
      onClick: () => setIsOlegarioDepoVisible(true),
    },
    {
        title: "Marieta",
        onClick: () => setIsMarietaDepoVisible(true),
    },
    {
        title: "Chiara",
        onClick: () => setIsChiaraDepoVisible(true),
    },
    {
        title: "Andrey",
        onClick: () => setIsAndreyDepoVisible(true),
    },
    {
        title: "Geremias",
        onClick: () => setIsGeremiasDepoVisible(true),
    },
  ];
  const menuOptionsWitness= [
    {
      title: "Olegário",
      onClick: () => {},
    },
    {
        title: "Marieta",
        onClick: () => {},
    },
    {
        title: "Chiara",
        onClick: () => {},
    },
    {
        title: "Andrey",
        onClick: () => {},
    },
    {
        title: "Geremias",
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
        transform: isHovered ? "scale(1.1)" : "scale(1)",
      }}
    />
  );

  return (
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
        src={office_background}
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
      <div style={{ position: "absolute", top: "50px", left: "30px", width: "30vw", zIndex: 1 }}>
        <Popover placement="right" content={<Menu options={menuOptionsLeftBoard} />} trigger="hover">
          <div
            onMouseEnter={() => setIsHoveredLeftBoard(true)}
            onMouseLeave={() => setIsHoveredLeftBoard(false)}
          >
            {generatePopoverContent(left_board, "Left Board", isHoveredLeftBoard)}
          </div>
        </Popover>
      </div>
      {/* Similar wrapping for other images */}
      <div style={{ position: "absolute", bottom: "40px", left: "30px", width: "25vw", zIndex: 1 }}>
        <Popover placement="right" content={<Menu options={menuOptionsEvidences}/>} trigger="hover">
          <div
            onMouseEnter={() => setIsHoveredEvidences(true)}
            onMouseLeave={() => setIsHoveredEvidences(false)}
          >
            {generatePopoverContent(evidences, "Evidences", isHoveredEvidences)}
          </div>
        </Popover>
      </div>
      <div style={{ position: "absolute", top: "50px", right: "150px", width: "20vw", zIndex: 1 }}>
        <Popover placement="left" content={<Menu options={menuOptionsRighBoard}/>} trigger="hover">
          <div
            onMouseEnter={() => setIsHoveredRightBoard(true)}
            onMouseLeave={() => setIsHoveredRightBoard(false)}
          >
            {generatePopoverContent(right_board, "Right Board", isHoveredRightBoard)}
          </div>
        </Popover>
      </div>
      <div style={{ position: "absolute", bottom: "170px", right: "20px", width: "15vw", zIndex: 1 }}>
        <Popover placement="left" content={<Menu options={menuOptionsWitness}/>} trigger="hover">
          <div
            onMouseEnter={() => setIsHoveredWitness(true)}
            onMouseLeave={() => setIsHoveredWitness(false)}
          >
            {generatePopoverContent(witness, "Witness", isHoveredWitness)}
          </div>
        </Popover>
      </div>
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
  );
};

export default OfficeScreen;

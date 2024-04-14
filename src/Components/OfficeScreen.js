import React, { useEffect, useState } from "react";
import office_background from "../assets/office_background.png";
import left_board from "../assets/left_board.svg";
import evidences from "../assets/evidences.svg";
import right_board from "../assets/right_board.svg";
import witness from "../assets/witness.svg";
import witnessResume from "../assets/witness_resume.svg";
import AndreyRecord from "../assets/andrey_record.svg";
import MarietaRecord from "../assets/marieta_record.svg";
import GregorioRecord from "../assets/gregorio_record.svg";
import ChiaraRecord from "../assets/chiara_record.svg";
import OlegarioRecord from "../assets/olegario_record.svg";
import MarkRecord from "../assets/mark_record.svg";
import GeremiasRecord from "../assets/geremias_record.svg";
import OlegarioDepo from "../assets/olegario_depo.svg";
import GeremiasDepo from "../assets/geremias_depo.svg";
import GregorioDepo from "../assets/gregorio_depo.svg";
import AndreyDepo from "../assets/andrey_depo.svg";
import ChiaraDepo from "../assets/chiara_depo.svg";
import MarietaDepo from "../assets/marieta_depo.svg";
import map from "../assets/map.svg";
import Menu from "./Menu";
import { Popover } from "antd";
import ImageModal from "./ImageModal";
import PrintsScreen from "./PrintsScreen";

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
  const [isGregorioDepoVisible, setIsGregorioDepoVisible] = useState(false);
  const [isAndreyRecordVisible, setIsAndreyRecordVisible] = useState(false);
  const [isOlegarioRecordVisible, setIsOlegarioRecordVisible] = useState(false);
  const [isGeremiasRecordVisible, setIsGeremiasRecordVisible] = useState(false);
  const [isChiaraRecordVisible, setIsChiaraRecordVisible] = useState(false);
  const [isMarietaRecordVisible, setIsMarietaRecordVisible] = useState(false);
  const [isGregorioRecordVisible, setIsGregorioRecordVisible] = useState(false);
  const [isMarkRecordVisible, setIsMarkRecordVisible] = useState(false);
  const [showOfficeScreen, setShowOfficeScreen] = useState(true);
  const [showPrintsScreen, setShowPrintsScreen] = useState(false);
  const [localStorageSet, setLocalStorageSet] = useState(false);

  const handlePrints = () => {
    setShowOfficeScreen(!showOfficeScreen);
    setShowPrintsScreen(!showPrintsScreen);
  };
  useEffect(() => {
    if (showPrintsScreen && !localStorageSet) {
      localStorage.setItem("firstTimePrints", "yes");
      setLocalStorageSet(true);
    }
  }, [showPrintsScreen]);

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
      onClick: handlePrints,
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
    {
      title: "Gregório",
      onClick: () => setIsGregorioDepoVisible(true),
    },
  ];
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
    <>
      {showOfficeScreen && (
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
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "5%",
                width: "30vw",
                zIndex: 1,
              }}
            >
              <Popover
                placement="right"
                content={<Menu options={menuOptionsLeftBoard} />}
                trigger="hover"
              >
                <div
                  onMouseEnter={() => setIsHoveredLeftBoard(true)}
                  onMouseLeave={() => setIsHoveredLeftBoard(false)}
                >
                  {generatePopoverContent(
                    left_board,
                    "Left Board",
                    isHoveredLeftBoard
                  )}
                </div>
              </Popover>
            </div>
            {/* Similar wrapping for other images */}
            <div
              style={{
                position: "absolute",
                bottom: "5%",
                left: "5%",
                width: "25vw",
                zIndex: 1,
              }}
            >
              <Popover
                placement="right"
                content={<Menu options={menuOptionsEvidences} />}
                trigger="hover"
              >
                <div
                  onMouseEnter={() => setIsHoveredEvidences(true)}
                  onMouseLeave={() => setIsHoveredEvidences(false)}
                >
                  {generatePopoverContent(
                    evidences,
                    "Evidences",
                    isHoveredEvidences
                  )}
                </div>
              </Popover>
            </div>
            <div
              style={{
                position: "absolute",
                top: "5%",
                right: "15%",
                width: "15vw",
                zIndex: 1,
              }}
            >
              <Popover
                placement="left"
                content={<Menu options={menuOptionsRighBoard} />}
                trigger="hover"
              >
                <div
                  onMouseEnter={() => setIsHoveredRightBoard(true)}
                  onMouseLeave={() => setIsHoveredRightBoard(false)}
                >
                  {generatePopoverContent(
                    right_board,
                    "Right Board",
                    isHoveredRightBoard
                  )}
                </div>
              </Popover>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "25%",
                right: "2%",
                width: "15vw",
                zIndex: 1,
              }}
            >
              <Popover
                placement="left"
                content={<Menu options={menuOptionsWitness} />}
                trigger="hover"
              >
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
              onClose={() => setIsMapVisible(false)}
              imageSrc={map}
            />
            <ImageModal
              isVisible={isWitnessResumeVisible}
              onClose={() => setIsWitnessResumeVisible(false)}
              imageSrc={witnessResume}
            />
            <ImageModal
              isVisible={isAndreyDepoVisible}
              onClose={() => setIsAndreyDepoVisible(false)}
              imageSrc={AndreyDepo}
            />
            <ImageModal
              isVisible={isGeremiasDepoVisible}
              onClose={() => setIsGeremiasDepoVisible(false)}
              imageSrc={GeremiasDepo}
            />
            <ImageModal
              isVisible={isOlegarioDepoVisible}
              onClose={() => setIsOlegarioDepoVisible(false)}
              imageSrc={OlegarioDepo}
            />
            <ImageModal
              isVisible={isMarietaDepoVisible}
              onClose={() => setIsMarietaDepoVisible(false)}
              imageSrc={MarietaDepo}
            />
            <ImageModal
              isVisible={isChiaraDepoVisible}
              onClose={() => setIsChiaraDepoVisible(false)}
              imageSrc={ChiaraDepo}
            />
            <ImageModal
              isVisible={isGregorioDepoVisible}
              onClose={() => setIsGregorioDepoVisible(false)}
              imageSrc={GregorioDepo}
            />
            <ImageModal
              isVisible={isOlegarioRecordVisible}
              onClose={() => setIsOlegarioRecordVisible(false)}
              imageSrc={OlegarioRecord}
            />
            <ImageModal
              isVisible={isChiaraRecordVisible}
              onClose={() => setIsChiaraRecordVisible(false)}
              imageSrc={ChiaraRecord}
            />
            <ImageModal
              isVisible={isGregorioRecordVisible}
              onClose={() => setIsGregorioRecordVisible(false)}
              imageSrc={GregorioRecord}
            />
             <ImageModal
              isVisible={isMarietaRecordVisible}
              onClose={() => setIsMarietaRecordVisible(false)}
              imageSrc={MarietaRecord}
            />
            <ImageModal
              isVisible={isAndreyRecordVisible}
              onClose={() => setIsAndreyRecordVisible(false)}
              imageSrc={AndreyRecord}
            />
            <ImageModal
              isVisible={isMarkRecordVisible}
              onClose={() => setIsMarkRecordVisible(false)}
              imageSrc={MarkRecord}
            />
            <ImageModal
              isVisible={isGeremiasRecordVisible}
              onClose={() => setIsGeremiasRecordVisible(false)}
              imageSrc={GeremiasRecord}
            />
          </div>
        </>
      )}
      {showPrintsScreen && <PrintsScreen handlePrints={handlePrints} />}
    </>
  );
};

export default OfficeScreen;

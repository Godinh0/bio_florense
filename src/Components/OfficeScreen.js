import React, { useEffect, useRef, useState } from "react";
import office_background from "../assets/office_background.png";
import left_board from "../assets/left_board.svg";
import evidences from "../assets/evidence_label.svg";
import right_board from "../assets/right_board.svg";
import witness from "../assets/witness_label.svg";
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
import MarietaDepo from "../assets/marieta_depo.png";
import FirstImage from "../assets/first_image.png";
import map from "../assets/map.svg";
import Menu from "./Menu";
import { Popover, Tour } from "antd";
import ImageModal from "./ImageModal";
import PrintsScreen from "./PrintsScreen";
import DNAScreen from "./DNAScreen";
import ModalButtons from "./ModalButtons";

const OfficeScreen = ({
  setDnaScreen,
  dnaScreen,
  currentStage,
  setCurrentStage,
  setIsOffice,
}) => {
  const [isHoveredLeftBoard, setIsHoveredLeftBoard] = useState(false);
  const [isHoveredEvidences, setIsHoveredEvidences] = useState(false);
  const [isBlinkingEvidences, setIsBlinkingEvidences] = useState(false);
  const [isBlinkingRightBoard, setIsBlinkingRightBoard] = useState(false);
  const [isBlinkingMap, setIsBlinkingMap] = useState(false);
  const [isBlinkingWitness, setIsBlinkingWitness] = useState(false);
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
  const [isFirstImageVisible, setIsFirstImageVisible] = useState(false);
  const [isFirstDialogVisible, setIsFirstDialogVisible] = useState(false);
  const [isSecondDialogVisible, setIsSecondDialogVisible] = useState(false);
  const [isThirdDialogVisible, setIsThirdDialogVisible] = useState(false);
  const [showOfficeScreen, setShowOfficeScreen] = useState(true);
  const [showPrintsScreen, setShowPrintsScreen] = useState(false);
  const [localStorageSet, setLocalStorageSet] = useState(false);
  const [firstTimeDepo, setFirstTimeDepo] = useState(
    localStorage.getItem("firstTimeDepo") !== "no"
  );

  const [open, setOpen] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const steps = [
    {
      title: "Mapa e Testemunhas",
      description: "Veja onde tudo aconteceu e quem são os envolvidos. Abra o Mapa e em seguida as Testemunhas",
      target: () => ref1.current,
      nextButtonProps: { children: 'Próximo' },
    },
    {
      title: "Depoimentos",
      description: "Acesse todos os depoimentos colhidos durante a investigação, e em seguida as Fichas das Testemunhas.",
      target: () => ref2.current,
      nextButtonProps: { children: 'Próximo' },
      prevButtonProps: { children: 'Anterior' },
    },
    {
      title: "Fichas dos Envolvidos",
      description: "Confira todas as fichas detalhadas das testemunhas e da vítima.",
      target: () => ref3.current,
      nextButtonProps: { children: 'Próximo' },
      prevButtonProps: { children: 'Anterior' },
    },
    {
      title: "Evidências",
      description: "Analise as evidências. Algumas serão analisadas no escritório de investigação criminal e outras no laboratório",
      target: () => ref4.current,
      nextButtonProps: { children: 'Finalizar' },
      prevButtonProps: { children: 'Anterior' },
    },
  ];
  

  useEffect(() => {
    const isFirstTime = localStorage.getItem("firstTimeOffice") === null;
    if (isFirstTime) {
      localStorage.setItem("firstTimeOffice", "no");
      setIsFirstDialogVisible(true);
    }
  }, []);

  const handlePrints = () => {
    setShowOfficeScreen(!showOfficeScreen);
    setShowPrintsScreen(!showPrintsScreen);
  };
  const handlePrintsFinish = () => {
    setShowOfficeScreen(!showOfficeScreen);
    setShowPrintsScreen(!showPrintsScreen);
    if (currentStage < 1) {
      setCurrentStage(1);
      setIsBlinkingEvidences(true);
    }
  };
  const handleDNA = () => {
    setShowOfficeScreen(!showOfficeScreen);
    setDnaScreen(!dnaScreen);
  };
  const handleDNAFinish = () => {
    setShowOfficeScreen(!showOfficeScreen);
    setDnaScreen(!dnaScreen);
    if (currentStage < 6) {
      setCurrentStage(6);
      setIsOffice(false);
    }
  };
  useEffect(() => {
    if (dnaScreen === true) {
      setShowOfficeScreen(!showOfficeScreen);
    }
  }, [dnaScreen]);

  const menuOptionsLeftBoard = [
    {
      title: "Mapa",
      onClick: () => {
        setIsMapVisible(true);
      },
    },
    {
      title: "Testemunhas",
      onClick: () => {
        setIsWitnessResumeVisible(true);
      },
    },
  ];
  const menuOptionsEvidences = [
    {
      title: "Digitais (análise no escritório)",
      onClick: handlePrints,
    },
    {
      title: "Faca e Caco de Vidro (análise no laboratório)",
      onClick: () => {
        setIsOffice(false);
      },
      disabled: currentStage < 1 ? true : false,
    },
    {
      title: "Fios de Cabelos e Pelos (análise no laboratório)",
      onClick: () => {
        setIsOffice(false);
      },
      disabled: currentStage < 4 ? true : false,
    },
    {
      title: "Amostra de água (análise no laboratório)",
      onClick: () => {
        setIsOffice(false);
      },
      disabled: currentStage < 7 ? true : false,
    },
    {
      title: "Amostra de orgãos (análise no laboratório)",
      onClick: () => {
        setIsOffice(false);
      },
      disabled: currentStage < 9 ? true : false,
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

  const generatePopoverContent = (src, alt, isHovered, isBlinking) => (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        transition: "transform 0.3s ease",
        transform: isHovered ? "scale(1.1)" : "scale(1)",
        animation: isBlinking ? "blink 0.6s infinite" : "none",
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
                top: "7%",
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
                  onMouseEnter={() => {
                    setIsHoveredLeftBoard(true);
                    setIsBlinkingMap(false);
                  }}
                  onMouseLeave={() => setIsHoveredLeftBoard(false)}
                  ref={ref1}
                >
                  {generatePopoverContent(
                    left_board,
                    "Left Board",
                    isHoveredLeftBoard,
                    isBlinkingMap
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
                width: "20vw",
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
                  onMouseLeave={() => {
                    setIsHoveredEvidences(false);
                    setIsBlinkingEvidences(false);
                  }}
                  ref={ref4}
                >
                  {generatePopoverContent(
                    evidences,
                    "Evidences",
                    isHoveredEvidences,
                    isBlinkingEvidences
                  )}
                </div>
              </Popover>
            </div>
            <div
              style={{
                position: "absolute",
                top: "7%",
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
                  onMouseEnter={() => {
                    setIsHoveredRightBoard(true);
                    setIsBlinkingRightBoard(false);
                  }}
                  onMouseLeave={() => setIsHoveredRightBoard(false)}
                  ref={ref2}
                >
                  {generatePopoverContent(
                    right_board,
                    "Right Board",
                    isHoveredRightBoard,
                    isBlinkingRightBoard
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
                  onMouseLeave={() => {
                    setIsHoveredWitness(false);
                    setIsBlinkingWitness(false);
                  }}
                  ref={ref3}
                >
                  {generatePopoverContent(
                    witness,
                    "Witness",
                    isHoveredWitness,
                    isBlinkingWitness
                  )}
                </div>
              </Popover>
            </div>
            <ImageModal
              isVisible={isMapVisible}
              onClose={() => {
                setIsMapVisible(false);
              }}
              imageSrc={map}
            />
            <ImageModal
              isVisible={isWitnessResumeVisible}
              onClose={() => {
                setIsWitnessResumeVisible(false);
              }}
              imageSrc={witnessResume}
            />
            <ImageModal
              isVisible={isAndreyDepoVisible}
              onClose={() => {
                setIsAndreyDepoVisible(false);
              }}
              imageSrc={AndreyDepo}
            />
            <ImageModal
              isVisible={isMarietaDepoVisible}
              onClose={() => {
                setIsMarietaDepoVisible(false);
              }}
              imageSrc={MarietaDepo}
            />
            <ImageModal
              isVisible={isGregorioDepoVisible}
              onClose={() => {
                setIsGregorioDepoVisible(false);
              }}
              imageSrc={GregorioDepo}
            />
            <ImageModal
              isVisible={isChiaraDepoVisible}
              onClose={() => {
                setIsChiaraDepoVisible(false);
              }}
              imageSrc={ChiaraDepo}
            />
            <ImageModal
              isVisible={isOlegarioDepoVisible}
              onClose={() => {
                setIsOlegarioDepoVisible(false);
              }}
              imageSrc={OlegarioDepo}
            />
            <ImageModal
              isVisible={isGeremiasDepoVisible}
              onClose={() => {
                setIsGeremiasDepoVisible(false);
              }}
              imageSrc={GeremiasDepo}
            />
            <ImageModal
              isVisible={isAndreyRecordVisible}
              onClose={() => {
                setIsAndreyRecordVisible(false);
              }}
              imageSrc={AndreyRecord}
            />

            <ImageModal
              isVisible={isMarietaRecordVisible}
              onClose={() => {
                setIsMarietaRecordVisible(false);
              }}
              imageSrc={MarietaRecord}
            />

            <ImageModal
              isVisible={isGregorioRecordVisible}
              onClose={() => {
                setIsGregorioRecordVisible(false);
              }}
              imageSrc={GregorioRecord}
            />

            <ImageModal
              isVisible={isChiaraRecordVisible}
              onClose={() => {
                setIsChiaraRecordVisible(false);
              }}
              imageSrc={ChiaraRecord}
            />

            <ImageModal
              isVisible={isOlegarioRecordVisible}
              onClose={() => {
                setIsOlegarioRecordVisible(false);
              }}
              imageSrc={OlegarioRecord}
            />

            <ImageModal
              isVisible={isMarkRecordVisible}
              onClose={() => {
                setIsMarkRecordVisible(false);
              }}
              imageSrc={MarkRecord}
            />

            <ImageModal
              isVisible={isGeremiasRecordVisible}
              onClose={() => {
                setIsGeremiasRecordVisible(false);
              }}
              imageSrc={GeremiasRecord}
            />
            <ImageModal
              isVisible={isFirstImageVisible}
              onClose={() => {
                setIsFirstImageVisible(false);
                setOpen(true);
              }}
              imageSrc={FirstImage}
            />
            <Tour
              open={open}
              onClose={() => {
                setOpen(false);
                setIsBlinkingMap(true);
              }}
              steps={steps}
              maskClosable = {false}
              closable={false}
            />
            <ModalButtons
              textConfirm="Próximo"
              message={
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>
                      Bem-vindo ao Laboratório Virtual de Investigação Criminal!
                      Você está prestes a entrar na pele de um perito forense,
                      utilizando seus conhecimentos em ciências da natureza para
                      desvendar os mistérios por trás de uma cena de crime. Sua
                      missão é analisar evidências, realizar experimentos e
                      seguir pistas para descobrir a verdade por trás da morte
                      da vítima. Prepare-se para uma jornada desafiadora e
                      repleta de descobertas neste intrigante mundo da
                      investigação criminal!
                    </p>
                  </div>
                </>
              }
              onConfirm={() => {
                setIsFirstDialogVisible(false);
                setIsSecondDialogVisible(true);
              }}
              show={isFirstDialogVisible}
            />
            <ModalButtons
              textCancel="Voltar"
              textConfirm="Próximo"
              message={
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>
                      Nessa jornada você precisará primeiramente, no escritório
                      de investigação criminal, abrir o mapa do local onde o
                      corpo da vítima foi encontrado e analisar as testemunhas e
                      seus depoimentos. Em sequência, poderá iniciar as análises
                      das evidências. Já estará disponível para visualização o
                      exame necroscrópico, contendo informações sobre o cadáver
                      de forma detalhada. Conforme as evidências forem sendo
                      analisadas por você, mais exames serão liberados para que
                      possa obter mais informações.
                    </p>
                  </div>
                </>
              }
              onBack={() => {
                setIsFirstDialogVisible(true);
                setIsSecondDialogVisible(false);
              }}
              onConfirm={() => {
                setIsSecondDialogVisible(false);
                setIsThirdDialogVisible(true);
              }}
              show={isSecondDialogVisible}
            />
            <ModalButtons
              textCancel="Voltar"
              textConfirm="Próximo"
              message={
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p>
                      Para prosseguirmos, vamos entender o que aconteceu e em
                      seguida, poderemos iniciar as investigações!
                    </p>
                  </div>
                </>
              }
              onBack={() => {
                setIsThirdDialogVisible(false);
                setIsSecondDialogVisible(true);
              }}
              onConfirm={() => {
                setIsThirdDialogVisible(false);
                setIsFirstImageVisible(true);
              }}
              show={isThirdDialogVisible}
            />
          </div>
        </>
      )}
      {showPrintsScreen && (
        <PrintsScreen
          handlePrints={handlePrints}
          handlePrintsFinish={handlePrintsFinish}
        />
      )}
      {dnaScreen && (
        <DNAScreen handleDNAFinish={handleDNAFinish} handleDNA={handleDNA} />
      )}
    </>
  );
};

export default OfficeScreen;

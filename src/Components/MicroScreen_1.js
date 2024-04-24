import micro_background from "../assets/micro_background.png";
import micro from "../assets/micro.svg";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import ModalButtons from "./ModalButtons";
import { useState } from "react";
import ImageModal from "./ImageModal";

const MicroScreen_1 = () => {
  const [showLaminas, setShowLaminas] = useState(false);
  const [showFirstDialog, setShowFirstDialog] = useState(true);
  const [showSecondDialog, setShowSecondDialog] = useState(false);
  const [hoveredLamina1, setHoveredLamina1] = useState(false);
  const [hoveredLamina2, setHoveredLamina2] = useState(false);
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);

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
        {showLaminas && <><div
        onClick={()=>setShowImage1(true)}
        onMouseEnter={() => setHoveredLamina1(true)}
        onMouseLeave={() => setHoveredLamina1(false)}
          style={{
            cursor:"pointer",
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
          <div style={{ fontWeight: "bold", marginBottom: "10px" ,color: "white"  }}>
            LÂMINA 1:
          </div>
          <div style={{ color: "white" }}>
            AMOSTRA DO SANGUE RETIRADO DA FACA
          </div>
        </div>
        <div
           onClick={()=>setShowImage2(true)}
           onMouseEnter={() => setHoveredLamina2(true)}
           onMouseLeave={() => setHoveredLamina2(false)}
           style={{
            cursor:"pointer",
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
          <div style={{ fontWeight: "bold", marginBottom: "10px", color: "white" }}>
            LÂMINA 2:
          </div>
          <div style={{ color: "white" }}>
            AMOSTRA DO SANGUE RETIRADO DO CACO DE VIDRO
          </div>
        </div></>}
      </div>
      <ModalButtons
        textCancel=""
        textConfirm="Próximo"
        message="Olá perito! 
        Temos que analisar se as amostras de sangue encontradas na faca e no caco de vidro são de origem humana. 
        Para isso, teremos que verificar no microscópio as 2 lâminas de sangue que preparamos (uma contendo a amostra retirada da faca e outra do caco de vidro). "
        onConfirm={() => {
          setShowFirstDialog(false);
          setShowSecondDialog(true);
        }}
        show={showFirstDialog}
      />
      <ModalButtons
        textCancel="Voltar"
        textConfirm="Próximo"
        message="Precisamos observar se as células sanguíneas (hemácias), apresentam núcleo (sangue de origem animal: peixes, aves, répteis e anfíbios) ou se as hemácias são anucleadas (sangue de origem humana), vamos lá!   "
        onCancel={() => {
          setShowFirstDialog(true);
          setShowSecondDialog(false);
        }}
        onConfirm={() => {
          setShowSecondDialog(false);
          setShowLaminas(true)
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
    </>
  );
};

export default MicroScreen_1;

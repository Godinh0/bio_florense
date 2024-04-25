import micro_background from "../assets/micro_background.png";
import micro from "../assets/micro.svg";
import image1 from "../assets/image1_micro4.svg";
import image2 from "../assets/image2_micro4.svg";
import image3 from "../assets/image3_micro4.svg";
import ModalButtons from "./ModalButtons";
import { useState } from "react";
import ImageModal from "./ImageModal";

const MicroScreen_4 = () => {
  const [showLaminas, setShowLaminas] = useState(false);
  const [showFirstDialog, setShowFirstDialog] = useState(true);
  const [showSecondDialog, setShowSecondDialog] = useState(false);
  const [hoveredLamina1, setHoveredLamina1] = useState(false);
  const [hoveredLamina2, setHoveredLamina2] = useState(false);
  const [hoveredLamina3, setHoveredLamina3] = useState(false);
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);

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
                top: "70%",
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
          </>
        )}
      </div>
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
        show={showFirstDialog}
      />
      <ModalButtons
        textCancel="Voltar"
        textConfirm="Próximo"
        message={<p>Para isso, vamos analisar no microscópio óptico os fios encontrados no: 
            Moletom da vítima,      
            na varanda do chalé e
            na calça da vítima, após comparar com as imagens disponíveis em <a target="_blank" href="http://www.microlabgallery.com/hair.aspx">http://www.microlabgallery.com/hair.aspx</a>.</p>}
        onCancel={() => {
          setShowFirstDialog(true);
          setShowSecondDialog(false);
        }}
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

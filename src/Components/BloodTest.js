import React, { useState } from "react";
import "./App.css";
import circle1 from "../assets/circle1.png";
import circle2 from "../assets/circle2.png";
import circle3 from "../assets/circle3.png";

const BloodTest = () => {
  const [bloodType, setBloodType] = useState("");
  const [circle1Img, setCircle1Img] = useState(false);
  const [circle2Img, setCircle2Img] = useState(false);
  const [circle3Img, setCircle3Img] = useState(false);
  const [validationMessage, setValidationMessage] = useState(null);

  const uploadImage = (event) => {
    console.log("Circle clicked", event.target.id);

    const circleId = event.target.id;

    if (circleId == "circle1") setCircle1Img(true);
    if (circleId == "circle2") setCircle2Img(true);
    if (circleId == "circle3") setCircle3Img(true);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toUpperCase();
    setBloodType(inputValue);

    if (inputValue === "A+") {
      setValidationMessage("Correto");
    } else {
      setValidationMessage("Incorreto");
    }
  };
  return (
    <>
      <div className="container">
        <div className="column">
          <div
            className="circle circle1"
            onClick={(e) => uploadImage(e)}
            id="circle1"
          >
            {circle1Img && <img src={circle1} className="img"></img>}
          </div>
          <p className="title">Anti-A</p>
        </div>
        <div className="column">
          <div
            className="circle circle2"
            onClick={(e) => uploadImage(e)}
            id="circle2"
          >
            {circle2Img && <img src={circle2} className="img"></img>}
          </div>
          <p className="title">Anti-B</p>
        </div>
        <div className="column">
          <div
            className="circle circle3"
            onClick={(e) => uploadImage(e)}
            id="circle3"
          >
            {circle3Img && <img src={circle3} className="img"></img>}
          </div>
          <p className="title">Anti-Rh</p>
        </div>
      </div>
      <div
        style={{
          marginTop: 10,
          marginLeft: 0,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p className="title">Tipo Sanguineo</p>
        <input
          value={bloodType}
          onChange={handleInputChange}
          autoCapitalize=""
          title="Tipo Sanguineo"
        />
        {bloodType && (
          <p
            style={{ color: validationMessage === "Correto" ? "green" : "red" }}
          >
            {validationMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default BloodTest;

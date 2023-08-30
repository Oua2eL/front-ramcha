import React from "react";
import "./SectionTwo.css";

const SectionTwo = () => {
  return (
    <div className="slider">
      <div className="slider-track">
        <div className="slide">
          <img src="./Frame1.png"></img>
        </div>
        <div className="slide">
          <img src="./Frame2.png"></img>
        </div>
        <div className="slide">
          <img src="./Frame3.png"></img>
        </div>
        <div className="slide">
          <img src="./Frame4.png"></img>
        </div>
        <div className="slide">
          <img src="./Frame5.png"></img>
        </div>
        <div className="slide">
          <img src="./Frame6.png"></img>
        </div>
        <div className="slide">
          <img src="./Frame7.png"></img>
        </div>
        {[...Array(7)].map((_, index) => (
          <div className="slide" key={index}>
            <img src={`./Frame${(index % 7) + 1}.png`} alt={`Frame ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
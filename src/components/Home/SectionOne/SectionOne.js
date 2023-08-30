import React from "react";
import "./SectionOne.css";
import SectionTwo from "../SectionTwo/SectionTwo";
import SectionThree from "../SectionThree/SectionThree";
import SectionFour from "../SectionFour/SectionFour";

const SectionOne = () => {
  return (
    <section>
      <div className="Section-Container">
        <div className="left-section">
          <h1 className="intro-text">
            VOTRE SOLUTION FIABLE <br /> POUR CHAQUE TACHE
          </h1>
          <h2 className="download-text">TÉLÉCHARGEZ L'APPLICATION</h2>
          <div className="download">
            <a href="https://play.google.com/store/apps/details?id=your_app_package_name" target="_blank">
              <img
                className="btn-download"
                src="./android.png"
                alt="Download on Google Play"
              />
            </a>
            <a href="https://apps.apple.com/us/app/your-app-name/idyour_app_id"  target="_blank">
              <img
                className="btn-download"
                src="./Apple.png"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
        <div className="right-section">
          <img className="right-img" src="./PHONE.png" alt="" />
        </div>
      </div>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </section>
  );
};

export default SectionOne;

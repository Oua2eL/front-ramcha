import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PiNumberOneBold } from "react-icons/pi";
import { PiNumberTwoBold } from "react-icons/pi";
import { PiNumberThreeBold } from "react-icons/pi";
import { PiNumberFourBold } from "react-icons/pi";
import { PiNumberFiveBold } from "react-icons/pi";
import "./About.css";

const About = () => {
  return (
    <section>
      <div className="about-container">
        <div className="about-left">
          <h3 className="about-title">A propos</h3>
          <p>
            Ramcha est votre solution complète pour trouver une variété des
            services répondant à tous les aspects de votre vie. Ramcha est là
            pour simplifier votre vie et vous offrir la commodité d'une
            plateforme facile à utiliser Nous avons rassemblé un réseau de
            professionnels qualifiés pour combler tous vos besoins.
          </p>
        </div>
        <div className="about-right">
          <img  className="About-img" src="./About.png" alt="" />
        </div>
      </div>
      <div>
        <h3 className="about-title">AVANTAGES</h3>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              backgroundColor: "#232971",
              color: "#fff",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight:
                "7px solid linear-gradient(69deg, #8686C1 0%, #2B378B 100%)",
            }}
            iconStyle={{
              backgroundColor: "#232971",
              color: "#fff",
            }}
            icon={<PiNumberOneBold />}
          >
            <h1 className="vertical-timeline-element-title">Equitabilité</h1>
            <img className="timline-img" src="./ILLUST 1.png" alt="Image" width="200" height="200" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              backgroundColor: "#232971",
              color: "#fff",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight:
                "7px solid linear-gradient(69deg, #8686C1 0%, #2B378B 100%)",
            }}
            iconStyle={{
              backgroundColor: "#232971",
              color: "#fff",
            }}
            icon={<PiNumberTwoBold />}
          >
            <h1 className="vertical-timeline-element-title">
              Large variété des services
            </h1>
            <img className="timline-img" src="./ILLU 2.png" alt="Image" width="200" height="200" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              backgroundColor: "#232971",
              color: "#fff",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight:
                "7px solid linear-gradient(69deg, #8686C1 0%, #2B378B 100%)",
            }}
            iconStyle={{
              backgroundColor: "#232971",
              color: "#fff",
            }}
            icon={<PiNumberThreeBold />}
          >
            <h1 className="vertical-timeline-element-title">Rapidité</h1>
            <img className="timline-img" src="./ILLUS3.png" alt="Image" width="200" height="200" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              backgroundColor: "#232971",
              color: "#fff",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight:
                "7px solid linear-gradient(69deg, #8686C1 0%, #2B378B 100%)",
            }}
            iconStyle={{
              backgroundColor: "#232971",
              color: "#fff",
            }}
            icon={<PiNumberFourBold />}
          >
            <h1 className="vertical-timeline-element-title">
              Professionnels Qualifiés à votre disponibilité
            </h1>
            <img className="timline-img" src="./ILLUST 4.png" alt="Image" width="200" height="200" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              backgroundColor: "#232971",
              color: "#fff",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight:
                "7px solid linear-gradient(69deg, #8686C1 0%, #2B378B 100%)",
            }}
            iconStyle={{
              backgroundColor: "#232971",
              color: "#fff",
            }}
            icon={<PiNumberFiveBold />}
          >
            <h1 className="vertical-timeline-element-title">
              Interface accueillante et facile
            </h1>
            <img className="timline-img" src="./ILLU 5.png" alt="Image" width="200" height="200" />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default About;

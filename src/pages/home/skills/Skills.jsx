import React from "react";
import { Element } from "react-scroll";
import htmlLogo from "../../../assets/skills/html.png";
import cssLogo from "../../../assets/skills/css-3.png";
import tailwindLogo from "../../../assets/skills/tailwind.png";
import bootstrapLogo from "../../../assets/skills/Bootstrap.png";
import javascriptLogo from "../../../assets/skills/java-script.png";
import nodejsLogo from "../../../assets/skills/node-js.png";
import reactLogo from "../../../assets/skills/react.png";
import expressjsLogo from "../../../assets/skills/expressjs.png";
import mongodbLogo from "../../../assets/skills/mongodb.png";
import firebaseLogo from "../../../assets/skills/firebase.png";
import nextjsLogo from "../../../assets/skills/nextjs.png";
import jwtLogo from "../../../assets/skills/JSON-Web-Token.png";
import "./skills.css";

const Skills = () => {
  return (
    <Element className="my-container" name="skills">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="text-5xl tracking-wider font-bold  mb-16 text-center">
            My
            <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient ml-2">
              Skills
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="skill-box"
          >
            <img className="skill-icon" src={htmlLogo} alt="HTML" />
            <h2 className="skill-name">HTML</h2>
          </div>
          <div
            data-aos="zoom-in-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="skill-box"
          >
            <img className="skill-icon" src={cssLogo} alt="CSS" />
            <h2 className="skill-name">CSS</h2>
          </div>
          <div
            data-aos="flip-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="skill-box"
          >
            <img className="skill-icon" src={tailwindLogo} alt="Tailwind CSS" />
            <h2 className="skill-name">Tailwind CSS</h2>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="skill-box"
          >
            <img className="skill-icon" src={bootstrapLogo} alt="Bootstrap" />
            <h2 className="skill-name">Bootstrap</h2>
          </div>
          <div className="skill-box">
            <img className="skill-icon" src={javascriptLogo} alt="JavaScript" />
            <h2 className="skill-name">JavaScript</h2>
          </div>
          <div className="skill-box">
            <img className="skill-icon" src={nodejsLogo} alt="Node.js" />
            <h2 className="skill-name">Node.js</h2>
          </div>
          <div className="skill-box">
            <img className="skill-icon" src={reactLogo} alt="React" />
            <h2 className="skill-name">React</h2>
          </div>
          <div className="skill-box">
            <img className="skill-icon" src={expressjsLogo} alt="Express.js" />
            <h2 className="skill-name">Express.js</h2>
          </div>
          <div className="skill-box">
            <img className="skill-icon" src={mongodbLogo} alt="MongoDB" />
            <h2 className="skill-name">MongoDB</h2>
          </div>
          <div className="skill-box">
            <img className="skill-icon" src={firebaseLogo} alt="Firebase" />
            <h2 className="skill-name">Firebase</h2>
          </div>
          <div className="skill-box">
            <img className="skill-icon" src={nextjsLogo} alt="Next.js" />
            <h2 className="skill-name">Next.js</h2>
          </div>
          <div className="skill-box">
            <img className="skill-icon" src={jwtLogo} alt="JSON Web Token" />
            <h2 className="skill-name">JSON Web Token</h2>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;

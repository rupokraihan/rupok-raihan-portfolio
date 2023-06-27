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
  const skillsData = [
    { name: "HTML", icon: htmlLogo },
    { name: "CSS", icon: cssLogo },
    { name: "Tailwind CSS", icon: tailwindLogo },
    { name: "Bootstrap", icon: bootstrapLogo },
    { name: "JavaScript", icon: javascriptLogo },
    { name: "Node.js", icon: nodejsLogo },
    { name: "React", icon: reactLogo },
    { name: "Express.js", icon: expressjsLogo },
    { name: "MongoDB", icon: mongodbLogo },
    { name: "Firebase", icon: firebaseLogo },
    { name: "Next.js", icon: nextjsLogo },
    { name: "JSON Web Token", icon: jwtLogo },
  ];

  return (
    <Element className="my-container" name="skills">
      <div className="">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient mb-12">
          Skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillsData.map((skill) => (
            <div key={skill.name} className="skill-box">
              <img className="skill-icon" src={skill.icon} alt={skill.name} />
              <h2 className="skill-name">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skills;

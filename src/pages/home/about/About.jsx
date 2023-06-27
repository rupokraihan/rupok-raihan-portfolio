import React from "react";
import "./about.css"
import photo from "../../../assets/my-photo/photo (2).jpg"
import { Element } from "react-scroll";


const About = () => {
  return (
    <Element className="my-container" name="about">
      <div>
        <h1 className=" text-4xl font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient tracking-wider ">
          About Me
        </h1>
      </div>
      <div className="lg:grid grid-cols-3 gap-10">
        <div className="col-span-2 my-auto">
          <p className="text-xl tracking-wider text-justify">
            Hello, I'm Rupok Raihan, a front-end web developer. I have a strong
            passion for creating dynamic and user-friendly web applications.I
            enjoy learning new skills and exploring new challenges in the field
            of web development.My ultimate aim is to become an outstanding web
            developer who can create attractive user interfaces and smoothly
            handle the back-end operations. I am a diligent worker and have the
            ability to work well with others.
          </p>
          
        </div>
        <div className="">
          <img className="rounded-xl" src={photo} alt="" />
        </div>
      </div>
    </Element>
  );
};

export default About;

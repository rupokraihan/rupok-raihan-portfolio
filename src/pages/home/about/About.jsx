import React from "react";
import "./about.css"
import photo from "../../../assets/my-photo/photo (2).jpg"
import { Button, Element } from "react-scroll";
import { Link } from "react-router-dom";
import { ArrowLongRightIcon} from "@heroicons/react/24/solid";



const About = () => {
  return (
    <Element className="my-container mb-16" name="about">
      <div>
        <h1 className=" text-4xl text-center mb-12 font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient tracking-wider ">
          {"< Who Am I />"}
        </h1>
      </div>
      <div className="lg:grid grid-cols-3 gap-10">
        <div className="lg:hidden mb-12">
          <img className="rounded-xl w-full" src={photo} alt="" />
        </div>
        <div className="col-span-2 my-auto">
          <div>
            <h1 className="text-3xl tracking-wider font-bold    mb-4">
              About
              <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient ml-2">
                Me
              </span>
            </h1>
          </div>
          <p className="text-xl tracking-wider text-justify mb-8">
            Hello, I'm Rupok Raihan, a front-end web developer. I have a strong
            passion for creating dynamic and user-friendly web applications.I
            enjoy learning new skills and exploring new challenges in the field
            of web development.My ultimate aim is to become an outstanding web
            developer who can create attractive user interfaces and smoothly
            handle the back-end operations. I am a diligent worker and have the
            ability to work well with others.
          </p>
          <Link to={"about-me"}>
            <button className="more-about flex justify-center items-center">
              More About Me
              <ArrowLongRightIcon className="w-6 ml-1 mt-[4px]" />
            </button>
          </Link>
        </div>
        <div className="hidden sm:block">
          <img className="rounded-xl w-full" src={photo} alt="" />
        </div>
      </div>
    </Element>
  );
};

export default About;

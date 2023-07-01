import React from "react";
import "./banner.css";
import Lottie from "lottie-react";
import animation from "../../../assets/animation/animation.json";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "React Developer",
      "Frontend Web Developer",
      "MERN Stack Developer",
    ],
    loop: 0,
  });
  return (
    <div className="my-container lg:h-screen w-full lg:mt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <div className="text-2xl lg:text-4xl">
            <div className="font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient tracking-wider">
              Hello I'm
            </div>

            <div className="font-bold tracking-wider my-3">Rupok Raihan</div>

            <div>
              <span className="mr-4 font-bold tracking-wide text-gray-400">
                I'm a
              </span>
              <span className="font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient tracking-wider">
                {text}
              </span>
              <Cursor cursorColor="#9306F4" />
            </div>
          </div>
          <button className="resume-btn mt-8 flex justify-center items-center">
            <a href="Resume of Rupok Raihan.pdf" download>
              Download Resume
            </a>
            <ArrowDownTrayIcon className="w-6 ml-1 mt-[6px]" />
          </button>
        </div>
        <div className="">
          <Lottie
            className="w-full lg:w-[600px] h-[660px]"
            animationData={animation}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

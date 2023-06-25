import React from "react";
import "./banner.css";
import Lottie from "lottie-react";
import animation from "../../../assets/animation/animation.json";
import { useTypewriter, Cursor } from "react-simple-typewriter";

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
    <div className="my-container lg:h-screen w-full">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-4xl">
            <span className="font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient tracking-wider">
              Hello I'm
            </span>
            <br />
            <span className="font-bold tracking-wider">Rupok Raihan</span>
            <br />
            <span className="mr-4 font-bold tracking-wide text-gray-400">I'm a</span>
            <span className="font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient tracking-wider">
              {text}
            </span>

            <Cursor cursorColor="#9306F4" />
          </div>
          <button>see Resume</button>
        </div>
        <div className="">
          <Lottie
            className="w-[500px] h-[460px]"
            animationData={animation}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

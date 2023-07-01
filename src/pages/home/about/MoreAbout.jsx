import React from "react";
import "./about.css";
import CountUp from "react-countup";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Navbar from "../navbar/Navbar";

const MoreAbout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-6 my-container">
        <div>
          <h1 className="text-5xl tracking-wider font-bold   text-center mb-2 mt-10">
            About
            <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient ml-2">
              Me
            </span>
          </h1>

          <div className="flex justify-center mb-16 mt-10">
            <span className="tracking-wider text-2xl font-semibold rounded-lg bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient ml-2">
              Personal Infos
            </span>
          </div>
        </div>

        <div className="lg:grid grid-cols-5 gap-16">
          <div className="grid col-span-3 mb-6">
            <p className="lg:grid grid-cols-2 gap-32 mb-2 lg:mb-4">
              <h3 className="text-lg text-gray-300 mb-2">
                First Name:
                <span className="text-xl font-semibold text-white ml-2">
                  Rupok
                </span>
              </h3>
              <h3 className="text-lg text-gray-300">
                Last Name:
                <span className="text-xl font-semibold text-white ml-2">
                  Raihan
                </span>
              </h3>
            </p>
            <p className="lg:grid grid-cols-2 gap-32 mb-2 lg:mb-4">
              <h3 className="text-lg text-gray-300 mb-2">
                Age:
                <span className="text-xl font-semibold text-white ml-2">
                  23 Years
                </span>
              </h3>
              <h3 className="text-lg text-gray-300">
                Nationality:{" "}
                <span className="text-xl font-semibold text-white ml-2">
                  Bangladeshi
                </span>
              </h3>
            </p>
            <p className="lg:grid grid-cols-2 gap-32 mb-2 lg:mb-4">
              <h3 className="text-lg text-gray-300 mb-2">
                Phone:{" "}
                <span className="text-xl font-semibold text-white ml-2">
                  +880 1796350316
                </span>
              </h3>
              <h3 className="text-lg text-gray-300">
                Email:{" "}
                <span className="text-xl font-semibold text-white ml-2">
                  rupokraihan20@gmail.com
                </span>
              </h3>
            </p>
            <p className="lg:grid grid-cols-2 gap-32 mb-2 lg:mb-4">
              <h3 className="text-lg text-gray-300 mb-2">
                Address:{" "}
                <span className="text-xl font-semibold text-white ml-2">
                  Rajshahi, Bangladesh
                </span>
              </h3>
              <h3 className="text-lg text-gray-300">
                LinkedIn:
                <span className="text-xl font-semibold text-green-400 ml-2">
                  <a
                    href="https://www.linkedin.com/in/rupok-raihan-910b65234/"
                    target="_blank"
                  >
                    Rupok Raihan
                  </a>
                </span>
              </h3>
            </p>
            <p className="lg:grid grid-cols-2 gap-32 mb-2 lg:mb-4">
              <h3 className="text-lg text-gray-300 mb-2">
                Language:{" "}
                <span className="text-xl font-semibold text-white ml-2">
                  Bangla, English
                </span>
              </h3>
              <h3 className="text-lg text-gray-300">
                Github:
                <span className="text-xl font-semibold text-green-500 ml-2">
                  <a href="https://github.com/rupokraihan" target="_blank">
                    Rupok Raihan
                  </a>
                </span>
              </h3>
            </p>
          </div>
          <div className="lg:grid col-span-2">
            <div className="grid grid-cols-2 gap-8">
              <div className="w-full border-2 border-[#5b41ab] shadow-xl h-40 rounded-lg pt-4">
                <CountUp
                  className="text-2xl lg:text-6xl font-bold font-sans bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient ml-6 "
                  start={0}
                  end={40}
                  duration={5.5}
                  formattingFn={(value) => `${value}+`}
                  enableScrollSpy
                />
                <div className="flex gap-6 items-center mt-3">
                  <span className="bg-white border-2 ml-4 h-1 w-4" />
                  <p className="text-lg font-semibold text-gray-300">
                    COMPLETED <br /> PROJECTS
                  </p>
                </div>
              </div>
              <div className="w-full border-2 border-[#5b41ab] shadow-xl h-40 rounded-lg pt-4">
                <CountUp
                  className="text-2xl lg:text-6xl font-bold font-sans bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient ml-6 "
                  start={0}
                  end={200}
                  duration={5.5}
                  formattingFn={(value) => `${value}+`}
                  enableScrollSpy
                />
                <div className="flex gap-6 items-center mt-3">
                  <span className="bg-white border-2 ml-4 h-1 w-4" />
                  <p className="text-lg font-semibold text-gray-300">
                    PROBLEM <br /> SOLVED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="resume-view-btn mt-4 flex justify-center items-center">
          <a
            href="https://drive.google.com/file/d/1yJ1LH8ylBQG_tRNB64maRQCyl8SyETHI/view?usp=sharing"
            target="_blank"
          >
            View Resume
          </a>
          <ArrowLongRightIcon className="w-6 ml-1 mt-[4px]" />
        </button>
      </div>
    </div>
  );
};

export default MoreAbout;

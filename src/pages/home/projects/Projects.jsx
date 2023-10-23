import React, { useState } from "react";
import "./projects.css";
import { Element } from "react-scroll";
import craftedShots from "../../../assets/projects/crafted-shots.png";
import maxicanChef from "../../../assets/projects/mexican-chef.png";
import toyHaven from "../../../assets/projects/toy-haven.png";
import { Link } from "react-router-dom";
import { FaEye, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  return (
    <Element name="projects" className="my-container">
      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="mt-12"
      >
        <h1 className="text-5xl tracking-wider font-bold  text-center mb-16 mt-16">
          Recent
          <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient ml-2">
            Works
          </span>
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="lg:grid grid-cols-3 gap-8"
      >
        {/* 1 */}
        <div>
          <div
            className="project-box relative"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <div className="image-wrap">
              <img src={craftedShots} alt="Crafted Shots" />
              {isHovered1 ? (
                <div className="project-details text-overlay bg-slate-800">
                  <p className="mt-2 font-medium tracking-wider px-2">
                    <span className="font-bold text-fuchsia-300 text-lg mr-2">
                      Technologies:
                    </span>
                    ReactJs, React Router, JavaScript, Tailwind CSS, Node.js,
                    ExpressJs, MongoDB, Firebase, Stripe.js.
                  </p>

                  <div className="flex items-center justify-center gap-4 mt-4">
                    <a
                      className="project-live flex gap-2 items-center"
                      href="https://crafted-shots.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEye />
                      <span>Live Site</span>
                    </a>
                    <a
                      className="project-git flex gap-2 items-center"
                      href="https://github.com/rupokraihan/crafted-shots-client"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      <span> GITHUB</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-overlay bg-slate-600">
                  <h2 className="project-title">Crafted Shots</h2>
                  <p className="px-2 font-medium tracking-wider">
                    A MERN Stack photography school management website. Admin
                    functionality has been implemented.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 2 */}
        <div>
          <div
            className="project-box relative"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <div className="image-wrap">
              <img src={toyHaven} alt="" />
              {isHovered2 ? (
                <div className="project-details text-overlay bg-slate-800">
                  <p className="mt-2 font-medium tracking-wider px-2">
                    <span className="font-bold text-fuchsia-300 text-lg mr-2">
                      Technologies:
                    </span>
                    ReactJs, React Router, JavaScript, Tailwind CSS, Node.js,
                    ExpressJs, MongoDB, Firebase.
                  </p>

                  <div className="flex items-center justify-center gap-4 mt-4">
                    <a
                      className="project-live flex gap-2 items-center"
                      href="https://toy-haven-ville.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEye />
                      <span>Live Site</span>
                    </a>
                    <a
                      className="project-git flex gap-2 items-center"
                      href="https://github.com/rupokraihan/toy-haven-ville-client"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      <span> GITHUB</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-overlay bg-slate-600">
                  <h2 className="project-title">toyHaven Ville</h2>
                  <p className="px-2 font-medium tracking-wider">
                    A MERN stack online toy marketplace website that offers a
                    wide range of toys for children.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div
            className="project-box relative"
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
          >
            <div className="image-wrap">
              <img src={maxicanChef} alt="" />
              {isHovered3 ? (
                <div className="project-details text-overlay bg-slate-800">
                  <p className="mt-2 font-medium tracking-wider px-2">
                    <span className="font-bold text-fuchsia-300 text-lg mr-2">
                      Technologies:
                    </span>
                    ReactJs, React Router, JavaScript, Tailwind CSS, Firebase,
                    SwiperJS.
                  </p>

                  <div className="flex items-center justify-center gap-4 mt-4">
                    <a
                      className="project-live flex gap-2 items-center"
                      href="https://mexican-chef-recipe-hunter.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEye />
                      <span>Live Site</span>
                    </a>
                    <a
                      className="project-git flex gap-2 items-center"
                      href="https://github.com/rupokraihan/flavors-of-mexico-client"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      <span> GITHUB</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-overlay bg-slate-600">
                  <h2 className="project-title">Flavors of Mexico</h2>
                  <p className="px-2 font-medium tracking-wider">
                    A React based website dedicated to showcasing the best chefs
                    and their recipes from around the world.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;

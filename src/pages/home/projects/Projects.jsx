import React, { useEffect, useState } from "react";
import "./projects.css";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import craftedShots from "../../../assets/projects/crafted-shots.png";
import maxicanChef from "../../../assets/projects/mexican-chef.png";
import toyHaven from "../../../assets/projects/toy-haven.png";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import CraftedShots from "../../all projects/Crafted Shots/CraftedShots";
import ToyHavenVille from "../../all projects/toyHaven Ville/ToyHavenVille";
import FlavorsOfMexico from "../../all projects/Flavors of Mexico/FlavorsOfMexico";


Modal.setAppElement("#root");

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modalOpen]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  const renderSelectedComponent = () => {
    if (selectedProject === "crafted-shots") {
      return <CraftedShots />;
    } else if (selectedProject === "toyhaven-ville") {
      return <ToyHavenVille />;
    } else if (selectedProject === "flavors-of-mexico") {
      return <FlavorsOfMexico />;
    }
    return null;
  };

  return (
    <Element className="my-container" name="projects">
      <div>
        <h1>This is the projects section</h1>

        <div className="swiper-container">
          <Swiper

            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            modules={[Pagination, Autoplay]}
            className="pb-12"
            autoplay={{ delay: 2500 }}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <div
                className={`project-box${hoveredIndex === 0 ? " right" : ""}`}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${craftedShots})`,
                    backgroundPosition: hoveredIndex === 0 ? "bottom" : "top",
                    transition: "ease-in-out 6s",
                    backgroundSize: "100% auto",
                  }}
                ></div>
                <h2 className="project-title">Crafted Shots</h2>
                <div className="flex justify-between mt-6 mb-3">
                  <a
                    className="project-link"
                    href="https://crafted-shots.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                  <button
                    className="project-link"
                    onClick={() => handleViewDetails("crafted-shots")}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`project-box${hoveredIndex === 1 ? " right" : ""}`}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${toyHaven})`,
                    backgroundPosition: hoveredIndex === 1 ? "bottom" : "top",
                    transition: "ease-in-out 6s",
                    backgroundSize: "100% auto",
                  }}
                ></div>
                <h2 className="project-title">toyHaven Ville</h2>
                <div className="flex justify-between mt-6 mb-3">
                  <a
                    className="project-link"
                    href="https://toy-haven-ville.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                  <button
                    className="project-link"
                    onClick={() => handleViewDetails("toyhaven-ville")}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`project-box${hoveredIndex === 2 ? " right" : ""}`}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${maxicanChef})`,
                    backgroundPosition: hoveredIndex === 2 ? "bottom" : "top",
                    transition: "ease-in-out 6s",
                    backgroundSize: "100% auto",
                  }}
                ></div>
                <h2 className="project-title">Flavors of Mexico</h2>
                <div className="flex justify-between mt-6 mb-3">
                  <a
                    className="project-link"
                    href="https://mexican-chef-recipe-hunter.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                  <button
                    className="project-link"
                    onClick={() => handleViewDetails("flavors-of-mexico")}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="modal-content">
            <h2>Project Details</h2>
            <p>Project: {selectedProject}</p>
            {renderSelectedComponent()}
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </Modal>
      </div>
    </Element>
  );
};

export default Projects;

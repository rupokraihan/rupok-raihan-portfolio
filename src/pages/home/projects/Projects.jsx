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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modalOpen]);

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
        <h1 className="text-5xl tracking-wider font-bold  text-center mb-16 mt-16">
          Recent
          <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient ml-2">
            Works
          </span>
        </h1>
      </div>

      <div className="hidden sm:block">
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
              <div className="project-box">
                <div class="image-wrap">
                  <img src={craftedShots} />
                </div>
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
              <div className="project-box">
                <div class="image-wrap">
                  <img src={toyHaven} />
                </div>
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
              <div className="project-box">
                <div class="image-wrap">
                  <img src={maxicanChef} />
                </div>
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

      {/* for mobile device */}
      <div className="lg:hidden">
        <div>
          

          <div className="swiper-container">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              modules={[Pagination, Autoplay]}
              className="pb-12"
              autoplay={{ delay: 2500 }}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide className="px-4">
                <div className="project-box">
                  <div class="image-wrap">
                    <img src={craftedShots} />
                  </div>
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
              <SwiperSlide className="px-4">
                <div className="project-box">
                  <div class="image-wrap">
                    <img src={toyHaven} />
                  </div>
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
              <SwiperSlide className="px-4">
                <div className="project-box">
                  <div class="image-wrap">
                    <img src={maxicanChef} />
                  </div>
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
      </div>
    </Element>
  );
};

export default Projects;

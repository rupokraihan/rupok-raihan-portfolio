import React, { useState } from "react";
import "./navbar.css";
import logo from "../../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="my-container">
      <div>
        <div className="text-lg pt-2 pb-8 lg:pb-3  mx-auto  w-full">
          <div>
            <div className=" flex items-center justify-between lg:px-3 mx-auto">
              <div className="flex items-center gap-3 ">
                {/*Website logo */}
                <div>
                  <img
                    className="h-[45px] w-[50px] lg:h-[60px] lg:w-[70px]"
                    src={logo}
                    alt=""
                  />
                </div>

                <div>
                  <Link to="/" className="inline-flex items-center ">
                    <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient">
                      Rupok Raihan
                    </h2>
                  </Link>
                </div>
              </div>

              <ul className="items-center  text-ellipsis hidden space-x-5 lg:flex">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={800}
                    >
                      About
                    </Link>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <Link
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={800}
                    >
                      Skills
                    </Link>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    to={
                      "https://drive.google.com/file/d/1yJ1LH8ylBQG_tRNB64maRQCyl8SyETHI/view?usp=sharing"
                    }
                    target="_blank"
                  >
                    Resume
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={800}
                    >
                      Projects
                    </Link>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={800}
                    >
                      Contact
                    </Link>
                  </NavLink>
                </li>
              </ul>

              {/* Mobile Navbar Section */}
              <div className="lg:hidden">
                {/* Dropdown Open Button */}
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="text-amber-600 hover:text-amber-500 focus:outline-none"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <Bars3BottomRightIcon className="w-8" />
                </button>
                {isMenuOpen && (
                  <div className="absolute top-0 left-0 w-full">
                    <div className=" bg-gray-800 border rounded shadow-sm">
                      {/* Logo & Button section */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-2">
                          <Link to="/" className="inline-flex items-center">
                            <img
                              className="h-[72px] w-[140px] ml-2"
                              src={logo}
                              alt=""
                            />
                          </Link>
                          <h1 className="text-amber-400 font-bold text-3xl flex items-center">
                            Crafted Shots
                          </h1>
                        </div>
                        {/* Dropdown menu close button */}
                        <div>
                          <button
                            type="button"
                            className="text-amber-600 hover:text-amber-500 focus:outline-none"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <XMarkIcon className="w-8 mt-4 mr-3" />
                          </button>
                        </div>
                      </div>
                      {/* Mobile Nav Items Section */}
                      <nav>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/"
                              className="block
                             px-4 font-semibold  text-amber-400 hover:text-amber-500"
                            >
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="instructors"
                              className="block
                             px-4 font-semibold  text-amber-400 hover:text-amber-500"
                            >
                              Instructors
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/classes"
                              className="block
                             px-4 font-semibold  text-amber-400 hover:text-amber-500"
                            >
                              Classes
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

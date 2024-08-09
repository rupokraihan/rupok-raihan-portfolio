import React, { useRef } from "react";
import "./contact.css";
import { Element } from "react-scroll";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import github from "../../../assets/social/github.png";
import facebook from "../../../assets/social/facebook.png";
import linkedin from "../../../assets/social/linkedin.png";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g049rkw",
        "template_h2gw9qp",
        form.current,
        "pN-eGO-31UdBTBMvm"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops... Something went wrong!",
            text: "Please try again later.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <Element className="my-container" name="contact">
      <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
        <h1 className="text-5xl tracking-wider font-bold   text-center mb-2 mt-10">
          Contact
          <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient ml-2">
            Me
          </span>
        </h1>

        <div className="flex justify-center mb-16 ">
          <span className="tracking-wider text-2xl font-semibold rounded-lg bg-gradient-to-r from-sky-400 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient ml-2">
            Get In Touch
          </span>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="lg:grid grid-cols-5 gap-10"
      >
        <div className="col-span-2 my-auto">
          <div className="flex gap-3 items-center mb-8">
            <div className="rounded-full border-2 border-[#8a63ff] p-3">
              <FaPhoneAlt className="text-[#8a63ff] text-xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-wider text-gray-100">
                Phone
              </h3>
              <p className="text-xl font-semibold tracking-wide text-gray-300">
                (+880) 1796350316
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center mb-8">
            <div className="rounded-full border-2 border-[#8a63ff] p-3">
              <FiMail className="text-[#8a63ff] text-xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-wider text-gray-100">
                Email
              </h3>
              <p className="text-xl font-semibold tracking-wide text-gray-300">
                rupokraihan20@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center mb-8">
            <div className="rounded-full border-2 border-[#8a63ff] p-3">
              <FaLocationArrow className="text-[#8a63ff] text-xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-wider text-gray-100">
                Location
              </h3>
              <p className="text-xl font-semibold tracking-wide text-gray-300">
                Rajshahi, Bangladesh
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-6 mb-6">
            <div>
              <a href="https://github.com/rupokraihan" target="_blank">
                <img className="h-10 w-10" src={github} alt="" />
              </a>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/rupok-raihan-910b65234/"
                target="_blank"
              >
                <img className="h-10 w-10" src={linkedin} alt="" />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/rupokraihanrafat"
                target="_blank"
              >
                <img className="h-10 w-10" src={facebook} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-3 ">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="input bg-gray-900"
              placeholder="Your Name"
              required
            />
            <input
              type="text"
              name="user_email"
              className="input bg-gray-900"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="user_phone"
              className="input bg-gray-900"
              placeholder="Phone Number"
              required
            />

            <textarea
              type="text"
              name="message"
              className="input bg-gray-900"
              placeholder="Enter Your Message"
              required
              style={{ height: "150px" }}
            />

            <input
              type="submit"
              value="Send Message"
              class="input-button rounded-md"
            />
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;

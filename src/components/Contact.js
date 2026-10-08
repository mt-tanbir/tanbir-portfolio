import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";
import ContactData from "../data/contact";

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9inzcz7",
        "template_lg8ahdf",
        formRef.current,
        "_8hE7B_7PzOSTxPxm"
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Unable to send message!");
        }
      );
  };

  return (
    <section className="text-gray-600 body-font ">
      <div className="px-3 py-5 mx-auto text-center md:mt-7 sm:mx-7 md:mx-12 lg:mx-32 xl:mx-56">
        <div id="contact" className="flex flex-col text-center w-full mb-4">
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            Contact Me
          </h2>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-lg font-medium leading-relaxed text-dark-orange "
          >
            Let's keep in touch
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row w-full mx-auto rounded-xl bg-darkblue p-4 md:gap-7 lg:gap-9 lg:rounded-2xl xl:gap-10">
          <div className="flex flex-col justify-center p-2 w-full text-center lg:p-5 xl:p-7 md:w-1/2 lg:w-4/6">
            <h3
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="true"
              className="hidden md:block text-2xl lg:text-3xl text-dark-orange font-medium mb-3 lg:mb-4"
            >
              Get In Touch
            </h3>
            <div
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="true"
              className="flex gap-5 mb-4 justify-center md:mb-5"
            >
              <SocialHandles />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              className="flex gap-2 justify-center items-center mb-4"
            >
              <FaEnvelope className="text-white" />
              <a
                href={`mailto:${ContactData.email}`}
                className="text-white md:text-lg"
              >
                {ContactData.email}
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              className="flex gap-2 justify-center items-center mb-4"
            >
              <FaPhoneAlt className="text-white" />
              <a
                href={`tel:${ContactData.phone.replace(/[^+\d]/g, "")}`}
                className="text-white md:text-lg"
              >
                {ContactData.phone}
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              className="flex gap-2 justify-center items-center"
            >
              <FaMapMarkerAlt className="text-white" />
              <p className="leading-normal text-start text-white md:text-lg">
                {ContactData.address}
              </p>
            </div>
          </div>
          <form
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-once="true"
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex bg-whitesmoke flex-col p-2 rounded-lg md:w-1/2 md:p-4 lg:px-5 lg:py-7 lg:m-4 lg:w-3/5"
          >
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="true"
              className="p-2 w-full"
            >
              <label htmlFor="contact-name" className="sr-only">
                Your name
              </label>
              <input
                id="contact-name"
                required
                placeholder="Name"
                type="text"
                name="user_name"
                autoComplete="name"
                className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-dark-orange focus:bg-white focus:ring-2 focus:ring-orange-100 text-base outline-none text-black p-2 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="true"
              className="p-2 w-full"
            >
              <label htmlFor="contact-email" className="sr-only">
                Your email
              </label>
              <input
                id="contact-email"
                required
                placeholder="Email"
                type="email"
                name="user_email"
                autoComplete="email"
                className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-dark-orange focus:bg-white focus:ring-2 focus:ring-orange-100 text-base outline-none text-black p-2 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="true"
              className="p-2 w-full"
            >
              <label htmlFor="contact-message" className="sr-only">
                Your message
              </label>
              <textarea
                id="contact-message"
                required
                placeholder="Message"
                name="message"
                className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-dark-orange focus:bg-white focus:ring-2 focus:ring-orange-100 h-32 text-base outline-none text-black p-2 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="true"
              className="p-2 w-full"
            >
              <button type="submit" className="font-medium mx-auto my-3 text-white bg-dark-orange border-0 py-2 px-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-orange focus-visible:ring-offset-2 hover:scale-105 hover:bg-orange-600 transition duration-300 rounded-xl text-lg">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

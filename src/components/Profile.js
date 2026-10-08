import React from "react";
import { Typewriter } from "react-simple-typewriter";
import SocialHandles from "./SocialHandles";
import ProfileData from "../data/profile";
import Wave from "./Wave";
import Lottie from "lottie-react";
import ActionLinks from "./ActionLinks";
const Profile = () => {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const shouldAnimate = !prefersReducedMotion;

  return (
    <section
      id="home"
      className="text-gray-600 bg-darkblue body-font pt-16 lg:min-h-75vh"
    >
      <div className="p-5 mx-auto gap-2 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-32 lg:p-5 lg:w-1/3 xl:w-1/4"
        >
          <Lottie
            animationData={ProfileData.lottie}
            loop={shouldAnimate}
            autoplay={shouldAnimate}
            aria-hidden="true"
            className=""
            style={{ aspectRatio: "1/1" }}
          />
        </div>
        <div className="lg:flex-grow lg:pr-4 flex flex-col md:mb-0 items-center text-center xl:scale-105">
          <SocialHandles />
          <h1
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="true"
            className="title-font text-2xl md:text-3xl mb-4 text-center font-medium text-white"
          >
            Hello, I am{" "}
            <span className="text-dark-orange">{ProfileData.name}</span>
          </h1>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="true"
            className="min-h-[2rem] text-2xl sm:text-3xl text-white mb-4 font-medium lg:inline-block"
          >
            &nbsp;
            {shouldAnimate ? (
              <Typewriter
                words={ProfileData.professions}
                loop={false}
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            ) : (
              ProfileData.professions[0]
            )}
          </div>
          {ProfileData.info?.map((item, index) => (
            <p
              key={index}
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-once="true"
              className="mb-2 text-white text-lg md:text-xl leading-relaxed"
            >
              {item}
            </p>
          ))}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="true"
            className="mt-4"
          >
            <ActionLinks light />
          </div>
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default Profile;

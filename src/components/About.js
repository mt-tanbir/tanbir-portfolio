import React from "react";
import AboutData from "../data/about";
import ActionLinks from "./ActionLinks";

const About = () => {
  return (
    <section className="body-font">
      <div className="p-5 my-3 mx-auto md:my-5 md:mx-10 lg:mx-16">
        <div id="about" className="flex flex-col text-center w-full mb-12">
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            About Me
          </h2>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center"
          >
            WordPress and front-end development
          </p>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="w-full sm:w-2/3 lg:max-w-lg lg:w-1/2"
          >
            <img
              className="object-cover max-h-[440px] rounded-xl object-center pointer-events-none backdrop-contrast-200 backdrop-brightness-200"
              alt="Tanbir Mahmud"
              loading="lazy"
              decoding="async"
              src={AboutData.image}
              width="896"
              height="1152"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center text-left lg:w-1/2">
            {AboutData.description?.map((item, index) => (
              <p
                key={index}
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true"
                className="font-medium text-gray-700 text-lg lg:text-base xl:text-xl leading-loose xl:leading-8 mb-4"
              >
                {item}
              </p>
            ))}
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="true"
              className="mt-7"
            >
              <ActionLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

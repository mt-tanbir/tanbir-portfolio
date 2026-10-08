import React from "react";
import { Link } from "react-scroll";
import ProfileData from "../data/profile";

const ActionLinks = ({ light = false }) => {
  const buttonClass =
    "inline-flex items-center justify-center rounded-full border-2 py-3 px-7 font-medium text-base transition-colors xl:px-10";
  const hireClass = light
    ? `${buttonClass} border-white bg-black text-white hover:border-dark-orange hover:bg-cornsilk hover:text-black`
    : `${buttonClass} border-black bg-black text-white hover:border-dark-orange hover:bg-cornsilk hover:text-black`;

  return (
    <div className="mt-4 flex justify-center gap-x-4 md:gap-x-5">
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={750}
        className={hireClass}
      >
        Hire Me
      </Link>
      <a
        href={ProfileData.resume}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} border-dark-orange bg-dark-orange text-white hover:bg-cornsilk hover:text-black`}
      >
        Get Resume
      </a>
    </div>
  );
};

export default ActionLinks;

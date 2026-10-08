import React, { useState, useEffect } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      data-aos="zoom-in"
      data-aos-duration="300"
      data-aos-once="true"
      className={`z-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-orange focus-visible:ring-offset-2 ${
        showButton ? "fixed bottom-3 right-4" : "hidden"
      } bg-dark-orange p-1 rounded-full text-white shadow-lg transition duration-900`}
    >
      <FaCircleArrowUp aria-hidden="true" className="w-6 h-6 lg:w-8 lg:h-8" />
    </button>
  );
};

export default ScrollToTopButton;

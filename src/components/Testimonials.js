import ParticleLink from "./ParticleLink";
import Data from "../Data/TestimonialData";
import React, { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Testimonials = () => {
  const scrollref = useRef(null);

  const scrollRight = () => {
    scrollref.current.scrollLeft += 500;
  };

  const scrollLeft = () => {
    scrollref.current.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <ParticleLink />
      <div className="absolute top-0 w-[100%] h-[100%] flex flex-col items-center">
        <h1 className="text-[#fff] py-14 text-3xl md:text-4xl lg:text-5xl font-semibold">
          WHAT CLIENTS SAY?
        </h1>
        <div
          className="flex flex-col justify-start p-3 overflow-x-scroll md:px-80 gap-14 scroll-smooth max-w-7xl md:gap-64 md:flex-row md:ml-96 md:mr-96"
          ref={scrollref}
        >
          {Data.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <div className="flex items-center max-w-sm space-x-8 md:max-w-auto">
                  <img
                    className="w-32 h-32 md:max-w-md md:w-52 md:h-52 rounded-md border-[#ccc] border-[1px]"
                    src={_.image}
                    alt="img.png"
                  />
                  <div>
                    <h1 className="text-xl font-semibold text-white">
                      {_.Name}
                    </h1>
                    <p className="text-[#d0d0d0] leading-8 py-4 w-[55vw] md:w-[30vw]">
                      {_.p}
                    </p>
                    <div className="flex space-x-3">
                      <p>{_.star}</p>
                      <p className="text-[#ff4747]">{_.review}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="hidden md:flex items-center justify-between gap-0.5 space-x-6 pt-10">
          <ArrowBackIosIcon
            onClick={scrollLeft}
            style={{ color: "white" }}
            fontSize="large"
            className="cursor-pointer"
          />
          <ArrowForwardIosIcon
            onClick={scrollRight}
            className="cursor-pointer"
            style={{ color: "white" }}
            fontSize="large"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

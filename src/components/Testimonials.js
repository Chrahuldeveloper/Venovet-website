import ParticleLink from "./ParticleLink";
import Data from "../Data/TestimonialData";
import React, { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
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
          className="flex flex-col justify-start gap-14 p-3 overflow-x-scroll max-w-7xl md:gap-72 md:flex-row "
          ref={scrollref}
        >
          {Data.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <div className="flex items-center max-w-sm space-x-8 md:max-w-auto">
                  <img
                    className="w-36 h-36 md:max-w-md md:w-64 md:h-64 rounded-md border-[#ccc] border-[1px]"
                    src={_.image}
                    alt="img.png"
                  />
                  <div>
                    <h1 className="text-xl font-semibold text-white">
                      {_.Name}
                    </h1>
                    <p className="text-[#d0d0d0] leading-8 py-4 w-[55vw] md:w-[28vw]">
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
        <div className="hidden md:flex items-center justify-between gap-0.5 space-x-4  ">
          <AiOutlineArrowLeft
            onClick={scrollLeft}
            color="white"
            className="p-2 rounded-full shadow-md w-9 h-9 cursor-pointer md:p-3 md:w-14 md:h-14"
          />
          <AiOutlineArrowRight
            onClick={scrollRight}
            className="p-2 rounded-full shadow-md w-9 h-9  md:p-3 md:w-14 md:h-14 cursor-pointer"
            color="white"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

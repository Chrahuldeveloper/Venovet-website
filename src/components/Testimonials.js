import ParticleLink from "./ParticleLink";
import Data from "../Data/TestimonialData";
import React from "react";
const Testimonials = () => {
  return (
    <div className="relative ">
      <ParticleLink />
      <div className="absolute top-0 w-[100%] h-[100%] flex flex-col items-center">
        <h1 className="text-[#fff] py-14 text-3xl md:text-4xl lg:text-5xl font-semibold">
          WHAT CLIENTS SAY?
        </h1>
        <div className="flex flex-col justify-start gap-10 p-3 overflow-x-scroll max-w-7xl md:gap-72 md:flex-row ">
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
        {/* <div className="flex justify-start max-w-5xl gap-10 overflow-x-scroll md:max-w-9xl">
          {Data.map((_, index) => (
            <React.Fragment key={index}>
              <div className="max-w-md">
                <img src={_.image} alt="" className="" />
                <div className="text-white">
                  <h1 className="text-sm">{_.Name}</h1>
                  <p className="text-xs">{_.p}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;

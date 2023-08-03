import ParticleLink from "./ParticleLink";
import Data from "../Data/TestimonialData";
import React from "react";
const Testimonials = () => {
  return (
    <div className=" relative">
      <ParticleLink />
      <div className="absolute top-0 w-[100%] h-[100%] flex flex-col items-center">
        <h1 className="text-[#fff] py-14 text-3xl md:text-4xl lg:text-5xl font-semibold">
          WHAT CLIENTS SAY?
        </h1>
        {/* <div className="max-w-5xl md:max-w-9xl overflow-x-scroll flex justify-start gap-10">
          {Data.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <div className="flex max-w-sm space-x-10">
                  <img
                    className="max-w-md rounded-md border-[#ccc] border-[1px]"
                    src={_.image}
                    alt="img.png"
                  />
                  <div>
                    <h1 className="text-white text-xl  font-semibold">
                      {_.Name}
                    </h1>
                    <p className="text-[#d0d0d0] leading-8 py-4">{_.p}</p>
                    <div className="flex space-x-3">
                      <p>{_.star}</p>
                      <p className="text-[#ff4747]">{_.review}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div> */}
        {/* <div className="max-w-5xl md:max-w-9xl overflow-x-scroll flex justify-start gap-10">
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

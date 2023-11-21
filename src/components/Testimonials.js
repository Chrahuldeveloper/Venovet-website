import ParticleLink from "./ParticleLink";
import Data from "../Data/TestimonialData";
import React, { useRef, useState } from "react";

const Testimonials = () => {
  const scrollref = useRef(null);

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const dots = Math.ceil(Data.length / 2);

  const scrollRight = () => {
    const nextTestimonial = activeTestimonial + 1;
    if (nextTestimonial < Data.length) {
      scrollref.current.scrollLeft =
        nextTestimonial * scrollref.current.clientWidth;
      setActiveTestimonial(nextTestimonial);
    }
  };

  const scrollLeft = () => {
    const prevTestimonial = activeTestimonial - 1;
    if (prevTestimonial >= 0) {
      scrollref.current.scrollLeft =
        prevTestimonial * scrollref.current.clientWidth;
      setActiveTestimonial(prevTestimonial);
    }
  };

  const handleDotClick = (index) => {
    scrollref.current.scrollLeft = index * scrollref.current.clientWidth;
    setActiveTestimonial(index);
  };

  return (
    <div className="relative">
      <ParticleLink />
      <div className="absolute top-0 w-[100%] h-[100%] flex flex-col items-center">
        <h1 className="text-[#fff] py-14 text-3xl md:text-4xl lg:text-5xl font-semibold">
          WHAT CLIENTS SAY?
        </h1>
        <div
          className="flex flex-col justify-start p-3 overflow-x-scroll  gap-14 scroll-smooth max-w-7xl md:gap-64 md:flex-row md:ml-10"
          ref={scrollref}
        >
          {Data.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0  items-center max-w-sm space-x-8 md:max-w-auto">
                  <img
                    className="w-36 h-36 md:max-w-md md:w-52 md:h-52 rounded-md border-[#ccc] border-[1px] p-2"
                    src={_.image}
                    alt="img.png"
                  />
                  <div>
                    <h1 className="text-xl font-semibold text-white">
                      {_.Name}
                    </h1>
                    <p className="text-[#d0d0d0] leading-8 py-4 w-[55vw] md:w-[30vw] text-justify">
                      {_.p}
                    </p>
                    <div className="flex space-x-3">
                      <p>{_.star}</p>
                      <p className="text-[#ff4747] text-justify">{_.review}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="hidden md:flex items-center justify-between gap-0.5 space-x-6 pt-10">
          {Array.from({ length: dots }).map((_, index) => (
            <button
              key={index}
              className={`w-8 h-4 rounded-2xl  ${
                index === activeTestimonial ? " bg-[#ff5e15]" : "bg-[#ffffff1a]"
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
          <button onClick={scrollLeft} className="cursor-pointer">
            &lt;
          </button>
          <button onClick={scrollRight} className="cursor-pointer">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

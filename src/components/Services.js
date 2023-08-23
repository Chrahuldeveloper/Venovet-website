import React, { useState } from "react";
import Data from "../Data/Services";
function Services() {
  const [hover, sethover] = useState(null);
  return (
    <div className="px-10 py-16 pt-24 bg-[#dae2ed] space-y-14">
      <div className="space-y-4">
        <h1 className="text-[#ff5e15] font-semibold ml-20">OUR SERVICES</h1>
        <h1 className="ml-20 text-3xl font-bold md:text-4xl">What We Do</h1>
      </div>
      <div className="grid py-3 space-y-20 md:space-y-0 md:grid-cols-2 lg:grid-cols-4 md:gap-14 lg:gap-7 place-items-center lg:px-20">
        {Data.map((card, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => sethover(index)}
              className="relative lg:pb-6"
            >
              <img
                className={`rounded-lg   ${
                  hover === index
                    ? "brightness-75 ease-in-out duration-300"
                    : null
                }  cursor-pointer `}
                src={card.image}
                alt=""
              />
              <div className="absolute shadow-lg bg-white rounded-lg rounded-br-none top-[-1rem] px-2 py-4 right-0 flex items-center w-72 lg:w-60 space-x-4 hover:bg-[#ff5e15] hover:text-white transition ease-in-out duration-500">
                <div
                  className={`${
                    hover === index ? "bg-[#ff5e15]" : "bg-white"
                  } absolute shadow-lg bg-white rounded-lg rounded-br-none top-[-1rem] px-2 py-4 right-0 flex items-center w-72 lg:w-60 space-x-4  transition ease-in-out duration-500`}
                >
                  <img
                    className={`w-14 `}
                    src="https://www.venovet.com/assets/images/logo-br-grey.png"
                    alt=""
                  />
                  <p className="text-lg font-semibold leading-5 max-w-0">
                    {card.Tittle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;

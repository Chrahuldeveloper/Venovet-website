import React from "react";
import Data from "../Data/Services";
function Services() {
  return (
    <div className="px-10 py-16 pt-24 bg-[#dae2ed] space-y-14">
      <div className="space-y-4">
        <h1 className="text-[#ff5e15] font-semibold">OUR SERVICES</h1>
        <h1 className="font-bold text-3xl md:text-4xl ">What We Do</h1>
      </div>
      <div className="space-y-20 md:space-y-0 grid md:grid-cols-2 lg:grid-cols-4 md:gap-14 lg:gap-7  place-items-center">
        {Data.map((card, index) => {
          return (
            <div key={index} className="relative lg:pb-6">
              <img className="rounded-lg " src={card.image} alt="" />
              <div className="absolute shadow-lg bg-white rounded-lg rounded-br-none top-[-1rem] px-2 py-4 right-0 flex items-center w-72 lg:w-60 space-x-4 hover:bg-[#ff5e15] transition ease-in-out duration-500">
                <img
                  className="w-14"
                  src="https://www.venovet.com/assets/images/logo-br-grey.png"
                  alt=""
                />
                <p className="max-w-0 font-semibold text-lg leading-5">
                  {card.Tittle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;

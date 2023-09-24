import React, { useState } from "react";
import Data from "../Data/Services";
import { AiOutlineArrowRight } from "react-icons/ai";
import DropdownData from "../Data/WhatweDoCategories";
import { Link } from "react-router-dom";
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
              className="relative lg:pb-6 "
            >
              <div className="overflow-hidden">
                <img
                  className={`rounded-lg   ${
                    hover === index
                      ? "brightness-75 ease-in-out transition duration-300 scale-110 rotate-3"
                      : null
                  }  cursor-pointer `}
                  src={card.image}
                  alt=""
                />
              </div>
              <div className="absolute shadow-lg bg-white rounded-lg rounded-br-none top-[-1rem] px-2 py-4 right-0 flex items-center w-72 lg:w-60 space-x-4 hover:bg-[#ff5e15] hover:text-white transition ease-in-out duration-500">
                <div
                  className={`${
                    hover === index ? "bg-[#ff5e15]" : "bg-white"
                  } absolute shadow-lg  rounded-lg rounded-br-none top-[-1rem] px-2 py-4 right-0 flex items-center w-72 lg:w-60 space-x-4  transition ease-in-out duration-500`}
                >
                  <img
                    className={`w-14`}
                    src="https://www.venovet.com/assets/images/logo-br-grey.png"
                    alt=""
                  />
                  <p className="text-lg text-[#2a2a2a] leading-5 ">
                    {card.Tittle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-10">
        <Link
          to={`/whatwedo/${DropdownData[0].catgeory}`}
          state={{
            image: DropdownData[0].image,
            Tittle: DropdownData[0].Tittle,
            Para: DropdownData[0].Para,
          }}
        >
          <button className="bg-[#ff5e15] relative overflow-hidden group  transition ease-in-out duration-300 font-semibold rounded-xl  text-white px-6 py-2 flex items-center space-x-2">
            <span className="absolute left-0 h-full w-0 transition-all bg-orange-700 opacity-100 group-hover:w-full duration-300 ease-in-out"></span>
            <span className="relative flex items-center">
              <h1>View All Services</h1>
              <AiOutlineArrowRight size={25} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Services;

import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div className="bg-[#d6d6d6] shadow-md p-5 max-w-xs space-y-5">
      <h1 className="text-xl font-bold lg:text-2xl">
        How Can
        <br />
        We Help You!
      </h1>
      <p className="leading-7 ">
        We understand the importance approaching each work integrally and
        believe in the power of simple and easy communication.
      </p>
      <Link to={"/contact"}>
        <button className="bg-[#ff5e15] my-8 overflow-hidden relative group text-sm font-semibold rounded-xl  text-white px-4 py-3 flex items-center space-x-2.5">
          <span className="absolute left-0 h-full w-0 transition-all bg-orange-700 opacity-100 group-hover:w-full duration-300 ease-in-out"></span>
          <span className="relative flex items-center space-x-1">
            <h1>SCHEDULE AN APPOINTMENT</h1>
            <AiOutlineArrowRight size={20} color={"white"} />
          </span>
        </button>
      </Link>
    </div>
  );
}

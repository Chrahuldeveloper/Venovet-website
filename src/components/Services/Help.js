import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Help() {
  return (
    <div className="bg-[#d6d6d6] shadow-md p-5 max-w-xs space-y-5">
      <h1 className="text-xl lg:text-2xl font-bold">
        How Can
        <br />
        We Help You!
      </h1>
      <p className=" leading-7">
        We understand the importance approaching each work integrally and
        believe in the power of simple and easy communication.
      </p>
      <button className="bg-orange-500 tex-white text-xs font-semibold rounded-lg  text-white px-8 py-3.5 flex items-center space-x-2.5">
        <h1>SCHEDULE AN APPOINTMENT</h1>
        <AiOutlineArrowRight size={25} color={"white"} />
      </button>
    </div>
  );
}

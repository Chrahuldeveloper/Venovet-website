import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

export default function Brochure() {
  return (
    <div className="bg-white p-6 border-[1px] border-gray-300 max-w-xs space-y-5 text-center">
      <h1 className="font-semibold md:text-xl">Download Brochures</h1>
      <button className="bg-orange-500 tex-white font-semibold rounded-lg  text-white px-8 py-4 flex items-center space-x-2.5 hover:brightness-95 duration-300 ease-in-out">
        <h1>Download Brochures</h1>
        <AiOutlineFilePdf size={25} color="white" />
      </button>
    </div>
  );
}

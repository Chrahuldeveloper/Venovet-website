import React from "react";

export default function About() {
  return (
    <div className="p-4 space-y-10 md:flex items-start justify-center md:space-y-0 md:space-x-16 my-28">
      <div>
        <img
          src="https://www.venovet.com/assets/images/title-shp1.png"
          alt="png"
          className="opacity-40"
        />
      </div>
      <div className="space-y-3 md:space-y-4">
        <h1 className="text-orange-500 text-lg font-semibold">
          WELCOME TO VENOVET
        </h1>
        <h2 className="font-semibold text-3xl">
          About Us <br /> Our Company.
        </h2>
      </div>
      <div className="space-y-4 md:max-w-2xl md:space-y-9">
        <h1 className="text-xl md:text-3xl font-semibold">
          We provide on-demand warehousing space for business and consumers
        </h1>
        <h2 className="text-xl md:text-3xl font-bold text-orange-500">
          Logistics Operations
        </h2>
        <p className="text-gray-400 font-semibold">
          For our clients from Transporting the Goods from Source to our
          Warehouse, Inwarding the Goods, Quality Check, Storage, Dispatch,
          Reporting and End Customer Delivery Transportation.
        </p>
        <div className="flex md:flex-row flex-col items-start  md:space-x-6 space-y-4 md:space-y-0">
          <button className=" text-sm md:text-base bg-orange-500 text-white font-semibold px-8 py-2 rounded-lg shadow-2xl shadow-black">
            DOWNLOAD BROCHURE
          </button>
          <button className="text-sm md:text-base bg-black text-white font-semibold px-14 py-2 rounded-lg shadow-2xl shadow-black">
            WATCH OUR SHORT VIDEO
          </button>
        </div>
      </div>
    </div>
  );
}

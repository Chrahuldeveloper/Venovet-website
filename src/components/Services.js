import React from "react";
import Data from "../Data/Services";
export default function Services() {
  return (
    <div className="bg-[#dae2ed] p-20">
      <h1 className="text-orange-500 font-semibold text-lg lg:text-xl text-center">
        OUR SERVICES
      </h1>
      <h2 className="text-xl font-bold mt-2 md:text-2xl text-center lg:text-3xl">
        What We Do
      </h2>
      {/* Rendering the Card data */}
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center justify-center gap-5 mt-10">
        {Data.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="relative cursor-pointer">
                <div class="absolute inset-0 z-10 bg-orange-500 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-500">
                  <h1 className="text-white text-lg font-bold">
                    {item.Tittle}
                  </h1>
                </div>
                <div className="relative">
                  <div className=" flex flex-wrap content-center">
                    <img src={item.image} class="mx-auto " alt={item.image} />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-orange-500 tex-white font-semibold rounded-lg shadow-2xl shadow-black text-white px-8 py-1.5">
          View all Services
        </button>
      </div>
    </div>
  );
}

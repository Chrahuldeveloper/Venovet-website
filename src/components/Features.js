import React from "react";
import Data from "../Data/Features";
import { Link } from "react-router-dom";
export default function Features() {
  return (
    <section className=" bg-[#fafafa]">
      <div className="pt-10 space-y-1 text-center">
        <h1 className="text-lg font-bold text-slate-500">OUR GOODNESS</h1>
        <h2 className="text-xl font-bold text-orange-500 md:text-3x lg:text-4xl">
          What Makes Us Special
        </h2>
      </div>
      <div className="grid grid-cols-1 px-5 md:grid-cols-2 place-items-center gap-14 my-14 md:px-20">
        {Data.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex items-center max-w-lg gap-10 md:gap-6">
                <div className="bg-white rounded-full">{item.icons}</div>
                <div className="space-y-3.5">
                  <h1 className="font-bold text-xl lg:text-2xl text-[#757575]">
                    {item.Tittle}
                  </h1>
                  <p className="text-slate-400">{item.Para}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex justify-center my-10">
        <Link to="/contact">
          <button className="bg-orange-500 tex-white font-semibold rounded-full shadow-2xl shadow-black text-white px-8 py-1.5 hover:brightness-90 ease-in-out duration-300">
            Talk to our experts
          </button>
        </Link>
      </div>
    </section>
  );
}

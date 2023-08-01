import React from "react";
import Data from "../Data/Features";
export default function Features() {
  return (
    <section className=" bg-[#fafafa]">
      <div className="text-center space-y-2 pt-10">
        <h1 className="text-slate-500  text-2xl font-bold">OUR GOODNESS</h1>
        <h2 className="text-orange-500 font-bold text-xl md:text-3xl">
          What Makes Us Special
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-7 my-10 px-5 md:px-0">
        {Data.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex items-center max-w-lg gap-5">
                <div className="bg-white rounded-full">{item.icons}</div>
                <div className="space-y-2">
                  <h1 className="font-bold text-xl text-[#757575]">
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
        <button className="bg-orange-500 tex-white font-semibold rounded-lg shadow-2xl shadow-black text-white px-8 py-1.5">
          Talk to our experts
        </button>
      </div>
    </section>
  );
}

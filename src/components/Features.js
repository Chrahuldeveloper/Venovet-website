import React from "react";
import Data from "../Data/Features";
import { Link } from "react-router-dom";
export default function Features() {
  return (
    <section
      className=" bg-[#fafafa] pb-10"
      data-aos="slide-left"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="pt-10 space-y-1 text-center ">
        <h1 className="text-[0.875rem] font-bold text-slate-500">
          OUR GOODNESS
        </h1>
        <h2 className="text-[2.25rem] leading-10 md:leading-none font-bold text-[#fe8704] md:text-3xl lg:text-4xl">
          What Makes Us Special
        </h2>
      </div>
      <div className="grid grid-cols-1 px-5 md:grid-cols-2 place-items-center gap-14 my-14 md:px-14">
        {Data.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex items-center max-w-xl gap-10 md:gap-6">
                <div className="bg-white p-4 rounded-full">{item.icons}</div>
                <div className="space-y-3.5">
                  <h1 className="font-bold text-[1.125rem] lg:text-[1.150rem] text-[#6f6f6f]">
                    {item.Tittle}
                  </h1>
                  <p className="text-[#777777] ">{item.Para}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex justify-center my-10">
        <Link to="/contact">
          <button className="bg-[#ff5e15]  font-semibold rounded-full hover:shadow-none shadow-2xl shadow-black text-white px-8 py-1.5 hover:brightness-90 ease-in-out duration-300">
            Talk to our experts
          </button>
        </Link>
      </div>
    </section>
  );
}

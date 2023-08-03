import React from "react";
import Data from "../Data/Blogs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blogs() {
  return (
    <>
      <section>
        <div>
          <div className=" space-y-1.5 pt-10 ml-6">
            <h1 className="lg:ml-24  text-slate-500 md:text-xl font-bold">
              Our Blogs
            </h1>
            <h2 className="lg:ml-24 text-orange-500 font-bold text-2xl md:text-3xl">
              Recent Articles
            </h2>
          </div>
        </div>
        <div className="max-w-5xl md:max-w-7xl mx-auto overflow-x-scroll">
          <div className="flex  flex-row  gap-9 my-10 px-8">
            {Data.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <div className="text-center space-y-4 ">
                    <img
                      src={item.image}
                      className="max-w-sm"
                      alt={item.image + "xyz"}
                    />
                    <div className="space-y-2.5">
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
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-orange-500 tex-white font-semibold rounded-lg shadow-2xl shadow-black text-white px-8 py-1.5">
            View all Blogs
          </button>
        </div>
      </section>
    </>
  );
}

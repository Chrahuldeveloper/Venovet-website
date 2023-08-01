import React from "react";
import Data from "../Data/Blogs";

export default function Blogs() {
  return (
    <>
      <section className="">
        <div className="text-center space-y-1.5 pt-10">
          <h1 className="text-slate-500 md:text-2xl font-bold">Blogs</h1>
          <h2 className="text-orange-500 font-bold text-xl md:text-3xl">
            Recent Articles
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-7 my-10 px-5">
          {Data.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <div className="text-center space-y-4 ">
                  <img
                    src={item.image}
                    className="max-w-md"
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
      </section>
    </>
  );
}

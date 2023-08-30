import React, { useRef } from "react";
import Data from "../Data/Blogs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function Blogs() {
  const blogs = useRef(null);
  const navigate = useNavigate();

  const scrollRight = () => {
    blogs.current.scrollLeft += 500;
  };

  const scrollLeft = () => {
    blogs.current.scrollLeft -= 500;
  };

  return (
    <>
      <section>
        <div className="flex items-center justify-between px-5 lg:px-20">
          <div className=" space-y-1.5 pt-10 ">
            <h1 className="font-bold lg:ml-24 text-slate-500 md:text-xl">
              Our Blogs
            </h1>
            <h2 className="text-2xl font-bold text-orange-500 lg:ml-24 md:text-3xl">
              Recent Articles
            </h2>
          </div>

          <div className="flex items-center gap-0.5 space-x-4">
            <AiOutlineArrowLeft
              onClick={scrollLeft}
              color="orange"
              className="p-2 rounded-full shadow-md w-9 h-9 md:p-3 md:w-14 md:h-14"
            />
            <AiOutlineArrowRight
              onClick={scrollRight}
              className="p-2 rounded-full shadow-md w-9 h-9  md:p-3 md:w-14 md:h-14"
              color="orange"
            />
          </div>
        </div>
        <div
          className="max-w-5xl mx-auto overflow-x-scroll md:max-w-7xl scroll-smooth"
          ref={blogs}
        >
          <div className="flex flex-row px-8 my-10 gap-9" onClick={scrollRight}>
            {Data.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <div
                    className="space-y-4 text-center"
                    onClick={() => {
                      navigate(`/ReadFull/${item.Tittle}`);
                    }}
                  >
                    <img
                      src={item.image}
                      className="max-w-xs duration-500 ease-in-out cursor-pointer hover:brightness-75"
                      alt={item.image + "xyz"}
                    />
                    <div className="space-y-2.5">
                      <h1 className="font-bold text-sm md:text-xl text-[#757575]">
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

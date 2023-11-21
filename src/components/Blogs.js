import React, { useEffect, useRef } from "react";
import Blog from "../Data/BlogData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Blogs() {
  const blogs = useRef(null);
  const navigate = useNavigate();

  const scrollRight = () => {
    blogs.current.scrollLeft += 500;
  };

  const scrollLeft = () => {
    blogs.current.scrollLeft -= 500;
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <section className="px-5 md:px-12 lg:px-24">
        <div className="flex items-center justify-between ">
          <div className=" space-y-1.5 pt-10 ">
            <h1 className="font-bold lg:ml text-[#ff5e15]  md:text-xl">
              Our Blogs
            </h1>
            <h2 className="text-2xl font-bold md:text-3xl">Recent Articles</h2>
          </div>

          <div className="flex items-center gap-0.5 space-x-4">
            <div className="p-2.5 bg-[#00000000] rounded-full hover:bg-[#ff5e15] bg-white transition duration-300 ease-in-out">
              <AiOutlineArrowLeft
                size={28}
                className="hover:text-white text-[#ff5e15] "
                cursor={"pointer"}
                onClick={scrollLeft}
              />
            </div>
            <div className="p-2.5 bg-[#00000000] rounded-full hover:bg-[#ff5e15] bg-white transition duration-300 ease-in-out">
              <AiOutlineArrowRight
                size={28}
                className="hover:text-white text-[#ff5e15] "
                cursor={"pointer"}
                onClick={scrollRight}
              />
            </div>
          </div>
        </div>
        <div className=" overflow-x-scroll   scroll-smooth" ref={blogs}>
          <div className="flex  my-10 gap-4 md:gap-9 " onClick={scrollRight}>
            {Blog.map((item, i) => {
              return (
                <div className="w-screen" key={i}>
                  <div
                    className="space-y-4 text-center w-[80vw] lg:w-auto"
                    onClick={() => {
                      navigate(`/ReadFull/${item.Tittle}`);
                    }}
                  >
                    <div className="p-2.5 border rounded-md duration-500 ease-in-out cursor-pointer hover:brightness-75">
                      <img
                        src={item.image}
                        className="w-full rounded-md duration-500 ease-in-out cursor-pointer hover:brightness-75"
                        alt={item.image + "xyz"}
                      />
                    </div>

                    <div className="space-y-2.5">
                      <h1 className="font-bold text-[1.25rem] md:text-xl text-[#757575]">
                        {item.Tittle}
                      </h1>
                      <p className="text-[#777777]">{item.Para}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link to="/BlogPage">
            <button className="bg-[#ff5e15] relative overflow-hidden group  transition ease-in-out duration-300 font-semibold rounded-xl  text-white px-8 py-1.5 flex items-center ">
              <span className="absolute left-0 w-0 h-full transition-all duration-300 ease-in-out bg-orange-700 opacity-100 group-hover:w-full"></span>
              <span className="relative flex items-center">
                View all Articles
              </span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

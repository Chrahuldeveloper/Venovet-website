import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import { collection, getDocs, query } from "firebase/firestore";

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

  const [Blogs, setBlogs] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "BLOGS"));
        const querySnapshot = await getDocs(q);
        const blogsData = [];
        querySnapshot.forEach((doc) => {
          blogsData.push(doc.data());
          // console.log(doc.data());
        });
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <section className="px-5 md:px-12 lg:px-24">
        <div className="flex items-center justify-between ">
          <div className=" space-y-1.5 pt-10 ">
            <h1 className="font-bold lg:ml text-[#ff5e15] md:text-xl">
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
        <div className="overflow-x-scroll scroll-smooth" ref={blogs}>
          <div
            className="grid grid-cols-3 gap-4 my-10 md:gap-9 "
            onClick={scrollRight}
          >
            {Blogs?.length !== 0
              ? Blogs?.map((item, i) => {
                  return (
                    <div className="" key={i}>
                      <div
                        className="space-y-4 text-center w-[80vw] lg:w-auto"
                        onClick={() => {
                          navigate(`/ReadFull/${item.Tittle1}`);
                        }}
                      >
                        <div className="p-2.5 border rounded-md duration-500 ease-in-out cursor-pointer hover:brightness-75">
                          <img
                            src={item.Blogimage}
                            className="w-full duration-500 ease-in-out rounded-md cursor-pointer hover:brightness-75"
                            alt={item.Blogimage + "xyz"}
                          />
                        </div>

                        <div className="space-y-2.5">
                          <h1 className="font-bold text-[1.25rem] md:text-xl text-[#757575]">
                            {item.Tittle1}
                          </h1>
                          <p className="text-[#777777]">{item.Para1}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
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

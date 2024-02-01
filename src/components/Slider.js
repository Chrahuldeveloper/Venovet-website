import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AiOutlineArrowRight } from "react-icons/ai";
import Data from "../Data/SliderData";
import { Link } from "react-router-dom";
export default function Slider() {
  const [index, setindex] = useState(0);

  const forward = () => {
    if (index === Data.length - 1) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  };
  const encodedTittle = Data[index].catgeory.replace(/\s+/g, "-");

  const prev = () => {
    if (index === 0) {
      return;
    }
    setindex(index - 1);
  };

  return (
    <div className="w-screen">
      <div
        key={index}
        // className="z-40 animate__animated animate__fadeIn"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 20 , 0.6), rgba(0, 0, 20, 0.6)),url(${Data[index].image})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "94vh",
        }}
      >
        <div className="flex items-center justify-between h-screen px-3 md:px-10 gap-7">
          <div className="p-2.5 flex items-center justify-center bg-[#00000000] rounded-full hover:bg-[#ff5e15] transition duration-500 ease-in-out">
            <ArrowBackIosNewIcon
              onClick={prev}
              fontSize="large"
              style={{ color: "white" }}
              // className="hidden md:block md:w-11 md:h-11 "
              // color="#fff"
              cursor={"pointer"}
            />
          </div>
          <div className="flex  flex-col items-center justify-center text-center md:items-start md:text-left lg:-ml-56 ">
            <h1 className="text-2xl w-[46vw] md:w-auto text-white font-poppins md:text-4xl lg:text-5xl">
              {Data[index].Tittle}
            </h1>
            <h2 className="mb-4  font-poppins text-2xl font-semibold text-[#ff5e15] md:text-4xl lg:text-5xl">
              {Data[index].HighLight}
            </h2>
            <p className="md:max-w-3xl lg:my-4 text-[1.018rem]  leading-6 text-white  lg:text-xl">
              {Data[index].Para}
            </p>
            <Link
              to={`/whatwedo/${encodedTittle}`}
              state={{
                image: Data[index].image,
                Tittle: Data[index].Tittle,
                Para: Data[index].Para1,
              }}
            >
              <button className="bg-[#ff5e15] relative text-sm md:text-[1rem]  flex space-x-2 transition duration-300 ease-in-out items-center font-semibold rounded-lg overflow-hidden shadow-2xl shadow-black text-white px-2 md:px-6 py-1.5 my-4 group">
                <span className="absolute left-0 w-0 h-full transition-all duration-300 ease-in-out bg-orange-700 opacity-100 group-hover:w-full"></span>
                <span className="relative flex items-center">
                  Learn More
                  <AiOutlineArrowRight className="ml-3" size={25} />
                </span>
              </button>
            </Link>
          </div>
          <div className="p-2.5 bg-[#00000000] rounded-full hover:bg-[#ff5e15] transition duration-500">
            <ArrowForwardIosIcon
              onClick={forward}
              fontSize="large"
              style={{ color: "white" }}
              // className="hidden md:block md:w-11 md:h-11 "
              cursor={"pointer"}
            />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

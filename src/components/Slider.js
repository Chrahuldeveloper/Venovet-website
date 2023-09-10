import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
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
  const prev = () => {
    if (index === 0) {
      return;
    }
    setindex(index - 1);
  };

  return (
    <div className="w-screen">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0.2, 0.1, 0.7), rgba(0, 0, 0, 0.4)),url(${Data[index].image})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "90vh",
        }}
      >
        <div className="flex justify-between h-screen items-center px-3 md:px-10 gap-7">
          <AiOutlineArrowLeft
            onClick={prev}
            size={30}
            className="w-14 h-14 md:w-11 md:h-11 "
            color="white"
            cursor={"pointer"}
          />

          <div className="text-center md:text-left  lg:space-y-4 lg:-ml-36">
            <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold">
              {Data[index].Tittle}
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-6xl my-4 font-bold text-orange-500">
              {Data[index].HighLight}
            </h2>
            <p className="text-white font-semibold max-w-3xl md:text-lg lg:text-xl leading-7 my-4">
              {Data[index].Para}
            </p>
            <Link
              to={`/whatwedo/${Data[index].catgeory}`}
              state={{
                image: Data[index].image,
                Tittle: Data[index].Tittle,
                Para: Data[index].Para1,
              }}
            >
              <button className="bg-orange-500 tex-white font-semibold rounded-lg shadow-2xl shadow-black text-white px-8 py-1.5 my-4">
                Learn More
              </button>
            </Link>
          </div>

          <AiOutlineArrowRight
            onClick={forward}
            size={30}
            className=" md:w-11 md:h-11 w-14 h-14 "
            color="white"
            cursor={"pointer"}
          />
        </div>
      </div>
    </div>
  );
}

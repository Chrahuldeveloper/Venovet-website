import React from "react";

export default function ServiceHeroSection({ image, Tittle, Para }) {
  return (
    <>
      <div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0.2, 0.1, 0.7), rgba(0, 0, 0, 0.4)),url(${image})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            height: "40vh",
          }}
          className="space-y-5 pl-8 md:pl-16 pt-16"
        >
          <h1 className="text-[#ff5e15] font-poppins font-bold md:text-xl text-lg">
            {Tittle}
          </h1>
          <p className="text-white font-bold text-2xl ">{Para}</p>
        </div>
      </div>
    </>
  );
}

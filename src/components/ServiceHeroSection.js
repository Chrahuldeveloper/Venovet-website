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
          className="pt-16 pl-5 md:pl-12 space-y-5 lg:pl-24"
        >
          <h1 className="text-[#ff5e15] font-poppins font-bold md:text-xl">
            {Tittle}
          </h1>
          <p className="text-2xl font-bold text-white">{Para}</p>
        </div>
      </div>
    </>
  );
}

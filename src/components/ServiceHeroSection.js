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
          className="space-y-5 pl-20 md:pl-36 pt-24"
        >
          <h1 className="text-orange-500 font-bold md:text-xl text-lg">
            {Tittle}
          </h1>
          <p className="text-white font-bold md:text-2xl text-xl">{Para}</p>
        </div>
      </div>
    </>
  );
}

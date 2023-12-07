import React from "react";
import bgs2 from "../images/about/bgs2.jpg";

export default function AboutUsHeroSection() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0.2, 0.1, 0.7), rgba(0, 0, 0, 0.4)),url(${bgs2})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "40vh",
        }}
        className="space-y-5 pl-5 md:pl-12 lg:pl-24 pt-16"
      >
        <h1 className="text-[#ff5e15] font-bold font-poppins  text-xl">
          About Venovet
        </h1>
        <p className="text-white font-bold text-2xl  ">
          FOR ALL YOUR <br /> CARGO NEEDS
        </p>
      </div>
    </div>
  );
}

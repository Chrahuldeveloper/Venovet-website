import React from "react";
import blog1 from "../images/blog.jpg";

export default function BlogPageHeroSection() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 20 , 0.6), rgba(0, 0, 20, 0.6)),url(${blog1})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "40vh",
        }}
        className="pt-24 pl-20 space-y-5 md:pl-24"
      >
        <h1 className="text-lg font-bold text-orange-500 md:text-2xl">
          Venovet Blog
        </h1>
        <p className="text-xl font-bold text-white md:text-2xl">Case Studies</p>
      </div>
    </div>
  );
}

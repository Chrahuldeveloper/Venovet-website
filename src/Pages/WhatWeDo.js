import React from "react";
import { Footer, Navbar, NewsLetter, ServiceHeroSection } from "../components";
import { Help, Brochure, ServiceContent } from "../components/Services/index";
// import { useParams } from "react-router-dom";

export default function WhatWeDo() {
  // From Params take the categeory and chamge the whole ui

  // const { categeory } = useParams();

  return (
    <main>
      <Navbar Page={"whatwedo"} />
      <ServiceHeroSection image={""} Tittle={""} Para={""} />
      <div className="flex flex-col max-w-5xl p-5 mx-auto lg:max-w-7xl gap-x-10 md:flex-row md:justify-around md:items-start">
        <div className="space-y-8">
          <Help />
          <Brochure />
        </div>
        <div>
          <ServiceContent />
        </div>
      </div>
      {/* <NewsLetter /> */}
      {/* <Footer /> */}
    </main>
  );
}

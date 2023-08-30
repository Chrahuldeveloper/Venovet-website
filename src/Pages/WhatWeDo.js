import React from "react";
import {
  ExpertFrom,
  FilterCategory,
  Footer,
  Navbar,
  NewsLetter,
  ServiceHeroSection,
} from "../components";
import { Help, Brochure, ServiceContent } from "../components/Services/index";
import { useLocation, useParams } from "react-router-dom";

export default function WhatWeDo() {
  // From Params take the categeory and chamge the whole ui
  const { category } = useParams();
  const data = useLocation();
  const { image, Tittle, Para } = data.state;

  return (
    <body className="overflow-x-clip">
      <main>
        <Navbar Page={"whatwedo"} />
        <ServiceHeroSection image={image} Tittle={Tittle} Para={Para} />
        <div className="flex flex-col max-w-5xl gap-16 p-5 mx-auto lg:max-w-7xl md:flex-row md:justify-around md:items-start">
          <div className="space-y-8">
            <FilterCategory Tittle={"Category"} />
            <Help />
            <Brochure />
            <ExpertFrom />
          </div>
          <div>
            <ServiceContent category={category} />
          </div>
        </div>
        <NewsLetter />
        <Footer />
      </main>
    </body>
  );
}

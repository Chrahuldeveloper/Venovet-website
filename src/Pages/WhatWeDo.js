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
import { useParams } from "react-router-dom";

export default function WhatWeDo() {
  // From Params take the categeory and chamge the whole ui
  const { category } = useParams();

  const Categories = [
    "Warehouse Management (2PL & 3PL)",
    "Transportation Fleet",
    "Value Added Services",
    "SCM Automation",
    "Inventory Audits & Analytics",
    "Logistics Projects Designing",
    "Internet Supply Chain",
    "Ware ERP Solutions",
    "Industrial Real States",
    "Facility Management",
    "Industrial Security Services",
  ];

  return (
    <main>
      <Navbar Page={"whatwedo"} />
      <ServiceHeroSection image={""} Tittle={""} Para={""} />
      <div className="flex flex-col max-w-5xl gap-16 p-5 mx-auto lg:max-w-7xl md:flex-row md:justify-around md:items-start">
        <div className="space-y-8">
          <FilterCategory Tittle={"Category"} Categories={Categories} />
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
  );
}

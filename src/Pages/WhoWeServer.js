import React from "react";
import {
  FilterCategory,
  Footer,
  Navbar,
  NewsLetter,
  ServiceHeroSection,
} from "../components";
import { WhoWeServeContent } from "../components/Services/index";

export default function WhoWeServer() {
  const Categories = [
    "Fast Moving Consumer Goods FMCG",
    "Fast Moving Consumer Durables FMCD",
    "Fashion Lifestyle",
    "Home Furniture",
    "Auto Mobility",
    "Telecom",
    "Fruits Vegetables",
    "Diary Farm",
    "Ecommerce Fulfillment",
    "Chemical",
    "Pharma",
    "Lens And Frames",
  ];
  return (
    <body className="overflow-x-clip">
      <main>
        <Navbar Page={"whatwedo"} />
        <ServiceHeroSection
          image={""}
          Tittle={"Auto - Mobility"}
          Para={
            "Relaxes our clients to get the goods delivered at their demanded place"
          }
        />
        <div className="flex flex-col items-start justify-center gap-10 mt-4 lg:flex-row">
          <FilterCategory Tittle={"WhoWeServer"} Categories={Categories} />
          <WhoWeServeContent />
        </div>
        <NewsLetter />
        <Footer />
      </main>
    </body>
  );
}

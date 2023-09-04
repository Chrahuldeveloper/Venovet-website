import React from "react";
import {
  FilterCategory,
  Footer,
  Navbar,
  NewsLetter,
  ServiceHeroSection,
} from "../components";
import { WhoWeServeContent } from "../components/Services/index";
import { useLocation } from "react-router-dom";

export default function WhoWeServer() {
  const data = useLocation();
  const { image, Tittle, Para } = data.state;

  return (
    <body className="overflow-x-clip">
      <main>
        <Navbar Page={"whatwedo"} />
        <ServiceHeroSection image={image} Tittle={Tittle} Para={Para} />
        <div className="flex flex-col items-start justify-center gap-10 mt-4 lg:flex-row">
          <FilterCategory Tittle={"WhoWeServer"} Page={"whoweserve"} />
          <WhoWeServeContent />
        </div>
        <NewsLetter />
        <Footer />
      </main>
    </body>
  );
}

import React from "react";
import { Footer, Navbar, NewsLetter, ServiceHeroSection } from "../components";
import { Help, Brochure, ServiceContent } from "../components/Services/index";
import { useParams } from "react-router-dom";

export default function WhatWeDo() {
  // From Params take the categeory and chamge the whole ui

  // const { categeory } = useParams();

  return (
    <main>
      <Navbar Page={"whatwedo"} />
      <ServiceHeroSection image={""} Tittle={""} Para={""} />
      <div>
        <div>
          <Help />
          <Brochure />
        </div>
        <div>
          <ServiceContent />
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </main>
  );
}

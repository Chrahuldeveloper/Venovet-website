import React from "react";
import {
  AboutUsHeroSection,
  AboutUsSection,
  Footer,
  Navbar,
  NewsLetter,
} from "../components";

export default function About() {
  return (
    <body className="overflow-x-clip">
      <Navbar Page={"About"} />
      <AboutUsHeroSection />
      <AboutUsSection />
      <NewsLetter />
      <Footer />
    </body>
  );
}

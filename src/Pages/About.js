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
    <>
      <Navbar Page={"About"} />
      <AboutUsHeroSection />
      <AboutUsSection />
      <NewsLetter />
      <Footer />
    </>
  );
}

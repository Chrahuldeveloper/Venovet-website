import React, { useEffect } from "react";
import {
  AboutUsHeroSection,
  AboutUsSection,
  DragTop,
  Footer,
  Navbar,
  NewsLetter,
} from "../components";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <body className="overflow-x-clip">
      <Navbar Page={"About"} />
      <AboutUsHeroSection />
      <AboutUsSection />
      <NewsLetter />
      <DragTop />
      <Footer />
    </body>
  );
}

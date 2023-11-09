import React, { useEffect } from "react";
import {
  CareerHeroSection,
  DragTop,
  Footer,
  Form,
  Navbar,
  NewsLetter,
} from "../components";
import { useLocation } from "react-router-dom";

export default function Career() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <body className="overflow-x-clip">
      <Navbar Page={"career"} />
      <CareerHeroSection
        Tittle={"Start Your Career with Venovet"}
        Para={"Careers"}
      />
      <Form />
      <NewsLetter />
      <DragTop />

      <Footer />
    </body>
  );
}

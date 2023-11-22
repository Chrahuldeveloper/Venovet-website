import React, { useEffect } from "react";
import {
  Navbar,
  Footer,
  NewsLetter,
  CareerHeroSection,
  ContactForm,
  DragTop,
} from "../components/index";
import { useLocation } from "react-router-dom";
export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <CareerHeroSection
        Tittle={"Get in Touch with Venovet"}
        Para={"Contact Us"}
      />
      <div className="px-5 md:px-12 lg:px-0">
        <ContactForm />
      </div>
      <NewsLetter />
      <DragTop />

      <Footer />
    </div>
  );
}

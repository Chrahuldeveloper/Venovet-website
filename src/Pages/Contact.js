import React, { useEffect } from "react";
import {
  Navbar,
  Footer,
  NewsLetter,
  CareerHeroSection,
  ContactForm,
} from "../components/index";
import { useLocation } from "react-router-dom";
export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <body className="overflow-x-clip">
      <Navbar />
      <CareerHeroSection
        Tittle={"Get in Touch with Venovet"}
        Para={"Contact Us"}
      />
      <ContactForm />
      <NewsLetter />
      <Footer />
    </body>
  );
}

import React from "react";
import {
  Navbar,
  Footer,
  NewsLetter,
  CareerHeroSection,
  ContactForm,
} from "../components/index";
export default function Contact() {
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

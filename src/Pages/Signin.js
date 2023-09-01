import React from "react";
import {
  ContactForm,
  Footer,
  Navbar,
  NewsLetter,
  ServiceHeroSection,
} from "../components";

export default function Signin() {
  return (
    <>
      <Navbar />
      <ServiceHeroSection image={""} Tittle={""} Para={""} />
      <ContactForm />
      <NewsLetter />
      <Footer />
    </>
  );
}

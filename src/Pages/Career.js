import React from "react";
import {
  CareerHeroSection,
  Footer,
  Form,
  Navbar,
  NewsLetter,
} from "../components";

export default function Career() {
  return (
    <>
      <Navbar Page={"career"} />
      <CareerHeroSection />
      <Form />
      <NewsLetter />
      <Footer />
    </>
  );
}

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
      <CareerHeroSection Tittle={"Start Your Career with Venovet"} Para={"Careers"}/>
      <Form />
      <NewsLetter />
      <Footer />
    </>
  );
}

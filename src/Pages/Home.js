import React from "react";
import { About, Navbar, Slider, Testimonials, FAQ } from "../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Testimonials />
      <FAQ />
    </>
  );
}

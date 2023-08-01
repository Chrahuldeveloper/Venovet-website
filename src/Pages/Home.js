import React from "react";
import { About, Navbar, Slider, Testimonials } from "../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Testimonials />
    </>
  );
}

import React from "react";
import { About, Navbar, Slider, Testimonials, FAQ } from "../components";
import { Features, Services, Blogs } from "../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Features />
      <Blogs />
    </>
  );
}

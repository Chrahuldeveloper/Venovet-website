import React from "react";
import { About, Navbar, Slider, Testimonials, FAQ } from "../components";
import { Features, Services, Blogs, Bridge } from "../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Bridge />
      <Features />
      <Blogs />
    </>
  );
}

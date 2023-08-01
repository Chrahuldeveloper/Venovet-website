import React from "react";
import {
  About,
  Navbar,
  Testimonials,
  Features,
  Services,
  Slider,
  Blogs,
} from "../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Testimonials />
      <Features />
      <Blogs />
    </>
  );
}

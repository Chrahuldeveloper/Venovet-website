import React from "react";
import {
  About,
  Navbar,
  Slider,
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
      <Features />
      <Blogs />
      <Testimonials />
    </>
  );
}

import React from "react";
import {
  About,
  Navbar,
  Slider,
  Testimonials,
  FAQ,
  Footer,
  Features,
  Services,
  Blogs,
  Bridge,
  NewsLetter,
} from "../components";

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
      <NewsLetter />
      <Footer />
    </>
  );
}

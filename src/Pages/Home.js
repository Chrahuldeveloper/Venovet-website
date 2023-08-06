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
  Enquire,
} from "../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Features />
      <Enquire />
      <Testimonials />
      <FAQ />
      <Bridge />
      <Blogs />
      <NewsLetter />
      <Footer />
    </>
  );
}

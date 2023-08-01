import React from "react";
import { About, Blogs, Features, Navbar, Services, Slider } from "../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Features/>
      <Blogs/>
    </>
  );
}

import React from "react";
import { Footer, Navbar, NewsLetter, ShopHeroSection } from "../components";

export default function Shop() {
  return (
    <>
      <Navbar Page={"Shop"} />
      <ShopHeroSection />
      <NewsLetter />
      <Footer />
    </>
  );
}

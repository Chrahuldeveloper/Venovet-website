import React from "react";
import {
  Footer,
  Navbar,
  NewsLetter,
  ShopHeroSection,
  ShopCate,
} from "../components";

export default function Shop() {
  return (
    <body className="overflow-x-clip">
      <Navbar Page={"Shop"} />
      <ShopHeroSection />
      <ShopCate />
      <NewsLetter />
      <Footer />
    </body>
  );
}

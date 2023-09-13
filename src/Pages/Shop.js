import React, { useEffect } from "react";
import {
  Footer,
  Navbar,
  NewsLetter,
  ShopHeroSection,
  ShopCate,
} from "../components";
import { useLocation } from "react-router-dom";

export default function Shop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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

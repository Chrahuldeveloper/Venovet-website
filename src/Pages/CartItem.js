import React from "react";
import {
  Footer,
  Navbar,
  NewsLetter,
  ShopHeroSection,
  CartTable,
} from "../components";

export default function CartItem() {
  return (
    <>
      <body className="overflow-x-clip">
        <Navbar />
        <ShopHeroSection />
        <CartTable />
        <NewsLetter />
        <Footer />
      </body>
    </>
  );
}

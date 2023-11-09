import React from "react";
import {
  Footer,
  Navbar,
  NewsLetter,
  ShopHeroSection,
  CartTable,
  DragTop,
} from "../components";

export default function CartItem() {
  return (
    <>
      <body className="overflow-x-clip">
        <Navbar />
        <ShopHeroSection />
        <CartTable />
        <NewsLetter />
        <DragTop />

        <Footer />
      </body>
    </>
  );
}

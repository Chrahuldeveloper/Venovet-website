import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  Detail,
  DragTop,
  Footer,
  Navbar,
  NewsLetter,
  ShopHeroSection,
} from "../components";

export default function ProductDetail() {
  const data = useLocation();
  const { name } = useParams();
  const { image } = data.state;

  const Product = {
    name,
    image,
  };

  return (
    <>
      <Navbar Page={"Shop"} />
      <ShopHeroSection />
      <Detail Product={Product} />
      <NewsLetter />
      <DragTop />
      <Footer />
    </>
  );
}

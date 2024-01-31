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
  const { image1, image2, image3, image4, desc, Price, MRP } = data.state;

  const Product = {
    name,
    image1,
    image2,
    image3,
    image4,
    desc,
    Price,
    MRP,
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

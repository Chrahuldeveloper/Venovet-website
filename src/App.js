import React from "react";
import {
  Home,
  About,
  Career,
  Shop,
  WhatWeDo,
  Contact,
  WhoWeServer,
  BlogPage,
  ReadFull,
  CartItem,
  Signin,
  ProductDetail,
} from "./Pages/index";
import { Routes, Route } from "react-router-dom";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/whatwedo/:category" element={<WhatWeDo />} />
      <Route path="/whoweserve/:categoryid" element={<WhoWeServer />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/BlogPage" element={<BlogPage />} />
      <Route path="/ReadFull/:tittle" element={<ReadFull />} />
      <Route path="/mycart" element={<CartItem />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/detail/:name" element={<ProductDetail />} />
    </Routes>
  );
}

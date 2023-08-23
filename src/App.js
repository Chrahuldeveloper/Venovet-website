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
} from "./Pages/index";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/whatwedo/:category" element={<WhatWeDo />} />
      <Route path="/whoweserve" element={<WhoWeServer />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/BlogPage" element={<BlogPage />} />
      <Route path="/ReadFull/:tittle" element={<ReadFull />} />
    </Routes>
  );
}

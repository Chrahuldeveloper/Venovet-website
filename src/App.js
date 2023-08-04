import React from "react";
import { Home, About, Career, Shop } from "./Pages/index";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

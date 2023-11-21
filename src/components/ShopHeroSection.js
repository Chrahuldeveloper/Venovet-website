import React from "react";

export default function ShopHeroSection() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0.2, 0.1, 0.7), rgba(0, 0, 0, 0.4)),url(https://venovet.com/assets/images/pagetop-bg.jpg)`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "40vh",
        }}
        className="pt-24 pl-5 md:pl-12 space-y-5 lg:pl-24"
      >
        <h1 className="text-lg font-bold text-orange-500 md:text-2xl">
          Venovet
        </h1>
        <p className="text-xl font-bold text-white md:text-2xl">Shop</p>
      </div>
    </div>
  );
}

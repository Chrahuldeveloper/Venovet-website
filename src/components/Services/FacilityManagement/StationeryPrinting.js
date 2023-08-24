import React from "react";

export default function StationeryPrinting() {
  return (
    <>
      <div className="flex justify-start flex-col md:flex-row gap-4 mt-5">
        <div>
          <img
            src="https://venovet.com/assets/images/s52.jpg"
            alt="https://venovet.com/assets/images/s52.jpg"
            className="lg:max-w-sm"
          />
        </div>
        <div className="text-[#7a7a7a] space-y-5">
          <h1 className="text-black text-lg md:text-xl font-bold">
            Stationery & Printing Services
          </h1>
          <p className="leading-8">
            We provide wide range of stationery items for Home, School, Office
            and Institutes. We Offers unique personalized stationery for your
            business.
          </p>
          <p className="leading-8">
            We Provide offset, Digital and other document printing services.We
            deliver everything from business cards, ID cards, Banners and
            promotional products.
          </p>
        </div>
      </div>
    </>
  );
}

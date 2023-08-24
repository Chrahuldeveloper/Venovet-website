import React from "react";

export default function PestControl() {
  return (
    <>
      <div className="flex justify-start flex-col md:flex-row gap-4 mt-5">
        <div>
          <img
            src="https://venovet.com/assets/images/s53.jpg"
            alt="https://venovet.com/assets/images/s53.jpg"
            className="lg:max-w-sm"
          />
        </div>
        <div className="text-[#7a7a7a] space-y-5">
          <h1 className="text-black text-lg md:text-xl font-bold">
            Pest Control Services
          </h1>
          <p className="leading-8">
            We provide you all types of pest control services like chemical oil
            base, water base, herbal and gel for your offices, hotels,
            residence, etc
          </p>
          <p className="leading-8">
            We Provide offset, Digital and other document printing services.We
            deliver everything from business cards, ID cards, Banners and
            promotional products.
          </p>
        </div>
      </div>
      <ul className="ml-5 text-[#7a7a7a] space-y-2  mt-3">
        <li className="list-disc">General Infestation for crawling insects</li>
        <li className="list-disc">Termite (White Ant) Control</li>
        <li className="list-disc">Rat / Rodent Control</li>
        <li className="list-disc">
          Pre - Construction Anti -Termite (White Ant) Treatment
        </li>
        <li className="list-disc">
          Post Construction Anti-Termite (White Ant) Treatment
        </li>
        <li className="list-disc">Garden Pest Treatment</li>
        <li className="list-disc">Mosquito Control</li>
        <li className="list-disc">Bed Bugs Treatment</li>
        <li className="list-disc">Weed, Carpet Bugs and Beetle Treatment</li>
        <li className="list-disc">Honey Comb Treatment</li>
      </ul>
    </>
  );
}

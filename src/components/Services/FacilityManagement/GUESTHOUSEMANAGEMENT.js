import React from "react";

export default function GUESTHOUSEMANAGEMENT() {
  return (
    <>
      <div className="flex justify-start flex-col md:flex-row gap-4 mt-5">
        <div>
          <img
            src="https://venovet.com/assets/images/s54.jpg"
            alt="https://venovet.com/assets/images/s54.jpg"
            className="lg:max-w-sm"
          />
        </div>
        <div className="text-[#7a7a7a] space-y-5">
          <h1 className="text-black text-lg md:text-xl font-bold">
            Guest House Management
          </h1>
          <p className="leading-8">
            We manage the care taking of company Guest Houses or Transit Houses
            Round “O” clock with well-trained professional in-house cook and
            house keeping personnel with quality food and house keeping services
            with VIP standard.
          </p>
          <ul className="ml-5 space-y-3">
            <li className="list-disc">Front office service</li>
            <li className="list-disc">Food and beverages services</li>
            <li className="list-disc">Room service</li>
            <li className="list-disc">Up-keeping of Guest House</li>
            <li className="list-disc">Observing Safety Regulations</li>
          </ul>
        </div>
      </div>
    </>
  );
}

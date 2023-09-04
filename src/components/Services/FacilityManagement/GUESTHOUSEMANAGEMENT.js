import React from "react";

export default function GUESTHOUSEMANAGEMENT({ data }) {
  return (
    <>
      <div className="flex flex-col justify-start gap-4 mt-5 md:flex-row">
        <div>
          <img
            src={data.SubCat3.image}
            alt={data.SubCat3.image}
            className="lg:max-w-sm"
          />
        </div>
        <div className="text-[#7a7a7a] space-y-5">
          <h1 className="text-lg font-bold text-black md:text-xl">
            {data.SubCat3.Tittle}
          </h1>
          <p className="leading-8">{data.SubCat3.Para}</p>
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

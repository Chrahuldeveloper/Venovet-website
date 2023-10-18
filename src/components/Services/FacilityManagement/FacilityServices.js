import React from "react";

export default function FacilityServices({ data }) {
  return (
    <section className="mt-7">
      <div className="flex flex-col justify-start gap-4 md:flex-row">
        <div>
          <img
            src={data?.SubCat1?.image}
            alt={data?.SubCat1?.image}
            className="lg:max-w-xs"
          />
        </div>
        <div className="text-[#7a7a7a] space-y-5 text-justify">
          <h1 className="text-lg font-bold text-black md:text-xl">
            {data?.SubCat1?.Tittle}
          </h1>
          <p className="leading-8">{data?.SubCat1?.Para1}</p>
          <p className="leading-8">{data?.SubCat1?.Para2}</p>
        </div>
      </div>
      <div className="text-[#7a7a7a] space-y-5 mt-3.5 text-justify">
        <p className="leading-8">{data?.SubCat1?.Para3}</p>
        <p className="leading-8">{data?.SubCat1?.Para4}</p>
      </div>
    </section>
  );
}

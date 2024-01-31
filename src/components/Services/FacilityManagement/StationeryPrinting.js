import React from "react";
import DOMPurify from "dompurify";

export default function StationeryPrinting({ data }) {
  return (
    <>
      <div className="flex flex-col justify-start gap-4 mt-5 md:flex-row">
        <div>
          <img
            src={data?.SubCat2?.image}
            alt={data?.SubCat2?.image}
            className="lg:max-w-sm"
          />
        </div>
        <div className="text-[#7a7a7a] space-y-5 text-justify">
          <h1 className="text-lg font-bold text-black md:text-xl">
            {data?.SubCat2?.Tittle}
          </h1>
          <p
            className="leading-8"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.SubCat2?.Para1),
            }}
          />
          <p
            className="leading-8"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.SubCat2?.Para2),
            }}
          />
        </div>
      </div>
    </>
  );
}

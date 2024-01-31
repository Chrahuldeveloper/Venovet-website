import React from "react";
import DOMPurify from "dompurify";

export default function PestControl({ data }) {
  return (
    <>
      <div className="flex flex-col justify-start gap-4 mt-5 md:flex-row">
        <div>
          <img
            src={data?.SubCat4?.image}
            alt={data?.SubCat4?.image}
            className="lg:max-w-sm"
          />
        </div>
        <div className="text-[#7a7a7a] space-y-5">
          <h1 className="text-lg font-bold text-black md:text-xl">
            {data?.SubCat4?.Tittle}
          </h1>
          <p
            className="leading-8 text-justify"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.SubCat4?.Para),
            }}
          />
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

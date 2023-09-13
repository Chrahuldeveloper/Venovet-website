import React from "react";
import { Card } from "./index";
import { Icons } from "./../index";

export default function WareHouseManagement({ data }) {
  return (
    <section className="mt-5 md:mt-0">
      <div className="space-y-6">
        <h1 className="max-w-sm font-semibold md:max-w-full md:text-2xl lg:text-4xl">
          {data?.Tittle1}
        </h1>
        <div className="flex flex-col items-start space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row text-[#7a7a7a]">
          <p>{data?.Para1}</p>
          <p>{data?.Para2}</p>
        </div>
      </div>
      {/* Offerings section*/}
      <div className="mt-5">
        <h1 className="text-lg md:text-xl lg:text-3xl">Our Offerings</h1>
        <div className="flex flex-col mt-5 space-y-4 md:items-start lg:space-x-10 lg:flex-row lg:space-y-0">
          <img
            className="max-w-sm rounded-lg"
            src={data?.SubCat1?.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-bold text-orange-500 ">
              {data?.SubCat1?.Tittle}
            </h1>
            <p className="text-[#7a7a7a] text-sm leading-6">
              {data?.SubCat1?.Para}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start space-y-4 lg:flex-row mt-7 lg:space-y-0">
        <img
          className="max-w-sm rounded-lg lg:order-2"
          src={data?.SubCat2?.image}
          alt="imge"
        />
        <div className="max-w-lg space-y-3.5 ">
          <h1 className="text-xl font-bold text-orange-500 ">
            {data?.SubCat2?.Tittle}
          </h1>
          <p className="text-[#7a7a7a] text-sm leading-6">
            {data?.SubCat2?.Para}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start space-y-4 lg:space-x-10 lg:flex-row mt-7 lg:space-y-0">
        <img
          className="max-w-sm rounded-lg"
          src={data?.SubCat3?.image}
          alt="imge"
        />
        <div className="max-w-lg space-y-3.5">
          <h1 className="text-xl font-bold text-orange-500 ">
            {data?.SubCat3?.Tittle}
          </h1>
          <p className="text-[#7a7a7a] text-sm leading-6">
            {data?.SubCat3?.Para}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start space-y-4 lg:flex-row mt-7 lg:space-y-0">
        <img
          className="max-w-sm rounded-lg lg:order-2"
          src={data?.SubCat4?.image}
          alt="imge"
        />
        <div className="max-w-lg space-y-3.5">
          <h1 className="text-xl font-bold text-orange-500 ">
            {data?.SubCat4?.Tittle}
          </h1>
          <p className="text-[#7a7a7a] text-sm leading-6">
            {data?.SubCat4?.Para}

            <ul className="pt-5 pl-4">
              <li className="list-disc">Labelling</li>
              <li className="list-disc">Reverse logistics</li>
              <li className="list-disc">Kitting/Dekitting</li>
              <li className="list-disc">Quality checks</li>
              <li className="list-disc">Refurbishing</li>
            </ul>
          </p>
        </div>
      </div>
      {/* Offerings section*/}

      {/* efficiency your competitive advantage section */}
      <div className="mt-7">
        <h1 className="text-xl font-semibold text-center md:text-2xl lg:text-3xl ">
          {data?.Tittle3}
        </h1>
        <Card data={data} />
      </div>
      {/* efficiency your competitive advantage section */}
      {/* Experience Flexible Warehousing section */}
      <div className="flex flex-col items-start justify-start gap-8 mt-8 lg:flex-row">
        <div className="space-y-3">
          <h1 className="text-lg font-bold md:text-xl lg:text-2xl">
            {data?.Subcat9?.Tittle}
          </h1>
          <h2 className="font-semibold">{data?.Subcat9?.SubTittle}</h2>
          <p className="text-[#777777] leading-7 text-sm">
            {data?.Subcat9?.Para}
          </p>
        </div>
        <img
          className="max-w-sm rounded-lg"
          src={data?.Subcat9?.image}
          alt="img.png"
        />
      </div>
      {/* Experience Flexible Warehousing section */}
      {/* why us section */}
      <div className="mt-7">
        <div className="space-y-3">
          <h1 className="text-lg md:text-xl lg:text-3xl">{data?.Tittle5}</h1>
          <p className="text-[#777777] leading-7 text-sm">{data?.Para5}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3">
          <Icons />
        </div>
      </div>
      {/* why us section */}
    </section>
  );
}

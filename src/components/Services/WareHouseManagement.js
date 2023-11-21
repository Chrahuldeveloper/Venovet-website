import React from "react";
import { Card } from "./index";
import { Icons } from "./../index";
import KeyBeniftsWareHouse from "./KeyBeniftsWareHouse";

export default function WareHouseManagement({ data }) {
  return (
    <section className="mt-5 md:mt-0">
      <div className="space-y-6">
        <h1 className="max-w-sm font-semibold font-poppins md:max-w-full text-[2rem] lg:text-4xl">
          {data?.Tittle1}
        </h1>
        <div className="flex flex-col items-start space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row text-[#7a7a7a] text-justify">
          <p>{data?.Para1}</p>
          <p>{data?.Para2}</p>
        </div>
      </div>
      {/* Offerings section*/}
      <div className="mt-5">
        <h1 className="font-poppins font-medium text-[2rem] lg:text-4xl">
          Our Offerings
        </h1>
        <div className="flex flex-col items-center mt-5 space-y-4 md:items-start lg:space-x-20 lg:flex-row lg:space-y-0">
          <img
            className="max-w-sm lg:w-[20vw] rounded-lg object-cover"
            src={data?.SubCat1?.image}
            alt="imge"
          />
          <div className="max-w-md space-y-3.5 text-justify">
            <h1 className="text-xl font-bold text-orange-500 ">
              {data?.SubCat1?.Tittle}
            </h1>
            <p className="text-justify text-[#7a7a7a] text-sm lg:text-base leading-6">
              {data?.SubCat1?.Para}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4 space-y-4 lg:-mt-6 lg:space-x-20 lg:flex-row lg:space-y-0 ">
        <div className="max-w-md space-y-3.5 text-justify">
          <h1 className="text-xl font-bold text-orange-500 ">
            {data?.SubCat2?.Tittle}
          </h1>
          <p className="text-justify text-[#7a7a7a] text-sm lg:text-base leading-6">
            {data?.SubCat2?.Para}
          </p>
        </div>
        <img
          className="max-w-sm lg:w-[20vw] rounded-lg"
          src={data?.SubCat2?.image}
          alt="imge"
        />
      </div>

      <div className="flex flex-col items-center mt-4 space-y-4 lg:space-x-20 lg:-mt-6 lg:flex-row lg:space-y-0">
        <img
          className="max-w-sm lg:w-[20vw] rounded-lg"
          src={data?.SubCat3?.image}
          alt="imge"
        />
        <div className="max-w-md space-y-3.5 text-justify">
          <h1 className="text-xl font-bold text-orange-500 ">
            {data?.SubCat3?.Tittle}
          </h1>
          <p className="text-justify text-[#7a7a7a] text-sm lg:text-base leading-6">
            {data?.SubCat3?.Para}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4 space-y-4 lg:space-x-20 lg:flex-row lg:space-y-0">
        <div className="max-w-md space-y-3.5">
          <h1 className="text-xl font-bold text-orange-500 ">
            {data?.SubCat4?.Tittle}
          </h1>
          <p className="text-justify text-[#7a7a7a] text-sm  lg:text-base leading-6">
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
        <img
          className="max-w-sm lg:w-[20vw] mx-auto rounded-lg "
          src={data?.SubCat4?.image}W
          alt="imge"
        />
      </div>
      {/* Offerings section*/}
      {/* efficiency your competitive advantage section */}
      <div className="mt-7">
        <h1 className="text-[2rem] font-medium text-center lg:text-4xl ">
          {data?.Tittle3}
        </h1>
        <Card data={data} />
      </div>
      {/* efficiency your competitive advantage section */}
      {/* Experience Flexible Warehousing section */}
      <div className="flex flex-col items-center justify-start gap-8 mt-5 lg:flex-row">
        <div className="space-y-3">
          <h1 className="text-[2rem] font-bold lg:text-4xl">
            {data?.Subcat9?.Tittle}
          </h1>
          <h2 className="font-semibold">{data?.Subcat9?.SubTittle}</h2>
          <p className="text-justify text-[#777777] leading-7 text-sm lg:text-base">
            {data?.Subcat9?.Para}
          </p>
        </div>
        <img
          className="max-w-sm lg:w-[30vw]  rounded-lg"
          src={data?.Subcat9?.image}
          alt="img.png"
        />
      </div>
      {/* Experience Flexible Warehousing section */}
      {/* why us section */}
      <div className="mt-4">
        <div className="space-y-3">
          <h1 className="text-[2rem] font-semibold lg:text-4xl">
            {data?.Tittle5}
          </h1>
          <p className="text-justify text-[#777777] leading-7 text-sm lg:text-base">
            {data?.Para5}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3">
          <Icons />
        </div>
      </div>
      {/* why us section */}
      {/* key benifits section */}
      <KeyBeniftsWareHouse />
    </section>
  );
}

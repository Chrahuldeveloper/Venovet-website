import React from "react";
import { venovetChart } from "../../images/index";
import { KeyBenifits } from "../../components/index";
import {
  why1,
  why2,
  why3,
  why4,
  why5,
  why6,
} from "../../images/services/WHY-US";

export default function WhoWeServeContent({ data }) {
  const WhyUsData = [
    {
      image: why1,
      Tittle: "Transparent Pricing         ",
    },
    {
      image: why2,
      Tittle: "Real-Time Tracking",
    },
    {
      image: why3,
      Tittle: "Warehouse Storage",
    },
    {
      image: why4,
      Tittle: "Security For Cargo",
    },
    {
      image: why5,
      Tittle: "Payment Methods",
    },
    {
      image: why6,
      Tittle: "24/7 Hours Support",
    },
  ];

  return (
    <section className="md:max-w-3xl max-w-xs p-4 px-0">
      <div className="space-y-4 text-[#7a7a7a]">
        <h1 className="font-semibold font-poppins text-black text-2xl md:text-3xl lg:text-4xl">
          {data?.Title1}
        </h1>
        <p className="text-justify">{data?.Overview}</p>
      </div>

      <div className="mt-7">
        <h1 className="font-semibold font-poppins text-black text-2xl md:text-3xl lg:text-4xl">
          {data?.Title2}
        </h1>
        <div className="flex flex-col items-start gap-5 mt-5 ">
          <div className="space-y-4 text-[#7a7a7a]">
            <p className="text-justify">{data?.Stats}</p>
          </div>
          <div className="flex w-full items-center justify-center">
            <img
              src={data?.ChartImage}
              // alt={venovetChart}
              alt=""
              className=""
            />
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-7">
        <h1 className="font-semibold font-poppins text-black text-2xl md:text-3xl lg:text-4xl">
          {data?.Title3}
        </h1>
        <p className="text-[#7a7a7a] leading-8">
          <span className="text-justify">{data?.How}</span>
        </p>
        <div className="flex items-center justify-center w-full">
          <img src={data?.Image} alt="" />
        </div>
      </div>

      <div className="space-y-4 mt-7">
        <h1 className="font-semibold font-poppins text-black text-2xl md:text-3xl lg:text-4xl">
          {data?.Title4}
        </h1>
        <p className="text-[#7a7a7a] leading-8">{data?.Why}</p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WhyUsData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="p-3 space-y-3 text-center shadow-xl rounded-xl">
                  <img src={item.image} alt={index} className="mx-auto" />
                  <h1 className="text-lg font-semibold md:text-xl ">
                    {item.Tittle}
                  </h1>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {/* Key Benifits */}
      <KeyBenifits />
    </section>
  );
}

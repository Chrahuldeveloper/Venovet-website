import React from "react";
import { venovetChart } from "../../images/index";
import { KeyBenifits } from "../../components/index";

export default function WhoWeServeContent({ data }) {
  const WhyUsData = [
    {
      image: "https://venovet.com/assets/images/icon.png",
      Tittle: "Transparent Pricing         ",
    },
    {
      image: "https://venovet.com/assets/images/icon-1.png",
      Tittle: "Real-Time Tracking",
    },
    {
      image: "https://venovet.com/assets/images/icon-5.png",
      Tittle: "Warehouse Storage",
    },
    {
      image: "https://venovet.com/assets/images/icon-2.png",
      Tittle: "Security For Cargo",
    },
    {
      image: "https://venovet.com/assets/images/icon-3.png",
      Tittle: "Payment Methods",
    },
    {
      image: "https://venovet.com/assets/images/icon-4.png",
      Tittle: "24/7 Hours Support",
    },
  ];

  return (
    <section className="md:max-w-3xl max-w-xs p-4 pr-6 md:pr-4">
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
        <div className="flex flex-col items-start gap-5 mt-5 md:flex-row">
          <div className="space-y-4 text-[#7a7a7a]">
            <p className="text-justify">{data?.Stats}</p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={venovetChart}
              alt={venovetChart}
              className="w-52 md:w-auto md:max-w-md"
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
        <img src={data?.Image} alt="" />
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

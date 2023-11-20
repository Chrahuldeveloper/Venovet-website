import React from "react";
import {
  log1,
  log2,
  log3,
  log4,
  log5,
  log6,
  log7,
  log8,
  log9,
  log10,
  log11,
} from "../../images/logo/index";
import ScrollContainer from "react-indiana-drag-scroll";
export default function InternetSupply({ data }) {
  const UncontendedData = [
    {
      image: "https://venovet.com/assets/images/sicon1.png",
      Titttle: `${data?.SubCat3?.Tittle}`,
      Para: `${data?.SubCat3?.Para}`,
    },
    {
      image: "https://venovet.com/assets/images/sicon2.png",
      Titttle: `${data?.SubCat4?.Tittle}`,
      Para: `${data?.SubCat4?.Para}`,
    },
    {
      image: "https://venovet.com/assets/images/sicon4.png",
      Titttle: `${data?.SubCat5?.Tittle}`,
      Para: `${data?.SubCat5?.Para}`,
    },
    {
      image: "https://venovet.com/assets/images/sicon6.png",
      Titttle: `${data?.SubCat6?.Tittle}`,
      Para: `${data?.SubCat6?.Para}`,
    },
    {
      image: "https://venovet.com/assets/images/sicon6.png",
      Titttle: `${data?.SubCat7?.Tittle}`,
      Para: `${data?.SubCat7?.Para}`,
    },
    {
      image: "https://venovet.com/assets/images/sicon3.png",
      Titttle: `${data?.SubCat16?.Tittle}`,
      Para: `${data?.SubCat16?.Para}`,
    },
  ];

  const OnboardData = [
    {
      icon: "https://venovet.com/assets/images/sicon13.png",
      Titttle: `${data?.SubCat9?.Tittle}`,
      Para: `${data?.SubCat9?.Para}`,
    },
    {
      icon: "https://venovet.com/assets/images/sicon14.png",
      Titttle: `${data?.SubCat10?.Tittle}`,
      Para: `${data?.SubCat10?.Para}`,
    },
    {
      icon: "https://venovet.com/assets/images/sicon15.png",
      Titttle: `${data?.SubCat11?.Tittle}`,
      Para: `${data?.SubCat11?.Para}`,
    },
    {
      icon: "https://venovet.com/assets/images/sicon16.png",
      Titttle: `${data?.SubCat12?.Tittle}`,
      Para: `${data?.SubCat12?.Para}`,
    },
    {
      icon: "https://venovet.com/assets/images/sicon17.png",
      Titttle: `${data?.SubCat13?.Tittle}`,
      Para: `${data?.SubCat13?.Para}`,
    },
  ];

  const AdvantagesData = [
    {
      image: log7,
      Para: "High Speed Internet Connection",
    },
    {
      image: log8,
      Para: "Carrier-grade Connectivity",
    },
    {
      image: log9,
      Para: "Widespread Reach",
    },
    {
      image: log10,
      Para: "End-to-end Service Level Agreement",
    },
    {
      image: log11,
      Para: "User Friendly Web Tool",
    },
  ];

  const Efficiency = [
    {
      image: log1,
      Para: "Higher Availability Connection with enterprise grade SLA",
    },
    {
      image: log2,
      Para: "Enterprise CPE with SD-WAN capability",
    },
    {
      image: log3,
      Para: "Constant IP configurations in LAN & Server network",
    },
    {
      image: log4,
      Para: "Single Contract covering multiple connection",
    },
    {
      image: log5,
      Para: "Regulatory compliant",
    },
    {
      image: log6,
      Para: "Pay as you grow model",
    },
  ];

  return (
    <section>
      {/* section 1 */}
      <div>
        <h1 className="text-xl font-semibold text-center lg:text-3xl font-poppins">
          Accelerate your business growth with high-performance Internet leased
          line connection
        </h1>
        <div>
          <div className="flex flex-col items-start text-justify lg:flex-row mt-7 gap-7">
            <img
              className="max-w-xs rounded-lg md:max-w-sm lg:order-2"
              src={data?.SubCat1?.image}
              alt="imge"
            />
            <p className="text-justify text-[#7a7a7a] text-sm leading-6">
              {data?.SubCat1?.Para}
            </p>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="mt-5">
        <h1 className="text-xl font-semibold lg:text-sm font-poppins">
          A leased line network that is dedicated solely to your business needs
        </h1>
        <div className="flex flex-col items-start lg:flex-row mt-7 gap-7">
          <img
            className="max-w-xs rounded-lg "
            src={data?.SubCat1?.image}
            alt="imge"
          />
          <p className="text-justify text-[#7a7a7a] text-sm leading-6">
            {data?.SubCat1?.Para}
          </p>
        </div>
      </div>

      <div className="mt-7">
        <h1 className="text-xl font-semibold text-center lg:text-3xl font-poppins">
          Uncontended connection
        </h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mt-7">
          {UncontendedData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-start max-w-md gap-5 p-6 shadow-md"
              >
                <img src={item.image} alt={item.image} className="w-10 h-10" />
                <div className="space-y-1.5">
                  <h1 className="text-lg font-bold">{item.Titttle}</h1>
                  <p className="text-justify text-[#7a7a7a]">{item.Para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-xl font-semibold lg:text-3xl font-poppins">
          {data?.SubCat8?.Tittle}
        </h1>
        <div className="flex flex-col items-start lg:flex-row mt-7 gap-7">
          <img
            className="max-w-xs rounded-lg "
            src={data?.SubCat8?.image}
            alt="imge "
          />
          <p className="text-justify text-[#7a7a7a]  leading-6">
            {data?.SubCat8?.Para}
          </p>
        </div>
      </div>

      <div>
        <h1 className="mt-10 text-xl font-semibold font-poppins">
          Better Speed, Better Efficiency
        </h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mt-7">
          {Efficiency.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-start max-w-md gap-5 p-6 shadow-md"
              >
                <img src={item.image} alt={item.image} className="w-10 h-10" />
                <div className="space-y-1.5">
                  <h1 className="text-lg font-semibold">{item.Para}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll OnboardData  */}
      <ScrollContainer className="flex flex-col justify-center max-w-3xl mx-auto mt-8 border-2">
        {OnboardData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex gap-5 p-4 shadow-sm">
                <img className="w-8 h-8" src={item.icon} alt={item.icon} />
                <div>
                  <h1 className="max-w-md text-sm font-semibold md:text-xl lg:text-2xl">
                    {item.Titttle}
                  </h1>
                  <p className="text-justify my-3 text-[#7a7a7a] max-w-xl text-xs md:text-base">
                    {item.Para}
                  </p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </ScrollContainer>

      <div className="mt-8 space-y-5">
        <h1 className="text-xl font-semibold lg:text-3xl font-poppins">
          {data?.SubCat14?.Tittle}
        </h1>
        <p className="text-justify text-[#7a7a7a]">{data?.SubCat14?.Para}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-3">
        {AdvantagesData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex gap-5 p-4 shadow-sm border-[1px] border-gray-300 max-w-sm">
                <img className="w-8 h-8" src={item.image} alt={item.image} />
                <p className="text-justify text-[#7a7a7a]">{item.Para}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-8 space-y-5">
        <h1 className="text-xl font-semibold lg:text-3xl font-poppins">
          {data?.SubCat15?.Tittle}
        </h1>
        <p className="text-justify text-[#7a7a7a]">{data?.SubCat15?.Para}</p>
      </div>

      <div className="mt-8 space-y-5 text-justify">
        <h1 className="text-xl font-semibold lg:text-3xl font-poppins">
          Why Us?
        </h1>
        <ul className="text-[#7a7a7a]">
          <li className="list-disc">
            We have amongst the largest internet connectivity in India, leading
            to minimal congestion and better configuration for enhanced
            performance.
          </li>
          <li className="list-disc">
            With the widest suite of products & services, you don't need to look
            any further.
          </li>
          <li className="list-disc">
            Our relationship managers & solution architects design what is best
            for you.
          </li>
          <li className="list-disc">
            We are a dedicated team of over 2000 professionals working
            tirelessly to serve you.
          </li>
          <li className="list-disc">
            Our reach is unparalleled with 125000 km of network, 750+ partners,
            1600+ Channel teams.
          </li>
          <li className="list-disc">
            Our customers trust us and the industry recognizes our innovations.
          </li>
        </ul>
      </div>
    </section>
  );
}

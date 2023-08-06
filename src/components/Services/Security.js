import React from "react";

const data = [
  {
    Title: "Security Guards Services",
    p: "At Venovet, our security personnel understand the specialized needs of customer environment.",
    png: "https://venovet.com/assets/images/service-01.png",
  },
  {
    Title: "Gun Man Security Services",
    p: "At Venovet, our security personnel understand the specialized needs of customer environment.",
    png: "https://venovet.com/assets/images/service-02.png",
  },
];

const card = [
  {
    img: "https://venovet.com/assets/images/adventure-1.jpg",
    Title: "24/7 CONSTANT SUPPORT",
    p: "At Venovet, our security personnel understand the specialized needs of customer environment.",
  },
  {
    img: "https://venovet.com/assets/images/adventure-2.jpg",
    Title: "24/7 CONSTANT SUPPORT",
    p: "At Venovet, our security personnel understand the specialized needs of customer environment.",
  },
  {
    img: "https://venovet.com/assets/images/adventure-3.jpg",
    Title: "24/7 CONSTANT SUPPORT",
    p: "At Venovet, our security personnel understand the specialized needs of customer environment.",
  },
];

function Security() {
  return (
    <div>
      <div className="space-y-3 py-10">
        <h1 className="font-bold text-2xl">INDUSTRIAL SECURITY</h1>
        <p className="text-[#777777] text-sm md:text-lg">
          The Company envisions a diversification of its specialized services of
          regular , to equip and excel in Quick Response Team (QRT), Fire
          Fighting, First Aid and Risk Management. The ability and strength to
          deploy a team within a short notice. These teams are trained for swift
          and instant action in times of crisis and threat. The focus is also on
          training and providing multi-tasking to employees like Guards cum
          Electricians, Housekeeping and Guarding, Guard cum Driving services
          etc.
        </p>
      </div>

      {/* Services ...... */}
      <div className="flex flex-col items-center space-y-3">
        <h1 className="font-bold text-2xl">OUR BEST SERVICES</h1>
        <p>
          At Venovet, our security personnel understand the specialized needs of
          customer environment.
        </p>
        <div className="lg:flex items-center justify-around pt-4 lg:space-x-6">
          <div className="space-y-5">
            {data.map((item, index) => {
              return (
                <div className="flex flex-row-reverse lg:flex-row md:space-x-3">
                  <div className="flex flex-col lg:text-right max-w-xs space-y-4">
                    <p className="font-bold">{item.Title}</p>
                    <p className="text-[#777777]">{item.p}</p>
                  </div>
                  <div className="flex h-9 md:h-12 border-blue-500 border-2 p-1 md:p-2">
                    <img src={item.png} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="space-y-5">
            {data.map((item, index) => {
              return (
                <div className="flex space-x-3">
                  <div className="flex  h-12 border-orange-500 border-2 p-2">
                    <img src={item.png} alt="" />
                  </div>
                  <div className="flex flex-col text-left max-w-xs space-y-4">
                    <p className="font-bold">{item.Title}</p>
                    <p className="text-[#777777]">{item.p}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* OUR ADVANTAGES .....  */}
      <div className="py-20">
        <div className="flex flex-col items-center space-y-3">
          <h1 className="font-bold text-3xl">OUR ADVANTAGES</h1>
          <p>
            At Venovet, our security personnel understand the specialized needs
            of customer environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-10">
          {card.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center p-3 rounded-lg shadow-xl py-5 w-64 h-[23rem] space-y-4"
              >
                <img className="w-52 rounded-lg" src={item.img} alt="" />
                <p className="text-[#ff5e14] font-semibold hover:text-[#007bff] cursor-pointer">
                  {item.Title}
                </p>
                <p className="text-center">{item.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Security;

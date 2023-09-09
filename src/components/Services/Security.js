import React from "react";

function Security() {
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

  return (
    <div>
      <div className="py-10 space-y-3">
        <h1 className="text-2xl font-bold">{data.Tittle1}</h1>
        <p className="text-[#777777] text-sm md:text-lg">{data.Para1}</p>
      </div>
      {/* Services ...... */}
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-2xl font-bold">{data.Tittle2}</h1>
        <p>{data.Para2}</p>
        <div className="items-center justify-around pt-4 lg:flex lg:space-x-6">
          <div className="space-y-5">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row-reverse lg:flex-row md:space-x-3"
                >
                  <div className="flex flex-col max-w-xs space-y-4 lg:text-right">
                    <p className="font-bold">{item.Title}</p>
                    <p className="text-[#777777]">{item.p}</p>
                  </div>
                  <div className="flex p-1 border-2 border-blue-500 h-9 md:h-12 md:p-2">
                    <img src={item.png} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="space-y-5">
            {data.map((item, index) => {
              return (
                <div key={index} className="flex space-x-3">
                  <div className="flex h-12 p-2 border-2 border-orange-500">
                    <img src={item.png} alt="" />
                  </div>
                  <div className="flex flex-col max-w-xs space-y-4 text-left">
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
          <h1 className="text-3xl font-bold">{data.Tittle3}</h1>
          <p>{data.Tittle3}</p>
        </div>
        <div className="grid pt-10 md:grid-cols-2 lg:grid-cols-3">
          {card.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center p-3 rounded-lg shadow-xl py-5 w-64 h-[23rem] space-y-4"
              >
                <img className="rounded-lg w-52" src={item.img} alt="" />
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

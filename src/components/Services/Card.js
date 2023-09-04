import React from "react";

export default function Card() {
  const CardData = [
    {
      image: "https://venovet.com/assets/images/icon4.png",
      Tittle : "Quality & Compliance",
      Para:"Our warehouses are compliant with CLU & government regulations and adhere to the 5S methodology. We have implemented TQM with centralised monitoring and conduct periodic audits.      ",
    },
    {
      image: "https://venovet.com/assets/images/icon2.png",
      Tittle:"Safety & Security",
      Para:"We aim to provide a safe & ergonomic working environment to maximise ‘Accident-free days’. All our facilities have 24*7 security surveillance across all areas."
    },
    {
      image: "https://venovet.com/assets/images/icon3.png",
      Tittle:"Robust Technology",
      Para:"A dedicated and robust Warehouse Management System (WMS) and Transport Management System (TMS) helps us ensure greater operational efficiency."
    },
    {
      image: "https://venovet.com/assets/images/icon1.png",
      Tittle:"World Class Infrastructure",
      Para:"Our warehouses are equipped with state-of-the-art Material Handling Equipment (MHE), coding machines, racking systems and a host of other best-in-class facilities."
    },
  ];

  return (
    <div className="grid justify-center grid-cols-1 gap-5 mt-7 lg:gap-8 lg:grid-cols-2">
      {CardData.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <div className="bg-[#fff3e1]  flex items-start max-w-md gap-4 p-5 rounded-lg">
              <img src={_.image} className="w-10 h-10" alt={index} />
              <div className="space-y-2">
                <h1 className="text-lg font-semibold">{_.Tittle}</h1>
                <p className="text-[#7a7a7a] lg:text-sm ">{_.Para}</p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

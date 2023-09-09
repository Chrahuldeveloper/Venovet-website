import React from "react";

export default function Card({ data }) {
  const CardData = [
    {
      image: "https://venovet.com/assets/images/icon4.png",
      Tittle: `${data?.SubCat5?.Tittle}`,
      Para: `${data?.SubCat5?.Tittle}`,
    },
    {
      image: "https://venovet.com/assets/images/icon2.png",
      Tittle: `${data?.SubCat6?.Tittle}`,
      Para: `${data?.SubCat6?.Tittle}`,
    },
    {
      image: "https://venovet.com/assets/images/icon3.png",
      Tittle: `${data?.SubCat7?.Tittle}`,
      Para: `${data?.SubCat7?.Tittle}`,
    },
    {
      image: "https://venovet.com/assets/images/icon1.png",
      Tittle: `${data?.SubCat8?.Tittle}`,
      Para: `${data?.SubCat8?.Tittle}`,
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

import React from "react";
import { icon1, icon2, icon3, icon4 } from "../../images/services/Card";
import DOMPurify from "dompurify";

export default function Card({ data }) {
  const CardData = [
    {
      image: icon4,
      Tittle: `${data?.SubCat5?.Tittle}`,
      Para: `${data?.SubCat5?.Para}`,
    },
    {
      image: icon2,
      Tittle: `${data?.SubCat6?.Tittle}`,
      Para: `${data?.SubCat6?.Para}`,
    },
    {
      image: icon3,
      Tittle: `${data?.SubCat7?.Tittle}`,
      Para: `${data?.SubCat7?.Para}`,
    },
    {
      image: icon1,
      Tittle: `${data?.SubCat8?.Tittle}`,
      Para: `${data?.SubCat8?.Para}`,
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
                <p
                  className="text-[#7a7a7a] lg:text-sm "
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.Para1),
                  }}
                />
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

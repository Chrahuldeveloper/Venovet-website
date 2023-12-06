import React from "react";
import {
  sec1,
  sec2,
  sec3,
  sec4,
  sec5,
  sec6,
  sec7,
  sec8,
  sec9,
  sec10,
} from "../../images/services/security";

function Security({ data }) {
  const picdata = [
    {
      Title: `${data?.SubCat3?.Tittle}`,
      p: `${data?.SubCat3?.Para}`,
      png: sec1,
    },
    {
      Title: `${data?.SubCat4?.Tittle}`,
      p: `${data?.SubCat4?.Para}`,
      png: sec2,
    },
    {
      Title: `${data?.SubCat5?.Tittle}`,
      p: `${data?.SubCat5?.Para}`,
      png: sec3,
    },
    {
      Title: `${data?.SubCat6?.Tittle}`,
      p: `${data?.SubCat6?.Para}`,
      png: sec4,
    },
    {
      Title: `${data?.SubCat7?.Tittle}`,
      p: `${data?.SubCat7?.Para}`,
      png: sec5,
    },
    {
      Title: `${data?.SubCat8?.Tittle}`,
      p: `${data?.SubCat8?.Para}`,
      png: sec6,
    },
    {
      Title: `${data?.SubCat9?.Tittle}`,
      p: `${data?.SubCat9?.Para}`,
      png: sec9,
    },
    {
      Title: `${data?.SubCat10?.Tittle}`,
      p: `${data?.SubCat10?.Para}`,
      png: sec10,
    },
  ];

  const card = [
    {
      img: `${data?.SubCat11?.image}`,
      Title: `${data?.SubCat11?.Tittle}`,
      p: `${data?.SubCat11?.Para}`,
    },
    {
      img: `${data?.SubCat12?.image}`,
      Title: `${data?.SubCat12?.Tittle}`,
      p: `${data?.SubCat12?.Para}`,
    },
    {
      img: `${data?.SubCat13?.image}`,
      Title: `${data?.SubCat13?.Tittle}`,
      p: `${data?.SubCat13?.Para}`,
    },
  ];

  return (
    <div>
      <div className="py-10 space-y-3">
        <h1 className="text-2xl font-bold">{data?.Tittle1}</h1>
        <p className="text-[#777777] text-sm md:text-lg">{data?.Para1}</p>
      </div>
      {/* Services ...... */}
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-2xl font-bold">{data?.Tittle2}</h1>
        <p>{data?.Para2}</p>
        <div className="items-center justify-around pt-4 lg:flex lg:space-x-6">
          <div className="grid space-y-5 md:space-y-0 lg:pt-8 md:grid-cols-2 md:gap-y-5">
            {picdata.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex    items-center ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                  }  md:space-x-4`}
                >
                  <div
                    className={`flex flex-col max-w-xs space-y-4 ${
                      index % 2 !== 0 ? "lg:text-left pl-3" : "lg:text-right"
                    }  `}
                  >
                    <p className="font-bold">{item.Title}</p>
                    <p className="text-[#777777]">{item.p}</p>
                  </div>
                  <div
                    className={`flex p-1  border-2 ${
                      index % 2 !== 0 ? "border-orange-500 " : "border-blue-500"
                    }  h-9 md:h-12 md:p-2`}
                  >
                    <img src={item.png} alt="" />
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
          <h1 className="text-3xl font-bold">{data?.Tittle3}</h1>
          <p>{data?.Tittle3}</p>
        </div>
        <div className="grid pt-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
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

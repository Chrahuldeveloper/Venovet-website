import React from "react";
import {
  re1,
  re2,
  re3,
  re4,
  re5,
  re6,
  re7,
  re8,
  re9,
  re10,
  re11,
  s32,
} from "../../images/services/RealEstate";

function RealEstate({ data }) {
  const card = [
    {
      png: re1,
      Title: `${data?.SubCat2?.Tittle}`,
      p: `${data?.SubCat2?.Para}`,
    },
    {
      png: re2,
      Title: `${data?.SubCat3?.Tittle}`,
      p: `${data?.SubCat3?.Para}`,
    },
    {
      png: re3,
      Title: `${data?.SubCat4?.Tittle}`,
      p: `${data?.SubCat4?.Para}`,
    },
    {
      png: re4,
      Title: `${data?.SubCat5?.Tittle}`,
      p: `${data?.SubCat5?.Para}`,
    },
  ];

  const classification = [
    {
      img: re5,
      Title: `${data?.SubCat6?.Tittle}`,
      p: `${data?.SubCat6?.Para}`,
    },
    {
      img: re6,
      Title: `${data?.SubCat7?.Tittle}`,
      p: `${data?.SubCat7?.Para}`,
    },
    {
      img: re7,
      Title: `${data?.SubCat8?.Tittle}`,
      p: `${data?.SubCat8?.Para}`,
    },
  ];

  const Everyone = [
    {
      img: re8,
      T: `${data?.SubCat9?.Tittle}`,
      p: `${data?.SubCat9?.Para}`,
    },
    {
      img: re9,
      T: `${data?.SubCat10?.Tittle}`,
      p: `${data?.SubCat10?.Para}`,
    },
    {
      img: re10,
      T: `${data?.SubCat11?.Tittle}`,
      p: `${data?.SubCat11?.Para}`,
    },
    {
      img: re11,
      T: `${data?.SubCat12?.Tittle}`,
      p: `${data?.SubCat12?.Para}`,
    },
  ];

  return (
    <div>
      <div>
        <h1 className="pb-8 text-xl font-bold">{data?.SubCat1?.Tittle}</h1>
        <div className="space-x-4 lg:flex">
          <img
            className="max-w-xs lg:max-w-[50%] rounded-md"
            src={data?.SubCat1?.image}
            alt=""
          />
          <div className="space-y-6 max-w-md lg:max-w-none text-[#777777] text-justify">
            {data?.SubCat1?.Para}
          </div>
        </div>
      </div>

      {/* second section ... */}
      <div className="py-10">
        <h1 className="py-8 text-xl font-bold">{data?.Tittle1}</h1>
        <div className="space-x-8 lg:flex lg:justify-between">
          <img className="h-[45rem] rounded-md" src={s32} alt="" />
          <div className="">
            {card.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex space-x-4 h-[32vh] lg:h-auto shadow-lg px-4 py-8 rounded-lg bg-white my-2"
                >
                  <img className="w-10 h-10" src={item.png} alt={item.png} />
                  <div className="max-w-xs space-y-2 text-justify">
                    <h1 className="font-bold">{item.Title}</h1>
                    <p className="text-[#777777]">{item.p}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Third section .... */}
      <div className="flex flex-col items-center py-10 ">
        <h1 className="max-w-lg text-2xl font-bold text-center">
          Easy classification to get you going fast, Lease warehouse in three
          simple steps
        </h1>
        <div className="justify-around pt-10 space-x-4 space-y-8 lg:flex lg:space-y-0">
          {classification.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-justify"
              >
                <img src={item.img} alt="" />
                <h1>{item.Title}</h1>
                <p className="text-[#777777] text-center max-w-xs">{item.p}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Warehouse for ervery one ... */}
      <div className="my-10">
        <h1 className="text-xl font-bold">Warehouse for Everyone</h1>
        <div className="grid gap-4 pt-10 lg:grid-cols-2">
          {Everyone.map((item, index) => {
            return (
              <div
                key={index}
                className="flex p-6 px-4 space-x-4 bg-white rounded-lg shadow-lg text-justify"
              >
                <img className="w-10 h-10" src={item.img} alt="" />
                <div>
                  <p className="font-bold">{item.T}</p>
                  <p className="text-[#777777]">{item.p}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RealEstate;

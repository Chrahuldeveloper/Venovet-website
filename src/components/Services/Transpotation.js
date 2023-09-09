import React from "react";
import vechilesData from "../../Data/Vehicles";
export default function Transpotation({ data }) {
  const section1 = [
    {
      image: `${data?.image1}`,
      Para: `${data?.Para1}`,
    },
    {
      image: `${data?.image2}`,
      Para: `${data?.Para2}`,
    },
    {
      image: `${data?.image3}`,
      Para: `${data?.Para3}`,
    },
    {
      image: `${data?.image4}`,
      Para: `${data?.Para4}`,
    },
  ];

  const section3 = [
    {
      image: `${data?.image5}`,
      Para: `${data?.Para5}`,
    },
  ];

  return (
    <>
      <div className="space-y-3.5">
        {section1.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col items-start gap-5 md:flex-row">
                <img src={item.image} alt={i} className="max-w-sm rounded-lg" />
                <div className="text-[#7a7a7a] space-y-3">
                  <p>{item.Para}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="text-[#7a7a7a] space-y-3.5 mt-5">
        <p>{data?.Para6}</p>
        <p>{data?.Para7}</p>
      </div>
      <div className="mt-6 space-y-7">
        {section3.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col items-start gap-8 md:flex-row">
                <img src={item.image} alt={i} className="max-w-sm rounded-lg" />
                <p>{item.Para}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-7">
        <h1 className="font-semibold md:text-xl ">
          Types Of Vehicles We Provide
        </h1>
        <div className="grid grid-cols-4 gap-3 mt-5 place-items-center">
          {vechilesData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="max-w-xs p-5 text-center rounded-lg shadow-md">
                  <h1>{item.Name}</h1>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

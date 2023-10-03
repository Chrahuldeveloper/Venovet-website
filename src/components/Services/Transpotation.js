import React from "react";
import vechilesData from "../../Data/Vehicles";
export default function Transpotation({ data }) {
  const section1 = [
    {
      image: `${data?.image1?.image}`,
      Para: `${data?.Para1}`,
    },
    {
      image: `${data?.image2?.image}`,
      Para: `${data?.Para2}`,
    },
    {
      image: `${data?.image3?.image}`,
      Para: `${data?.Para3}`,
    },
    {
      image: `${data?.image4?.image}`,
      Para: `${data?.Para4}`,
    },
  ];

  const section3 = [
    {
      image: `${data?.image5?.image}`,
      Para: `${data?.Para5}`,
    },
    {
      image: `${data?.image6?.image}`,
      Para: `${data?.Para5}`,
    },
  ];

  return (
    <>
      <div className="bg-[#ff5e15] border-white border-4 max-w-[70vw] md:max-w-[35vw] lg:max-w-[19vw] rounded-lg p-10 translate-y-72 translate-x-28">
        <h1 className="text-xl text-center font-semibold  text-white font-poppins ">
          Road <br /> Transportation
        </h1>
      </div>
      <div className="space-y-3.5 -mt-20">
        {section1.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col justify-center gap-5 mx-auto md:items-start md:flex-row ">
                <img
                  src={item.image}
                  alt={i}
                  className="rounded-lg w-80 h-60"
                />
                <div className="text-[#7a7a7a] space-y-3 max-w-lg">
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
        <div className="grid gap-3 mt-5 grid-col-1 md:grid-cols-3 lg:grid-col-4 place-items-center">
          {vechilesData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className=" w-full p-7  lg:w-44 text-sm bg-[#f7f7f750] lg:p-5 text-center rounded-lg shadow-md">
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

import React from "react";
import vechilesData from "../../Data/Vehicles";
import DOMPurify from "dompurify";
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
      // Para: `${data?.Para5}`,
    },
  ];

  return (
    <>
      <div className="bg-[#ff5e15] hidden lg:block border-white border-4 max-w-[70vw] md:max-w-[35vw] lg:max-w-[19vw] rounded-lg p-9 translate-y-72  -translate-x-1">
        <h1 className="text-xl font-semibold text-center text-white font-poppins ">
          Road <br /> Transportation
        </h1>
      </div>
      <div className="space-y-2 md:-mt-0 lg:-mt-20">
        {section1.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center justify-center gap-10  md:items-start md:flex-row">
                {/* <div className="lg:rem]"> */}
                <img
                  src={item.image}
                  alt={i}
                  className="lg:max-w-[40%] rounded-lg"
                />
                {/* </div> */}
                <div className="text-[#7a7a7a] space-y-3 text-start text-sm lg:text-justify lg:text-base">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.Para),
                    }}
                  />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="text-[#7a7a7a] space-y-3.5 mt-5 text-start text-sm lg:text-base">
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.Para6),
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.Para7),
          }}
        />
      </div>
      <div className="mt-6 space-y-7">
        {section3.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center justify-center gap-10  md:items-start md:flex-row">
                {item.image ? (
                  <img
                    src={item.image}
                    alt=""
                    className="lg:max-w-[40%] rounded-lg"
                  />
                ) : null}
                <div className="text-[#7a7a7a] space-y-3 text-start text-sm lg:text-justify lg:text-base">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item?.Para),
                    }}
                  />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="mt-7">
        <h1 className="font-semibold md:text-xl">
          Types Of Vehicles We Provide
        </h1>
        <div className="grid gap-3 mt-5 grid-col-1 md:grid-cols-3 lg:grid-col-4 place-items-center">
          {vechilesData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className=" w-full p-7 lg:w-44 text-sm bg-[#f7f7f750] lg:p-5 text-center rounded-lg shadow-md">
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.Name),
                    }}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

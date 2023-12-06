import React, { useState } from "react";
import {
  FacilityServices,
  GUESTHOUSEMANAGEMENT,
  HouseKeeping,
  PestControl,
  StationeryPrinting,
  TECHNICALSERVICES,
} from "./FacilityManagement/index";
function Facility({ data }) {
  const [filterSubcategory, setfilterSubcategory] = useState();

  const FacilitySubCatogery = [
    "FACILITY SERVICES",
    "HOUSE KEEPING",
    "STATIONERY & PRINTING",
    "PEST CONTROL",
    "GUEST HOUSE MANAGEMENT",
    "TECHNICAL SERVICES",
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="text-[1.75rem] font-semibold font-poppins md:text-3xl lg:text-4xl">
          {data?.Tittle1}
        </h1>
        <p className="text-[#7a7a7a] ">{data?.Para1}</p>
      </div>
      <div className="border-[1px] border-gray-200 p-5 md:p-10 mt-7">
        <div className="grid grid-cols-3 gap-1 lg:flex lg:items-center lg:gap-5">
          {FacilitySubCatogery.map((_) => {
            return (
              <>
                <div
                  key={_}
                  onClick={() => {
                    setfilterSubcategory(_);
                  }}
                  className={`p-4 px-2 md:p-4 text-xs cursor-pointer font-semibold rounded-lg  ${
                    filterSubcategory === _
                      ? "bg-orange-500 text-white"
                      : "bg-[#f3f3f3] transition duration-500 ease-in-out hover:bg-orange-500 hover:text-white"
                  } `}
                >
                  <h1>{_}</h1>
                </div>
              </>
            );
          })}
        </div>
        {filterSubcategory === "FACILITY SERVICES" ? (
          <FacilityServices data={data} />
        ) : filterSubcategory === "HOUSE KEEPING" ? (
          <HouseKeeping data={data} />
        ) : filterSubcategory === "STATIONERY & PRINTING" ? (
          <StationeryPrinting data={data} />
        ) : filterSubcategory === "PEST CONTROL" ? (
          <PestControl data={data} />
        ) : filterSubcategory === "GUEST HOUSE MANAGEMENT" ? (
          <GUESTHOUSEMANAGEMENT data={data} />
        ) : filterSubcategory === "TECHNICAL SERVICES" ? (
          <TECHNICALSERVICES data={data} />
        ) : (
          <FacilityServices data={data} />
        )}
      </div>
    </div>
  );
}

export default Facility;

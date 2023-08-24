import React, { useState } from "react";
import {
  FacilityServices,
  GUESTHOUSEMANAGEMENT,
  HouseKeeping,
  PestControl,
  StationeryPrinting,
  TECHNICALSERVICES,
} from "./FacilityManagement/index";
function Facility() {
  const FacilitySubCatogery = [
    "FACILITY SERVICES",
    "HOUSE KEEPING",
    "STATIONERY & PRINTING",
    "PEST CONTROL",
    "GUEST HOUSE MANAGEMENT",
    "TECHNICAL SERVICES",
  ];

  const [filterSubcategory, setfilterSubcategory] = useState();

  return (
    <div>
      <div className="flex flex-col justify-center space-y-5 items-center">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
          Facility - Management
        </h1>
        <p className="text-[#7a7a7a] ">
          Facilities management can be defined as the tools and services that
          support the functionality, safety, and sustainability of buildings,
          grounds, infrastructure, and real estate. Facilities management
          includes: Lease management, including lease administration and
          accounting. Emergency management and business continuity.
        </p>
      </div>
      <div className="border-[1px] border-gray-200 p-6 mt-7">
        <div className="grid grid-cols-3 gap-5 lg:flex lg:items-center lg:gap-5">
          {FacilitySubCatogery.map((_) => {
            return (
              <>
                <div
                  onClick={() => {
                    setfilterSubcategory(_);
                  }}
                  className="p-4 text-sm cursor-pointer font-semibold rounded-lg bg-[#f3f3f3] hover:bg-orange-500 hover:text-white"
                >
                  <h1>{_}</h1>
                </div>
              </>
            );
          })}
        </div>
        {filterSubcategory === "FACILITY SERVICES" ? (
          <FacilityServices />
        ) : filterSubcategory === "HOUSE KEEPING" ? (
          <HouseKeeping />
        ) : filterSubcategory === "STATIONERY & PRINTING" ? (
          <StationeryPrinting />
        ) : filterSubcategory === "PEST CONTROL" ? (
          <PestControl />
        ) : filterSubcategory === "GUEST HOUSE MANAGEMENT" ? (
          <GUESTHOUSEMANAGEMENT />
        ) : filterSubcategory === "TECHNICAL SERVICES" ? (
          <TECHNICALSERVICES />
        ) : <FacilityServices/>}
      </div>
    </div>
  );
}

export default Facility;

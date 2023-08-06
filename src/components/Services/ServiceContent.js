import React from "react";
import {
  // EPRSolutions,
  // Facility,
  // InternetSupply,
  // Inventory,
  // LogisticsProjects,
  RealEstate,
  // SCM,
  // Security,
  // Transpotation,
  // ValueAddService,
  // WareHouseManagement,
} from "./index";
export default function ServiceContent() {
  return (
    <div className="max-w-4xl p-10 mt-10 md:mt-0">
      {/* The Ui content will change accordingly */}
      {/* <WareHouseManagement /> */}
      {/* <Security /> */}
      <RealEstate />
    </div>
  );
}

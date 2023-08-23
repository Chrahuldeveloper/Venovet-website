import React from "react";
import {
  EPRSolutions,
  Facility,
  InternetSupply,
  Inventory,
  LogisticsProjects,
  RealEstate,
  SCM,
  Security,
  Transpotation,
  ValueAddService,
  WareHouseManagement,
} from "./index";
export default function ServiceContent({ category }) {
  return (
    <>
      {category  === "Warehouse Management (2PL & 3PL)" ? (
        <WareHouseManagement />
      ) : category === "Inventory Audits & Analytics" ? (
        <Inventory />
      ) : category === "Transportation/Fleet" ? (
        <Transpotation />
      ) : category === "Logistics Projects Designing" ? (
        <LogisticsProjects />
      ) : category === "Ware ERP Solutions" ? (
        <EPRSolutions />
      ) : category === "Industrial Security Services" ? (
        <Security />
      ) : category === "SCM Automation" ? (
        <SCM />
      ) : category === "Value Added Services" ? (
        <ValueAddService />
      ) : category === "Internet Supply Chain" ? (
        <InternetSupply />
      ) : category === "Industrial Real States" ? (
        <RealEstate />
      ) : category === "Facility Management" ? (
        <Facility />
      ) : null}
    </>
  );
}

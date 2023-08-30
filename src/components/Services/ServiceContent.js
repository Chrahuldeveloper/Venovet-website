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
// import { useCollectionData } from "react-firebase-hooks/firestore";
// import { db } from "../../Firebase";
// import { collection } from "firebase/firestore";
export default function ServiceContent({ category }) {
  // Fetching the services content
  // const docref = collection(db, `WHATWEDO/${category}`);
  // const [docs, loading, error] = useCollectionData(docref);
  // console.log(error ? error.message : docs);
  const docs = ""
  const loading = false
  return (
    <>
      {loading ? (
        "loading"
      ) : category === "Warehouse Management (2PL & 3PL)" ? (
        <WareHouseManagement data={docs} />
      ) : category === "Inventory Audits & Analytics" ? (
        <Inventory data={docs} />
      ) : category === "Transportation/Fleet" ? (
        <Transpotation />
      ) : category === "Logistics Projects Designing" ? (
        <LogisticsProjects data={docs} />
      ) : category === "Ware ERP Solutions" ? (
        <EPRSolutions data={docs} />
      ) : category === "Industrial Security Services" ? (
        <Security data={docs} />
      ) : category === "SCM Automation" ? (
        <SCM data={docs} />
      ) : category === "Value Added Services" ? (
        <ValueAddService data={docs} />
      ) : category === "Internet Supply Chain" ? (
        <InternetSupply data={docs} />
      ) : category === "Industrial Real States" ? (
        <RealEstate data={docs} />
      ) : category === "Facility Management" ? (
        <Facility data={docs} />
      ) : null}
    </>
  );
}

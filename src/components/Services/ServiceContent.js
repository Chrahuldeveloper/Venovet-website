import React, { useEffect, useState } from "react";
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
import { db } from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";
export default function ServiceContent({ category }) {
  const [data, setdata] = useState();
  console.log(category);
  const fetchData = async () => {
    const documentRef = doc(db, "WHATWEDO", category);
    const documentSnapshot = await getDoc(documentRef);
    setdata(documentSnapshot);
  };
  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);
  const loading = false;

  return (
    <>
      {loading ? (
        <h1>loading....</h1>
      ) : category === "Warehouse Management (2PL & 3PL)" ? (
        <WareHouseManagement data={data} />
      ) : category === "Inventory Audits & Analytics" ? (
        <Inventory data={data} />
      ) : category === "Transportation" ? (
        <Transpotation />
      ) : category === "Logistics Projects Designing" ? (
        <LogisticsProjects data={data} />
      ) : category === "Ware ERP Solutions" ? (
        <EPRSolutions data={data} />
      ) : category === "Industrial Security Services" ? (
        <Security data={data} />
      ) : category === "SCM Automation" ? (
        <SCM data={data} />
      ) : category === "Value Added Services" ? (
        <ValueAddService data={data} />
      ) : category === "Internet Supply Chain" ? (
        <InternetSupply data={data} />
      ) : category === "Industrial Real States" ? (
        <RealEstate data={data} />
      ) : category === "Facility Management" ? (
        <Facility data={data} />
      ) : null}
    </>
  );
}

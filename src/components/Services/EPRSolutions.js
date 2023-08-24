import React from "react";

export default function EPRSolutions() {
  const ERPSolutions = [
    {
      icons: "EVERY BUSINESS SIZE",
      Tittle: "EVERY BUSINESS SIZE        ",
      Para: "A one-size-files-all solution for every business of all sizes and stripes.",
    },
    {
      icons: "EVERY INDUSTRY",
      Tittle: "EVERY INDUSTRY",
      Para: "From retail to manufacturing, finance to e-Commerce, we have you covered.",
    },
    {
      icons: "",
      Tittle: "EVERY SYSTEM",
      Para: "Scalable enterprise-wide solutions compatible with any of your existing systems.",
    },
    {
      icons: "",
      Tittle: "EVERY PLATFORM",
      Para: "Best-in-class ERP solutions for all mazor web and mobile platforms.",
    },
    {
      icons: "",
      Tittle: "EVERY USE CASE",
      Para: "Customize your ERP applications as per your unique business needs.",
    },
  ];

  const modules = [
    {
      image: "https://venovet.com/assets/images/erp-icon1.png",
      Tittle: "WAREHOUSE MANAGEMENT",
      Para: "Manage your warehouse products and all inventory movements on the go with our top-notch inventory & WMS Systems.",
    },
    {
      image: "https://venovet.com/assets/images/erp-icon2.png",
      Tittle: "HUMAN RESOURCE MANAGEMENT (HRM)",
      Para: "The HRM systems powered by oodles automate the core HR operations such as profile filtering, time tracking & much more.",
    },
    {
      image: "https://venovet.com/assets/images/erp-icon3.png",
      Tittle: "CUSTOMER RELATIONSHIP MANAGEMENT (CRM)      ",
      Para: "Consolidate your customer relations with the holistic CRM development services from Oodles ERP.",
    },
    {
      image: "https://venovet.com/assets/images/erp-icon4.png",
      Tittle: "E-COMMERCE",
      Para: "With the availablity of a comprehensive e-Commerce development suit, we build high-octain e-commerce platforms with powerful features.",
    },
    {
      image: "https://venovet.com/assets/images/erp-icon5.png",
      Tittle: "SUPPLY CHAIN MANAGEMENT (SCM)",
      Para: "Achive organizational efficiency and boost growth by streamlining HR, administration, compliance, and payroll tasks.",
    },
    {
      image: "https://venovet.com/assets/images/erp-icon6.png",
      Tittle: "ACCOUNTING AND FINANCE MANAGEMENT",
      Para: "Get an automated system for the procurement of required stock or inventory by developing an all-in Purchasing software.      ",
    },
    {
      image: "https://venovet.com/assets/images/erp-icon7.png",
      Tittle: "WORKFORCE MANAGEMENT SYSTEMS (WFM)",
      Para: "Our world-class development solutions for manufacturing industry help you boost your business productivity.",
    },
  ];

  return (
    <>
      <div className="space-y-4 text-[#7a7a7a] flex justify-center items-center flex-col">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-black">
          Custom ERP Solutions
        </h1>
        <p>
          Our ERP experts develop custom solutions that provide flexibility and
          mobility to scale up system requirements and enable on-the-go access.
          We Develop Custom ERP Solutions For Every Type of Business.
        </p>
        <p>
          Venovet’s Custom ERP Software Development Solution Works For Every
          Business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center place-items-center mt-5">
        {ERPSolutions.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="shadow-lg shadow-slate-300 p-5 text-center max-w-xs">
                {/* <Icons/> */}
                <div className="space-y-2">
                  <h1 className=" font-semibold text-orange-500">
                    {item.Tittle}
                  </h1>
                  <p className="text-[#7a7a7a]">{item.Para}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-7 text-[#7a7a7a] space-y-4">
        <h1 className="text-lg font-bold">
          Benefits of ERP Built for Services Industry
        </h1>
        <p>
          Venovet’s SRP software is designed ground up specifically for the
          Services industry. The Services Resource Planning system streamlines
          end-to-end business offerings for Warehouse management, Inventory
          Management, Vendor Management, Retail Stores, Logistics Management,
          professional services & BPO / KPO companies, covering revenue models
          such as ‘Contact to Contract’, ‘Execution to Billing’, ‘Quote to
          Cash’, or ‘Requisition to Release’ on a single platform. We have the
          industry leading Financial Suite, Multi-country compliance driven HCM
          & Payroll processing in a unified platform, accentuated with
          Intelligent Analytics integrated with SRP.
        </p>
        <ul className="space-y-1 ml-4 ">
          <li className="list-disc">Power of One</li>
          <li className="list-disc">Flexible Contract Management</li>
          <li className="list-disc">Skill Anywhere’ Workforce Management</li>
          <li className="list-disc">Successful Project Delivery</li>
          <li className="list-disc">Flexible Contract Management</li>
          <li className="list-disc">Power of One</li>
          <li className="list-disc">'Resource First’ Timesheets</li>
          <li className="list-disc">Global Payroll Processing</li>
        </ul>
      </div>

      <div className="mt-7">
        <h1 className="text-lg font-bold text-center">
          Check Out The Modules We Support Your Business With
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center  mt-7">
        {modules.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="shadow-md shadow-slate-300 p-5 text-center max-w-xs space-y-2">
                <img src={item.image} alt="" className="mx-auto" />
                <div className="space-y-2">
                  <h1 className=" font-semibold text-orange-500">
                    {item.Tittle}
                  </h1>
                  <p className="text-[#7a7a7a]">{item.Para}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

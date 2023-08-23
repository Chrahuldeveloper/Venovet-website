import React from "react";
import { Link } from "react-router-dom";

export default function DropDown() {
  const DropdownData = [
    "Warehouse Management (2PL & 3PL)",
    "Transportation/Fleet",
    "Value Added Services",
    "SCM Automation",
    "Inventory Audits & Analytics",
    "Logistics Projects Designing",
    "Internet Supply Chain",
    "Ware ERP Solutions",
    "Industrial Real States",
    "Facility Management",
    "Industrial Security Services",
  ];
  return (
    <ul>
      {DropdownData.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <Link to={`/whatwedo/${item}`}>
              <li className="hover:text-[#ff5e15] transition duration-300 ease-in-out py-1.5 px-3 border-b ">
                {item}
              </li>
            </Link>
          </React.Fragment>
        );
      })}
    </ul>
  );
}

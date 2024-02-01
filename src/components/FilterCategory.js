import React from "react";
import { Link, useLocation } from "react-router-dom";
import DropdownData from "../Data/WhatweDoCategories";
import Data from "../Data/WhoweserveCategories";

export default function FilterCategory({ Tittle, Page }) {
  const location = useLocation();
  return (
    <>
      <div className="bg-[#f8f8f9] p-5 space-y-3 rounded-lg shadow-lg">
        <h1 className="text-lg font-bold">{Tittle}</h1>
        <ul>
          {Page === "whatwedo"
            ? DropdownData.map((item, key) => {
                const isActive =
                  location.pathname ===
                  `/whatwedo/${item.catgeory.replace(/\s+/g, "-")}`;

                return (
                  <React.Fragment key={key}>
                    <Link
                      to={`/whatwedo/${item.catgeory.replace(/\s+/g, "-")}`}
                      state={{
                        image: item.image,
                        Tittle: item.Tittle,
                        Para: item.Para,
                      }}
                    >
                      <li
                        className={` ${
                          isActive ? "bg-blue-500 text-white" : "bg-[#eeeeee]"
                        }  cursor-pointer rounded-lg bg-[#eeeeee] text-[#777777] p-3 hover:bg-blue-500 hover:text-white text-sm font-semibold my-2.5`}
                      >
                        {item.catgeory}
                      </li>
                    </Link>
                  </React.Fragment>
                );
              })
            : Page === "whoweserve"
            ? Data.map((item, key) => {
                const isActive =
                  location.pathname ===
                  `/whoweserve/${item.catgeory.replace(/\s+/g, "-")}`;
                return (
                  <React.Fragment key={key}>
                    <Link
                      to={`/whoweserve/${item.catgeory.replace(/\s+/g, "-")}`}
                      state={{
                        image: item.image,
                        Tittle: item.Tittle,
                        Para: item.Para,
                      }}
                    >
                      <li
                        className={` ${
                          isActive ? "bg-blue-500 text-white" : "bg-[#eeeeee]"
                        }  cursor-pointer rounded-lg bg-[#eeeeee] text-[#777777] p-3 hover:bg-blue-500 hover:text-white text-sm font-semibold my-2.5`}
                      >
                        {item.catgeory}
                      </li>
                    </Link>
                  </React.Fragment>
                );
              })
            : null}
        </ul>
      </div>
    </>
  );
}

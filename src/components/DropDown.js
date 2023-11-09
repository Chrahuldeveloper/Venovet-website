import React from "react";
import { Link } from "react-router-dom";
import DropdownData from "../Data/WhatweDoCategories";
import Data from "../Data/WhoweserveCategories";
export default function DropDown({ ismobile, type }) {
  return (
    <ul>
      {type === "Whatwedo"
        ? DropdownData.map((item, i) => {
            const encodedTittle = encodeURIComponent(item.catgeory);

            return (
              <div className="animate__animated animate__fadeInDown" key={i}>
                <Link
                  to={`/whatwedo/${encodedTittle}`}
                  state={{
                    image: item.image,
                    Tittle: item.Tittle,
                    Para: item.Para,
                  }}
                >
                  <li
                    className={` ${
                      ismobile
                        ? "text-[#868686] hover:text-orange-500 transition duration-300 ease-in-out py-1.5 px-3 text-sm"
                        : `hover:text-[#ff5e15] transition duration-300 ease-in-out py-1.5 px-3 border-b z-50 `
                    } `}
                  >
                    {item.catgeory}
                  </li>
                </Link>
              </div>
            );
          })
        : type === "WhoweServe"
        ? Data.map((item, i) => {
            return (
              <div className="animate__animated animate__fadeInDown" key={i}>
                <Link
                  to={`/whoweserve/${item.catgeory}`}
                  state={{
                    image: item.image,
                    Tittle: item.Tittle,
                    Para: item.Para,
                  }}
                >
                  <li
                    className={` ${
                      ismobile
                        ? "text-[#868686] hover:text-orange-500 transition duration-300 ease-in-out py-1.5 px-3 text-sm"
                        : "hover:text-[#ff5e15] transition duration-300 ease-in-out py-1.5 px-3 border-b z-50 "
                    } `}
                  >
                    {item.catgeory}
                  </li>
                </Link>
              </div>
            );
          })
        : null}
    </ul>
  );
}

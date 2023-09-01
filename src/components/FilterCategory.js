import React from "react";
import { Link } from "react-router-dom";
import DropdownData from "../Data/WhatweDoCategories";
export default function FilterCategory({ Tittle }) {
  return (
    <>
      <div className="bg-[#f8f8f9] p-5 space-y-3 rounded-lg shadow-lg">
        <h1 className="text-lg font-bold">{Tittle}</h1>
        <ul>
          {DropdownData.map((item, key) => {
            return (
              <React.Fragment key={key}>
                <Link
                  to={`/whatwedo/${item.catgeory}`}
                  state={{
                    image: item.image,
                    Tittle: item.Tittle,
                    Para: item.Para,
                  }}
                >
                  <li className="cursor-pointer bg-[#eeeeee] text-[#777777] p-3 hover:bg-blue-500 hover:text-white font-semibold my-2.5">
                    {item.catgeory}
                  </li>
                </Link>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}
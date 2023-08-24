import React from "react";
import { Link } from "react-router-dom";
import DropdownData from "../Data/WhatweDoCategories";
export default function DropDown() {
  return (
    <ul>
      {DropdownData.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <Link
              to={`/whatwedo/${item.catgeory}`}
              state={{
                image: item.image,
                Tittle: item.Tittle,
                Para: item.Para,
              }}
            >
              <li className="hover:text-[#ff5e15] transition duration-300 ease-in-out py-1.5 px-3 border-b ">
                {item.catgeory}
              </li>
            </Link>
          </React.Fragment>
        );
      })}
    </ul>
  );
}

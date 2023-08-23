import React from "react";
import { useNavigate } from "react-router-dom";
export default function FilterCategory({ Tittle, Categories }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#f8f8f9] p-5 space-y-3 rounded-lg shadow-lg">
        <h1 className="text-lg font-bold">{Tittle}</h1>
        <ul className="space-y-2.5">
          {Categories.map((category, key) => {
            return (
              <React.Fragment key={key}>
                <li
                  onClick={() => {
                    navigate(`/whatwedo/${category}`);
                  }}
                  className="cursor-pointer bg-[#eeeeee] text-[#777777] p-3 hover:bg-blue-500 hover:text-white font-semibold"
                >
                  {category}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}

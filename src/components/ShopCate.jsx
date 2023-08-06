import React, { useState } from "react";
import Shop from "../Data/Shops";

function ShopCate() {
  const [point, setPoint] = useState(0);
  return (
    <div className="px-10 py-20 flex flex-col md:flex-row items-center space-y-4">
      {/* category  */}
      <div className="w-72">
        <button className="bg-[#b8daff] pl-6 py-3  transition duration-300 ease-in-out  font-bold border w-72 text-left">
          Category
        </button>

        {Shop.map((item, index) => {
          return (
            <div key={index}>
              <button
                className="pl-6 py-3 hover:text-[#007bff] transition duration-300 ease-in-out text-[#777777] text-sm border w-72 text-left"
                key={index}
                onClick={() => setPoint(index)}
              >
                {item.Tittle}
              </button>
            </div>
          );
        })}
      </div>

      {/* products */}
      <div className="px-5">
        {Shop[point].Products.map((item, index) => {
          return (
            <div
              key={index}
              className="px-4 py-6 shadow-lg space-y-6 rounded-lg"
            >
              <img className="max-w-[15rem]" src={item.img} alt="" />
              <p className="font-semibold text-sm text-center">
                {item.name.toUpperCase()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopCate;

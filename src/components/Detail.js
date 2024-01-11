import React from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../features/ProductSlice";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Detail({ Product }) {
  const dispatch = useDispatch();
  const item = {
    name: Product.name,
    image1: Product.image1,
    image2: Product.image2,
    image3: Product.image3,
    image4: Product.image4,
    desc: Product.desc,
    Price: Product.Price,
  };

  return (
    <main className="flex flex-col items-center gap-6 my-12 md:flex-row justify-evenly md:gap-0">
      <div className="border-[1px] border-gray-300 max-w-sm p-3">
        <div className="grid grid-cols-2 gap-5 p-4">
          <img className="rounded-md" src={item.image1} alt={item.image1} />
          <img className="rounded-md" src={item.image2} alt={item.image1} />
          <img className="rounded-md" src={item.image3} alt="" />
          <img className="rounded-md" src={item.image4} alt="" />
        </div>
      </div>
      <div className="space-y-5">
        <div className="flex flex-row items-center justify-center gap-7">
          <button
            className="bg-[#ff5e15] rounded-md relative overflow-hidden group text-[#fff] p-4 flex  cursor-pointer items-center space-x-1.5 transition ease-in-out duration-500 "
            onClick={() => {
              dispatch(addTocart(item));
              Swal.fire({
                title: "Sucess",
                text: " Added to Cart sucessfully",
                icon: "success",
                confirmButtonText: "OK",
              });
            }}
          >
            <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-in-out bg-orange-700 opacity-100 group-hover:w-full"></span>
            <span className="relative flex items-center">
              <h1>Add to Cart</h1>
            </span>
          </button>
          <Link to="/shop">
            <button className="bg-[#ff5e15] rounded-md relative overflow-hidden group text-[#fff] p-4 flex  cursor-pointer items-center space-x-1.5   transition ease-in-out duration-500">
              <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-in-out bg-orange-700 opacity-100 group-hover:w-full"></span>
              <span className="relative flex items-center">
                <h1>Go back</h1>
              </span>
            </button>
          </Link>
        </div>
        <div className="border-[1px] border-gray-200 max-w-md text-gray-500 p-3.5 text-sm space-y-2">
          <p className="text-lg font-semibold text-slate-500">
            Price : {item?.Price}
          </p>
          {item?.desc ? item?.desc : "No description"}
        </div>
      </div>
    </main>
  );
}

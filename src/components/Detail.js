import React from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../features/ProductSlice";
import Swal from "sweetalert2";

export default function Detail({ Product }) {
  const dispatch = useDispatch();
  const item = {
    name: Product.name,
    img: Product.image,
  };
  console.log(item)
  return (
    <main className="flex flex-col md:flex-row justify-evenly items-center my-12 gap-6 md:gap-0">
      <div className="border-[1px] border-gray-300 max-w-sm p-3">
        <img src={Product.image} alt="" />
      </div>
      <div className="space-y-5">
        <div className="flex flex-row gap-7 justify-center items-center">
          <button
            className="bg-[#ff5e15] rounded-md relative overflow-hidden group text-[#fff] p-4 flex  cursor-pointer items-center space-x-1.5   transition ease-in-out duration-500 "
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
          <button className="bg-[#ff5e15] rounded-md relative overflow-hidden group text-[#fff] p-4 flex  cursor-pointer items-center space-x-1.5   transition ease-in-out duration-500">
            <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-in-out bg-orange-700 opacity-100 group-hover:w-full"></span>
            <span className="relative flex items-center">
              <h1>Go back</h1>
            </span>
          </button>
        </div>
        <div className="border-[1px] border-gray-200 max-w-md text-gray-500 p-3.5 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          voluptas aliquam ipsa odit consectetur, eaque modi tempora a iusto rem
          saepe incidunt adipisci ut accusamus dicta obcaecati officiis! Eveniet
          tempora molestiae ex dicta libero vitae deleniti distinctio quae
          utlitia veritatis cum, impedit molestias porro expedita!
        </div>
      </div>
    </main>
  );
}

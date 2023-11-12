import React, { useState } from "react";
import Shop from "../Data/Shops";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addTocart } from "../features/ProductSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ShopCate() {
  const [point, setPoint] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center gap-10 p-10 space-y-4 md:flex-row">
        <div className="">
          <button className="bg-[#b8daff] pl-6 py-3 rounded-t transition duration-300 ease-in-out  font-bold border w-72 text-left">
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
        <div className="px-5">
          {Shop[point].Products.map((item, index) => {
            return (
              <div
                key={index}
                className="px-4 py-6 space-y-6 rounded-lg shadow-lg"
              >
                <img className="max-w-[15rem]" src={item.img} alt={item.img} />
                <p
                  className="text-sm font-semibold text-center cursor-pointer hover:text-[#ff5e15] transition duration-300 ease-in-out"
                  onClick={() => {
                    if (item.name.toUpperCase() !== "") {
                      navigate(`/detail/${item.name}`, {
                        state: {
                          name: item.name,
                          image: item.img,
                        },
                      });
                    } else {
                      return;
                    }
                  }}
                >
                  {item.name.toUpperCase() === "" ? (
                    <p className="text-lg font-semibold text-red-600">
                      No Products Found
                    </p>
                  ) : (
                    item.name.toUpperCase()
                  )}
                </p>
                <button
                  onClick={() => {
                    if (item.name.toUpperCase() !== "") {
                      dispatch(addTocart(item));
                      Swal.fire({
                        title: "Sucess",
                        text: " Added to Cart sucessfully",
                        icon: "success",
                        confirmButtonText: "OK",
                      });
                    } else {
                      alert("No item Found");
                    }
                  }}
                  className="flex items-center gap-5 px-6 py-1 mx-auto font-semibold text-white duration-500 ease-in-out bg-black rounded-md hover:bg-orange-500"
                >
                  <h1>Add to Cart</h1>
                  <AiOutlineShoppingCart size={24} color="white" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ShopCate;

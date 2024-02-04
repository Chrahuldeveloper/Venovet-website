import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteitem } from "../features/ProductSlice";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CheckOutModel } from "./index";

export default function CartTable() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [quantity, setquantity] = useState(1);
  const [checkout, setcheckout] = useState(false);

  const [items, setitems] = useState({
    item: "",
    vol: "",
    name: "",
  });

  console.log(
    cart.cartItems.map((item, i) => {
      console.log(item);
    })
  );

  return (
    <>
      <div className="my-20 overflow-x-auto">
        <table className="mx-auto text-left w-[90vw] ">
          <thead className="border border-[#EEEEEE]">
            <tr>
              <th className="py-2 border md:pl-5">S.No</th>
              <th className="py-2 pl-5 border md:pl-10">PRODUCT</th>
              <th className="py-2 pl-10 border">ITEM NAME</th>
              <th className="py-2 pl-10 border">QUANTITY</th>
              <th className="py-2 pl-10 border">REMOVE</th>
            </tr>
          </thead>
          {cart.cartItems.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <tbody className="border border-[#EEEEEE]">
                  <tr>
                    <td className="py-8 pl-4 border md:pl-9 ">{i + 1}</td>
                    <td className="py-8 pl-10 border">
                      <img
                        src={item.Image1.image}
                        className="w-20"
                        alt="img.png"
                      />
                    </td>
                    <td className="py-8 pl-10 border">
                      <h1 className="text-sm">{item.ProductName}</h1>
                    </td>
                    <td className="py-10 cursor-pointer text-[#7e7e7e] flex space-x-2 items-center justify-center">
                      <BiMinus
                        size={10}
                        color="black"
                        onClick={() => {
                          if (quantity <= 0) {
                            setquantity(1);
                          } else {
                            setquantity(quantity - 1);
                          }
                        }}
                      />
                      <p>{quantity}</p>
                      <AiOutlinePlus
                        size={10}
                        color="black"
                        onClick={() => {
                          setquantity(quantity + 1);
                        }}
                      />
                    </td>
                    <td
                      onClick={() => {
                        dispatch(deleteitem(i));
                      }}
                      className="py-8 pl-10 cursor-pointer text-[#7e7e7e] border"
                    >
                      Delete
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            );
          })}
        </table>
        <div className="flex justify-between mx-auto w-[90vw]">
          <div className="flex items-center justify-center mt-6">
            <Link to={"/shop"}>
              <button
                type="submit"
                className="bg-[#121a37] hover:bg-[#ff5e15] transition duration-300 ease-in-out  font-medium text-sm rounded-lg shadow-2xl shadow-black text-white px-10 py-2.5"
              >
                CONTINUE SHOPPING
              </button>{" "}
            </Link>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={() => {
                if (cart.cartItems.length > 0) {
                  setcheckout(true);
                  const itemNames = cart.cartItems
                    .map((item) => item.ProductName)
                  console.log("itemNames:", itemNames);
                  setitems({
                    ...items,
                    item: cart.cartItems.map((item) => {
                      return item.Image1.image;
                    }),
                    vol: cart.cartItems.map(() => quantity),
                    name: cart.cartItems.map(() => itemNames),
                  });
                } else {
                  alert("No items in the cart");
                }
              }}
              type="submit"
              className="bg-[#121a37] hover:bg-[#ff5e15] transition duration-300 ease-in-out  font-medium text-sm rounded-lg shadow-2xl shadow-black text-white px-10 py-2.5"
            >
              CHECKOUT
            </button>{" "}
          </div>
        </div>
      </div>
      {checkout ? (
        <CheckOutModel
          setcheckout={setcheckout}
          item={items.item}
          quantity={items.vol}
          name={items.name}
        />
      ) : null}
    </>
  );
}

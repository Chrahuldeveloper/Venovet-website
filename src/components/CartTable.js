import React from "react";
import { useSelector } from "react-redux";

export default function CartTable() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div className="my-8 overflow-x-auto">
        <table className="mx-auto text-left w-[70vw] ">
          <thead className="border-y border-[#EEEEEE]">
            <tr>
              <th className="py-2 md:pl-10">S.No</th>
              <th className="py-2 pl-5 md:pl-10">IMAGE</th>
              <th className="py-2 pl-10">NAME</th>
              <th className="py-2 pl-10">QUANTITY</th>
              <th className="py-2 pl-10">REMOVE</th>
            </tr>
          </thead>
          {cart.cartItems.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <tbody className="border-b border-[#EEEEEE]">
                  <tr>
                    <td className="py-8 pl-4 md:pl-14 ">{i + 1}</td>
                    <td className="py-8 pl-10">
                      <img src={item.img} className="w-20" alt="img.png" />
                    </td>
                    <td className="py-8 pl-10">
                      <h1 className="text-sm">{item.name}</h1>
                    </td>
                    <td className="py-8 pl-10 cursor-pointer text-[#7e7e7e]">
                      1
                    </td>
                    <td className="py-8 pl-10 cursor-pointer text-[#7e7e7e]">
                      Delete
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            );
          })}
        </table>
      </div>
    </>
  );
}

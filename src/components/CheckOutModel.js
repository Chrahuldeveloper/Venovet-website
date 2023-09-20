import React from "react";
import { CheckOutForm } from "./index";

export default function CheckOutModel({ item, quantity }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full p-2 bg-black bg-opacity-75 backdrop-blur-sm animate__animated animate__fadeIn">
      <div className="bg-white">
        <CheckOutForm item={item} quantity={quantity} />
      </div>
    </div>
  );
}

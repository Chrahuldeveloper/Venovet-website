import React from "react";
import { CheckOutForm } from "./index";

export default function CheckOutModel({ setcheckout, item, quantity, name }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-sm animate__animated animate__fadeIn">
      <div className="bg-white rounded-md">
        <CheckOutForm setcheckout={setcheckout} item={item} quantity={quantity} name={name} />
      </div>
    </div>
  );
}

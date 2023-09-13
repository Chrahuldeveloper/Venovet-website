import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
export default function DragTop() {
  return (
    <div
      className="fixed z-50 p-3 duration-300 ease-in-out bg-orange-500 rounded-md cursor-pointer right-10 bottom-10 hover:duration-300 hover:bg-black hover:brightness-90"
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      <AiOutlineArrowUp size={30} color="white" />
    </div>
  );
}

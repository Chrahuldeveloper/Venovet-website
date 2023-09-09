import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
export default function DragTop() {
  return (
    <div
      className="fixed right-10 bottom-10 bg-orange-500 p-3 rounded-md cursor-pointer z-50"
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      <AiOutlineArrowUp size={30} color="white" />
    </div>
  );
}

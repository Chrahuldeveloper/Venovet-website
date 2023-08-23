import React from "react";

export default function ExpertFrom() {
  return (
    <div className="bg-[#d6d6d6] max-w-sm md:max-w-md p-5">
      <h1 className="font-bold text-center md:text-lg lg:text-xl">
        Talk to Our Experts
      </h1>
      <form className="flex flex-col items-center justify-center mt-3 space-y-2">
        <div>
          <input
            type="text"
            id="name"
            className="py-2 rounded-lg outline-none px-14"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="text"
            id="Email"
            placeholder="Email"
            className="py-2 rounded-lg outline-none px-14"
          />
        </div>
        <div>
          <input
            type="number"
            id="Mobile"
            placeholder="Mobile"
            className="py-2 rounded-lg outline-none px-14"
          />
        </div>
        <div>
          <input
            type="text"
            id="Company"
            placeholder="Company"
            className="py-2 rounded-lg outline-none px-14"
          />
        </div>
        <div>
          <select
            name="nature of enquire"
            className="px-20 py-2 rounded-lg outline-none"
          >
            <option value="Product Realted">Product Realted</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div>
          <textarea
            name="Msg"
            placeholder="Message"
            id="messages"
            cols="35"
            rows="8"
            className="outline-none px-2.5"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

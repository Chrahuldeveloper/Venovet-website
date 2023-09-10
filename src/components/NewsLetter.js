import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function NewsLetter() {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 md:space-y-0 md:flex-row md:justify-around bg-[#f9f9f9] p-4 mt-3.5">
      <div className="space-y-3">
        <h1 className="font-bold md:text-lg">Our Newsletter</h1>
        <p className="text-[#777777]">
          Sign up for industry alerts, <br className="hidden md:block" /> news &
          insights.
        </p>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Your Email Address"
          className="md:px-10 py-2 border-[1px]  outline-none"
        />
        <button className="bg-orange-500 duration-300 ease-in-out hover:brightness-90 text-white py-3 px-2 text-xs font-semibold">
          <h1>Request Call Back</h1>
        </button>{" "}
      </div>
      <div className="flex items-center space-x-2.5">
        <AiOutlineTwitter size={28} color="black" cursor={"pointer"} />
        <AiFillLinkedin size={28} color="black" cursor={"pointer"} />
        <AiFillFacebook size={28} color="black" cursor={"pointer"} />
      </div>
    </div>
  );
}

import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { db } from "../Firebase";
import { ColorRing } from "react-loader-spinner";

export default function NewsLetter() {
  const [data, setData] = useState({
    mail: "",
  });
  const [isSubmitting, setIsSubmiting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsSubmiting(true);
    if (data === "") {
      alert("Please Enter your Email!");
      // setIsSubmiting(false);
    } else {
      try {
        setIsSubmiting(true);
        await addDoc(collection(db, "NEWS-LETTER"), data);
        window.location.reload();
        setIsSubmiting(false);
        alert("success");
      } catch (error) {
        setIsSubmiting(false);
        console.log(error);
      }
    }
  };
  console.log(data);
  return (
    <div className="flex flex-col justify-center items-center space-y-5 md:space-y-0 md:flex-row md:justify-around bg-[#f9f9f9] p-4 py-8 mt-3.5">
      {isSubmitting && ( // Render loader only when isSubmitting is true
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-100">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#ff5e15"]}
          />
        </div>
      )}
      <div className="space-y-3">
        <h1 className="font-bold md:text-lg">Our Newsletter</h1>
        <p className="text-[#777777]">
          Sign up for industry alerts, <br className="hidden md:block" /> news &
          insights.
        </p>
      </div>
      <div className="flex items-center">
        <input
          type="email"
          placeholder="Your Email Address"
          value={data.mail}
          required
          onChange={(e) => {
            setData({
              ...data,
              mail: e.target.value,
            });
          }}
          className="md:px-5 py-2 border-[1px]  lg:w-[30rem] outline-none"
        />
        <button
          onClick={handleSubmit}
          className="bg-[#ff5e14] duration-300 ease-in-out hover:brightness-90 text-white py-3 px-2 text-xs font-semibold"
        >
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

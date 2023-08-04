import Data from "../Data/FaqData";
import { useState } from "react";

const AboutUsFaq = ({ Q, children }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="space-y-4 rounded-2xl px-10 md:px-0">
      <div className=" cursor-pointer" onClick={toggle}>
        <h1
          className={`${
            !open ? "text-black" : "text-[#ff4747]"
          }  lg:text-xl  md:text-xl text-lg`}
        >
          {Q}
        </h1>
      </div>
      <div
        style={{
          maxHeight: open ? "2000px" : "0",
          overflow: "hidden",
          transition: "max-height 2s ease-in-out",
        }}
      >
        {open && <p className="font-semibold text-[#798795]">{children}</p>}
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <>
      <div className="mx-auto mt-7 ">
        <div className="flex md:justify-evenly items-start">
          <div className="space-y-5">
            {Data.map((_, index) => {
              return (
                <div key={index} className="lg:max-w-xl">
                  <AboutUsFaq Q={_.q}>
                    <p>{_.a}</p>
                  </AboutUsFaq>
                </div>
              );
            })}
          </div>
          <div className=" h-auto hidden lg:flex">
            <img
              src="https://www.venovet.com/assets/images/cargo.jpg"
              className="max-w-md"
              alt="about"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;

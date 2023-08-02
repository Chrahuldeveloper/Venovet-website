import Data from "../Data/FaqData";
import { useState } from "react";

const Faqs = ({ Q, children }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className=" w-[20rem] md:w-[30rem] lg:w-[42rem] py-2.5 space-y-4 rounded-2xl">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggle}
      >
        <h1
          className={`${
            !open ? "text-black" : "text-[#ff4747]"
          } md:text-xl lg:text-[1.35rem]  `}
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
    <div className="m-6 py-4 text-center">
      <h1 className="text-[#ff4747] text-lg font-semibold ">OUR FAQ</h1>
      <div className="">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#222] pt-4 ">
          Frequently Asked Questions?
        </h1>

        <div className=" flex  justify-around text-left">
          <div className="pt-16">
            {Data.map((_, index) => {
              return (
                <div key={index}>
                  <Faqs Q={_.q}>
                    <p>{_.a}</p>
                  </Faqs>
                </div>
              );
            })}
          </div>
          <div className="w-[20rem] h-autos hidden lg:flex">
            <img
              src="https://www.venovet.com/assets/images/resources/faq-mockup.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

import Data from "../Data/FaqData";
import { useState } from "react";

const Faqs = ({ Q, children, index }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="w-[20rem] md:w-[30rem] lg:w-[42rem] py-2.5 space-y-4 rounded-2xl">
      <div
        className="flex justify-between divide-y-2 cursor-pointer"
        onClick={toggle}
      >
        <h1
          className={`${
            !open ? "text-[#333333]" : "text-[#ff4747]"
          }  lg:text-2xl md:text-xl`}
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
    <div className="py-4 m-6 ">
      <h1 className="text-[#ff4747] text-lg font-semibold lg:ml-28">OUR FAQ</h1>
      <h1 className="lg:ml-28 text-2xl font-bold md:text-3xl lg:text-4xl text-[#222] pt-4">
        Frequently Asked Questions?
      </h1>
      <div className="divide-y-2">
        <div className="flex items-start justify-around text-left ">
          <div className="pt-10">
            {Data.map((_, index) => {
              return (
                <div key={index}>
                  <Faqs Q={_.q} index={index}>
                    <p className="underline">{_.a}</p>
                  </Faqs>
                </div>
              );
            })}
          </div>
          <div className="w-[25rem] h-auto hidden lg:flex">
            <img
              src="https://www.venovet.com/assets/images/resources/faq-mockup.png"
              alt="https://www.venovet.com/assets/images/resources/faq-mockup.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

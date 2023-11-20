import { useState } from "react";
import Data from "../Data/FaqData";
import { faq } from "../images/home";

const Faqs = ({ Q, children, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  const toggle = () => {
    setOpenIndex(isOpen ? -1 : index);
  };

  return (
    <div className="w-[20rem] md:w-[30rem] lg:w-[42rem] py-2.5 space-y-4 rounded-2xl">
      <div
        className="flex justify-between divide-y-2 cursor-pointer"
        onClick={toggle}
      >
        <h1
          className={`${
            isOpen ? "text-[#ff4747]" : "text-[#333333]"
          }  lg:text-2xl md:text-xl text-[1.2rem] hover:text-[#ff4747] transition duration-300 ease-in-out`}
        >
          0{index + 1}. {Q}
        </h1>
      </div>
      <div
        style={{
          maxHeight: isOpen ? "2000px" : "0",
          overflow: "hidden",
          transition: "max-height 3s ease-in-out",
        }}
      >
        {isOpen && (
          <p className="font-semibold text-justify text-[#798795]">
            {children}
          </p>
        )}
      </div>
    </div>
  );
};
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="py-4 m-6 mx-10 lg:mx-24">
      <h1 className="text-[#ff4747] text-lg font-semibold ">OUR FAQ</h1>
      <h1 className=" text-2xl font-bold md:text-3xl lg:text-4xl text-[#222] pt-4">
        Frequently Asked Questions?
      </h1>
      <div className="divide-y-2">
        <div className="flex items-start justify-around text-left ">
          <div className="pt-10">
            {Data.map((_, index) => {
              return (
                <div key={index}>
                  <Faqs
                    Q={_.q}
                    index={index}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  >
                    <p className="underline">{_.a}</p>
                  </Faqs>
                </div>
              );
            })}
          </div>
          <div className="w-[24rem] -mt-16 pr-10 h-auto hidden lg:flex">
            <img src={faq} alt="faq.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

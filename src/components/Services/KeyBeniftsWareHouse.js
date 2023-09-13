import { useState } from "react";
import Data from "../../Data/WareHouseData";

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
          }  lg:text-2xl md:text-xl`}
        >
          {Q}
        </h1>
      </div>
      <div
        style={{
          maxHeight: isOpen ? "2000px" : "0",
          overflow: "hidden",
          transition: "max-height 2s ease-in-out",
        }}
      >
        {isOpen && <p className="font-semibold text-[#798795]">{children}</p>}
      </div>
    </div>
  );
};

const KeyBeniftsWareHouse = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div className="py-4 ">
      <h1 className="text-[#ff4747] text-lg font-semibold  lg:text-3xl">
        Key Benifts
      </h1>
      <div className="divide-y-2">
        <div className="">
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
        </div>
      </div>
    </div>
  );
};

export default KeyBeniftsWareHouse;

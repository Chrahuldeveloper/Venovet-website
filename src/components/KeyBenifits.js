import { useState } from "react";
import Datas from ".././Data/KeyBenifitsData";
const Faqs = ({ Q, children }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className=" w-[20rem] md:w-[30rem] lg:w-[42rem] py-2.5 space-y-4 rounded-2xl">
      <div className="flex justify-between cursor-pointer" onClick={toggle}>
        <h1
          className={`${
            !open ? "text-black" : "text-[#ff4747]"
          }   font-semibold md:text-xl`}
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

const KeyBenifits = () => {
  return (
    <div className="py-4 m-6 ">
      <h1 className="text-lg font-bold md:text-xl lg:text-2xl">Key Benifits</h1>
      <div>
        <div className="flex items-start justify-around text-left ">
          <div className="pt-5">
            {Datas.map((_, index) => {
              return (
                <div key={index}>
                  <Faqs Q={_.q}>
                    <p>{_.p}</p>
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

export default KeyBenifits;

import Data from "../Data/AboutFaqs";
import { useState } from "react";

const AboutUsFaq = ({ Q, children, open, toggle }) => {
  return (
    <div className="px-10 space-y-4 rounded-2xl md:px-0">
      <div className="cursor-pointer " onClick={toggle}>
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
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="lg:max-w-[75vw] mx-auto mt-10">
      <div className="mx-auto ">
        <div className="flex items-start mt-3 items md:justify-between">
          <div className="space-y-5">
            {Data.map((item, index) => {
              return (
                <div key={index} className=" lg:max-w-sm">
                  <AboutUsFaq
                    Q={item.q}
                    open={index === openIndex}
                    toggle={() => toggleFaq(index)}
                  >
                    <p className="my-4">{item.Subq}</p>
                    <p className="text-[#7f8895] font-light my-4">{item.a}</p>
                    <p className="my-4 underline">{item.underline}</p>
                  </AboutUsFaq>
                </div>
              );
            })}
          </div>
          <div className="hidden h-auto lg:flex">
            <img
              src="https://www.venovet.com/assets/images/cargo.jpg"
              className=""
              alt="about"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

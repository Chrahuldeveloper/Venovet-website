import { Link } from "react-router-dom";
import Data from "../Data/AboutFaqs";
import { useState } from "react";

const AboutUsFaq = ({ Q, children, open, toggle }) => {
  return (
    <div className="px-10 space-y-4 rounded-2xl md:px-0">
      <div className="cursor-pointer " onClick={toggle}>
        <h1
          className={`${
            !open ? "text-black" : "text-[#ff5e15]"
          }    md:text-xl text-lg`}
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
    <section className=" mx-auto ">
      <div className="mx-auto">
        <div className="flex items-start mt-3 space-x-20 items md:justify-around">
          <div className="space-y-5 pt-10">
            {Data.map((item, index) => {
              return (
                <div key={index} className="w-[22rem] lg:max-w-md">
                  <AboutUsFaq
                    Q={item.q}
                    open={index === openIndex}
                    toggle={() => toggleFaq(index)}
                  >
                    <p className="my-1 text-[#798795] text-justify">
                      {item.Subq}
                    </p>
                    <p className="text-[#798795] font-normal my-4 text-justify">
                      {item.a}
                    </p>
                    <p className="my-4 underline text-justify">
                      {item.underline}
                    </p>
                  </AboutUsFaq>
                </div>
              );
            })}
            <Link to="/contact">
              <button className="my-5 bg-[#ff5e15] hover:shadow-none  font-semibold rounded-full shadow-2xl shadow-black text-white px-8 py-1.5  ease-in-out duration-300">
                Talk to our experts
              </button>
            </Link>
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

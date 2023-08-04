import React from "react";

export default function Form() {
  return (
    <div className="bg-[#e3f3fb] p-6 my-7 max-w-3xl mx-auto shadow-md">
      <div className="text-center space-y-3.5">
        <h1 className="text-orange-500 font-semibold text-lg md:text-2xl">
          CAREER WITH VENOVET
        </h1>
        <p className="md:text-xl font-bold text-xl ">Submit Your Resume</p>
      </div>
      <form className="bg-white rounded-xl mt-6 p-10">
        <div className=" md:grid md:grid-cols-2 place-items-center justify-center gap-8">
          <div className="flex flex-col gap-4">
            <label htmlFor="name" className="text-[#787878]">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="border-[1px] border-slate-300 p-2.5 md:w-[20vw] outline-none"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="Email Address" className="text-[#787878]">
              Email Address
            </label>
            <input
              type="text"
              id="Email Address"
              className="border-[1px] border-slate-300 p-2.5 md:w-[20vw] outline-none"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="Phone " className="text-[#787878]">
              Phone
            </label>
            <input
              type="text"
              id="Phone "
              className="border-[1px] border-slate-300 p-2.5 md:w-[20vw]  outline-none"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="Upload Resume " className="text-[#787878]">
              Upload Resume{" "}
            </label>
            <input
              type="text"
              id="Upload Resume "
              className="border-[1px] border-slate-300 p-2.5 md:w-[20vw] outline-none"
            />
          </div>
          <div className="flex flex-col md:col-span-2 gap-4">
            <label htmlFor="Expertise Areas" className="text-[#787878]">
              Expertise Areas / Skills :
            </label>
            <input
              type="text"
              id="Expertise Areas"
              className="border-[1px] md:p-8 border-slate-300 p-2.5 sm:w-[70vw] md:w-[60vw] lg:w-[43vw] outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button className="bg-orange-500 tex-white font-semibold rounded-lg shadow-2xl shadow-black text-white px-8 py-1.5">
            Submit
          </button>{" "}
        </div>
      </form>
      <div>
        <img src="https://venovet.com/assets/images/career-logo.png" alt="" />
      </div>
    </div>
  );
}

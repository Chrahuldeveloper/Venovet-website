import React from "react";

export default function ContactForm() {
  return (
    <div className="max-w-3xl p-6 mx-auto my-24 rounded-lg shadow-xl shadow-slate-200 ">
      <img
        src="https://venovet.com/assets/images/rocket_contact.jpg"
        className="w-16 h-16 mx-auto rounded-full shadow-md"
        alt="picturx"
      />
      <h1 className="mt-5 text-xl font-semibold text-center lg:text-3xl">
        Send Enquiry for more Details
      </h1>
      <form className="justify-center gap-8 md:grid md:grid-cols-2 place-items-center mt-7">
        <div className="flex flex-col gap-4">
          <label htmlFor="name" className="text-[#787878]">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw] outline-none"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="Email Address :" className="text-[#787878]">
            Email Address :
          </label>
          <input
            type="text"
            id="Email Address "
            className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw] outline-none"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="Nature Of Enquiry " className="text-[#787878]">
            Nature Of Enquiry{" "}
          </label>
          <input
            type="text"
            id="Nature Of Enquiry"
            className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw] outline-none"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="Mobile no " className="text-[#787878]">
            Mobile no :
          </label>
          <input
            type="text"
            id="Mobile no "
            className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw] outline-none"
          />
        </div>
        <div className="flex flex-col gap-4 md:col-span-2">
          <label htmlFor="Write a Message" className="text-[#787878]">
            Write a Message :
          </label>
          <textarea
            rows="4"
            cols="70"
            type="text"
            id="Write a Message "
            className="border-[1px] md:p-6 rounded-md border-slate-300 p-2.5  outline-none"
          />
        </div>
      </form>
      <div className="flex items-center justify-center mt-6">
        <button
          type="submit"
          className="bg-orange-500 tex-white font-semibold rounded-lg shadow-2xl shadow-black text-white px-8 py-1.5"
        >
          Submit
        </button>{" "}
      </div>
    </div>
  );
}

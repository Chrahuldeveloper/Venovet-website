import React, { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
function Enquire() {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Company: "",
    Enquiry: "",
    Message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(form).every((i) => i === "")) {
      alert("Please Fill the form");
    } else {
      try {
        await addDoc(collection(db, "ENQUIRY"), form);
        alert("success");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="bg-[#dae2ed]">
      <div className="px-5 py-24  lg:flex md:px-7 lg:px-8">
        <div className="rounded-l-md">
          <img
            className="rounded-l-md"
            src="https://venovet.com/assets/images/quote-pic.jpg"
            alt=""
          />
        </div>
        <div className="bg-white rounded-r-md flex flex-col items-center pt-10 py-10 lg:pb-0  lg:w-[50%]">
          <h1 className="text-[#fe8704] lg:text-4xl font-bold">Enquire Now</h1>
          <form onSubmit={handleSubmit}>
            <div className="">
              <div className="grid md:grid-cols-2 gap-4  pt-8 text-[#333]">
                <input
                  className="border w-60 rounded-3xl px-4 py-1.5 focus:outline-[#ced4da] focus:border-none"
                  type="text"
                  placeholder="Your Name"
                  value={form.Name}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      Name: e.target.value,
                    });
                  }}
                />
                <input
                  className="border w-60 rounded-3xl px-4 py-2 focus:outline-[#ced4da] focus:border-none"
                  type="email"
                  placeholder="Email"
                  value={form.Email}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      Email: e.target.value,
                    });
                  }}
                />
                <PhoneInput
                  value={form.Mobile}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      Mobile: e,
                    });
                  }}
                  className="px-4 py-2 border outline-none w-60 rounded-3xl focus:border-none"
                />
                <input
                  className="border w-60 rounded-3xl px-4 py-2 focus:outline-[#ced4da] focus:border-none"
                  type="text"
                  placeholder="Company"
                  value={form.Company}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      Company: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="py-4">
                <select
                  value={form.Enquiry}
                  onChange={(e) => {
                    setForm({ ...form, Enquiry: e.target.value });
                  }}
                  className="md:w-[100%] w-60 focus:outline-[#ced4da] rounded-3xl px-4 py-2 text-[#676767 focus:border-[#ced4da] border"
                >
                  <option>Nature of Enquiry</option>
                  <option>Type 1</option>
                  <option>Type 2</option>
                  <option>Type 3</option>
                </select>
              </div>
              <div className="py-2">
                <textarea
                  rows="5"
                  className="focus:outline-[#ced4da] w-60 md:w-full focus:border-none border py-2 px-2 rounded-3xl"
                  placeholder="Message"
                  value={form.Message}
                  onChange={(e) => {
                    setForm({ ...form, Message: e.target.value });
                  }}
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="text-white bg-[#fe8704] text-sm font-bold rounded-full px-6 py-2"
                  type="submit"
                >
                  SUBMIT NOW
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Enquire;

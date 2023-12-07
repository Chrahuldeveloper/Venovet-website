import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../Firebase";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";
import { ColorRing } from "react-loader-spinner";
import { rocket } from "../images/home";

export default function ContactForm() {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    EnquiryType: "",
    Phone: "",
    Message: "",
  });

  const [otp, setotp] = useState("");
  const auth = getAuth();
  const configureCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: () => {
        onNumSubmit();
      },
    });
  };
  const [isSubmitting, setIsSubmiting] = useState(false);

  const onNumSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+" + 91 + form.Phone;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert("OTP has been sent");
      })
      .catch((error) => {
        console.log(error);
        alert("Error! Sending OTP, Try Again...");
        // window.location.reload();
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmiting(true);
    if (Object.values(form).every((i) => i === "")) {
      alert("Please Fill the form");
    } else {
      const code = otp; // Use the OTP entered by the user
      window.confirmationResult
        .confirm(code)
        .then(async (result) => {
          // User signed in successfully.
          // const user = result.user;
          // console.log(JSON.stringify(user));
          alert("Number is verified!");
          // Save form data to Firebase after OTP verification
          try {
            await addDoc(collection(db, "CONTACTFORM"), form);
            setIsSubmiting(false);
            window.location.reload();
            // alert("success");
          } catch (error) {
            setIsSubmiting(false);
            console.log(error);
          }
        })
        .catch((error) => {
          // Handle OTP verification errors.
          console.error(error);
          alert("OTP verification failed. Please try again.");
          window.location.reload();
        });
    }
  };

  return (
    <div className="max-w-3xl p-6 mx-auto my-24 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_5px_10px] shadow-[#212529] border-1">
      {isSubmitting && ( // Render loader only when isSubmitting is true
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-75">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#ff5e15"]}
          />
        </div>
      )}
      <img
        src={rocket}
        className="w-16 h-16 mx-auto rounded-full shadow-md"
        alt="picturx"
      />
      <h1 className="mt-5 text-xl font-semibold text-center lg:text-3xl">
        Send Enquiry for more Details
      </h1>
      <form className="justify-center gap-2 md:grid md:grid-cols-2 place-items-center mt-7">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[#787878]">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={form.Name}
            onChange={(e) => {
              setForm({ ...form, Name: e.target.value });
            }}
            className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw] outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Email Address :" className="text-[#787878]">
            Email Address :
          </label>
          <input
            type="text"
            id="Email Address"
            value={form.Email}
            onChange={(e) => {
              setForm({ ...form, Email: e.target.value });
            }}
            className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw] outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Mobile no" className="text-[#787878]">
            Mobile no :
          </label>

          <input
            value={form.Phone}
            type="number"
            onChange={(e) => {
              setForm({
                ...form,
                Phone: e.target.value,
              });
            }}
            className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw] outline-none"
          />
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={onNumSubmit}
            className="bg-[#ff5e15] flex items-center relative overflow-hidden group  font-semibold rounded-lg  text-white px-16 md:px-20 py-2"
          >
            <span className="absolute left-0 h-full w-0 transition-all bg-orange-700 opacity-100 group-hover:w-full duration-300 ease-in-out"></span>
            <span className="relative flex items-center">Get OTP</span>
          </button>{" "}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="OTP" className="text-[#787878]">
            Enter OTP{" "}
          </label>
          <input
            type="number"
            onChange={(e) => {
              setotp(e.target.value);
            }}
            className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw] outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Nature Of Enquiry" className="text-[#787878]">
            Nature Of Enquiry{" "}
          </label>
          <select
            type="text"
            value={form.EnquiryType}
            onChange={(e) => {
              setForm({ ...form, EnquiryType: e.target.value });
            }}
            id="Mobile no "
            className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw] outline-none"
          >
            <option value=""></option>
            <option value="Product Related">Product Related</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="Write a Message" className="text-[#787878]">
            Write a Message :
          </label>
          <textarea
            rows="3"
            cols="70"
            type="text"
            value={form.Message}
            onChange={(e) => {
              setForm({ ...form, Message: e.target.value });
            }}
            id="Write a Message"
            className="border-[1px] md:p-6 rounded-md border-slate-300 p-2.5  outline-none"
          />
        </div>
        <div id="sign-in-button"></div>
      </form>
      <div className="flex items-center justify-center mt-6">
        <button
          onClick={handleSubmit}
          className="bg-[#ff5e15] flex items-center relative overflow-hidden group  font-semibold rounded-lg shadow-2xl shadow-black text-white px-8 py-1.5"
        >
          <span className="absolute left-0 h-full w-0 transition-all bg-orange-700 opacity-100 group-hover:w-full duration-300 ease-in-out"></span>
          <span className="relative flex items-center">Submit</span>
        </button>{" "}
      </div>
    </div>
  );
}

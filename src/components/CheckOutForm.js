import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../Firebase";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";
import { ColorRing } from "react-loader-spinner";

export default function CheckOutForm({ item, quantity }) {
  const [otp, setotp] = useState("");
  const [isSubmitting, setIsSubmiting] = useState(false);
  const auth = getAuth();
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    EnquiryType: "",
    Phone: "",
    Message: "",
  });
  const configureCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: () => {
        onNumSubmit();
      },
    });
  };

  const onNumSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = form.Phone;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert("OTP has bee sent");
      })
      .catch((error) => {
        console.log(error);
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
            alert("success");
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
    <>
      <div className="p-6 mx-auto rounded-lg w-[80vw] md:max-w-3xl ">
        {isSubmitting && ( 
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
          src={item}
          className="max-w-[20vw] mx-auto "
          alt="picturx"
        />
        <h1 className="mt-5 text-xl text-center text-slate-500 lg:text-xl">
          Quantity : {quantity}
        </h1>
        <p className="my-4 text-sm font-semibold text-center text-slate-500">
          Please fill the form to complete the Checkout
        </p>
        <form className="justify-center md:grid md:grid-cols-2 place-items-center mt-7">
          <div className="flex flex-col gap-4 my-2">
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
          <div className="flex flex-col gap-4 my-2">
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
          <div className="flex flex-col gap-4 my-2">
            <label htmlFor="Mobile no" className="text-[#787878]">
              Mobile no :
            </label>
            <input
              type="text"
              id="Nature Of Enquiry"
              value={form.Phone}
              onChange={(e) => {
                setForm({ ...form, Phone: e.target.value });
              }}
              className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw] outline-none"
            />
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={onNumSubmit}
              className="bg-[#ff5e15]  font-semibold rounded-lg shadow  shadow-black text-white px-20 py-2"
            >
              Get OTP
            </button>{" "}
          </div>
          <div className="flex flex-col items-center col-span-2 gap-4 my-3 md:my-0">
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
        </form>
      </div>
    </>
  );
}

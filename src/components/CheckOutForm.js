import { addDoc, collection } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { db } from "../Firebase";
import { ColorRing } from "react-loader-spinner";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";
import emailjs from "@emailjs/browser";
export default function CheckOutForm({ item, quantity, name }) {
  const formRef = useRef();
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Phone: "",
    quantity: quantity,
    name: name,
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
    // console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert("OTP has been sent");
      })
      .catch((error) => {
        console.log(error);
        alert("Error! Sending OTP, Try Again...");
        window.location.reload();
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
          sendEmail();

          // Save form data to Firebase after OTP verification
          try {
            await addDoc(collection(db, "ORDERS"), form);
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

  const sendEmail = () => {
    emailjs
      .send(
        "service_zroajyn",
        "template_iowctjd",
        {
          from_name: "VENOVET",
          to_name: form.Name,
          from_email: "jayprakashpj2525@gmail.com",
          to_email: form.Email,
          message:
            "Your Order number 555001 is confirmed! Our Venovet team will get back to you as soon as possible.",
        },
        "sE-s_AZMedbPMZx18"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="p-3 mx-auto rounded-lg w-[80vw] md:max-w-3xl ">
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
        <img src={item} className="w-28 mx-auto " alt="picturx" />
        <h1 className="mt-5 text-xl text-center text-slate-500 lg:text-xl">
          Quantity : {quantity}
        </h1>
        <p className="my-4 text-sm font-semibold text-center text-slate-500">
          Please fill the form to complete the Checkout
        </p>
        <form
          ref={formRef}
          className="justify-center md:grid md:grid-cols-2 place-items-center"
        >
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
          <div id="sign-in-button"></div>
        </form>
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="bg-orange-500 tex-white font-semibold rounded-lg shadow-2xl shadow-black text-white px-8 py-1.5"
          >
            Submit
          </button>{" "}
        </div>
      </div>
    </>
  );
}

import { addDoc, collection } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { db } from "../Firebase";
import { ColorRing } from "react-loader-spinner";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";
import emailjs from "@emailjs/browser";
import { RxCross2 } from "react-icons/rx";
export default function CheckOutForm({ setcheckout, item, quantity, name }) {
  console.log(item, quantity, name);

  const formRef = useRef();
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Phone: "",
    quantity: quantity,
    name: name,
  });
  const [isSubmitting, setIsSubmiting] = useState(false);
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

  const onNumSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+" + 91 + form.Phone;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert("OTP has been sent");
      })
      .catch((error) => {
        console.log(error);
        alert("Error! Sending OTP, Try Again...");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmiting(true);
    if (
      form.Name === "" ||
      form.Email === "" ||
      form.Phone === "" ||
      form.quantity === "" ||
      form.name === ""
    ) {
      alert("Please fill in all required fields");
      setIsSubmiting(false);
    } else {
      const code = otp;
      try {
        await window.confirmationResult.confirm(code);
        alert("Number is verified!");
        sendEmail();
        orderId(item, quantity, name, form);
      } catch (error) {
        console.error(error);
        alert(
          "OTP verification failed or an error occurred. Please try again."
        );
      } finally {
        setIsSubmiting(false);
      }
    }
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_m5ql7ex",
        "template_4ri8b6g",
        {
          from_name: "VENOVET",
          to_name: form.Name,
          from_email: "sales@venovet.com",
          to_email: form.Email,
        },
        "pskEHJBdJUVoAlloz"
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

  const orderId = async (item, quantity, name, form) => {
    try {
      const orderid = "555" + Math.floor(Math.random() * 999);
      await addDoc(collection(db, "ORDERSID"), {
        item,
        quantity,
        name,
        orderid,
        form,
      });
      alert("Sucess");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-4 mx-auto rounded-lg w-[80vw] md:max-w-3xl ">
        <div className="flex justify-end">
          <RxCross2
            size={27}
            onClick={() => {
              setcheckout(false);
            }}
            color="black"
            cursor={"pointer"}
          />
        </div>
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
        <img src={item} className="mx-auto w-28 " alt="picturx" />
        <h1 className="mt-5 text-xl text-center text-slate-500 lg:text-xl">
          Quantity : {quantity + ","}
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

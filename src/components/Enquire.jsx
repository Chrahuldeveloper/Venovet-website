import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "react-phone-number-input/style.css";
import { enquire } from "../images/home";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
function Enquire() {
  const auth = getAuth();
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Company: "",
    Enquiry: "",
    Message: "",
  });

  const [otp, setotp] = useState("");
  const [data, setData] = useState([]);

  const configureCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onNumSubmit();
      },
    });
  };

  const onNumSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();

    const phoneNumber = "+" + 91 + form.Mobile;
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
          await addDoc(collection(db, "ENQUIRY"), form);
          alert("Form data has been saved to Firebase.");
          window.location.reload();
        } catch (error) {
          console.error(error);
        }
      })
      .catch((error) => {
        // Handle OTP verification errors.
        console.error(error);
        alert("OTP verification failed. Please try again.");
        window.location.reload();
      });
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "NATURE-OF-ENQUIRY"));
    const enquiryData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setData(enquiryData);
  };
  return (
    <div className="bg-[#dae2ed]">
      <div className="px-3 py-24 lg:flex md:px-7 ">
        <div className="rounded-l-md">
          <img className="rounded-l-md h-full" src={enquire} alt="" />
        </div>
        <div className="bg-white rounded-r-md flex flex-col items-center pt-10 py-10 lg:pb-0  lg:w-[50%]">
          <h1 className="text-[#fe8704] text-[2.2rem] lg:text-4xl font-bold">
            Enquire Now
          </h1>
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
                <input
                  value={form.Mobile}
                  type="number"
                  placeholder="Phone Number"
                  onChange={(e) => {
                    setForm({
                      ...form,
                      Mobile: e.target.value,
                    });
                  }}
                  className="border w-60 rounded-3xl px-4 py-2 focus:outline-[#ced4da] focus:border-none"
                />

                <button
                  className="text-white w-32 bg-[#fe8704] text-sm font-bold rounded-full px-4 py-1 hover:brightness-90 ease-in-out duration-300"
                  onClick={onNumSubmit}
                >
                  SEND OTP
                </button>
                <input
                  className="border w-60 rounded-3xl px-4 py-2 focus:outline-[#ced4da] focus:border-none"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => {
                    setotp(e.target.value);
                  }}
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
                  <option></option>

                  {data.map((item, index) => {
                    return (
                      <React.Fragment>
                        <option>{item.Title}</option>
                      </React.Fragment>
                    );
                  })}
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
              <div className="flex items-center justify-center py-4">
                <button
                  className="text-white bg-[#fe8704]  hover:shadow-none shadow-2xl shadow-black text-sm font-bold rounded-full px-6 py-2 hover:bg-[#1f5abc] ease-in-out duration-300"
                  type="submit"
                >
                  SUBMIT NOW
                </button>
              </div>
            </div>
            <div id="sign-in-button"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Enquire;

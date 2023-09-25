import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";
import PhoneInput from "react-phone-number-input";
import { ColorRing } from "react-loader-spinner";

export default function ExpertFrom() {
  const [data, setData] = useState([]);
  const [otp, setotp] = useState("");
  const [isSubmitting, setIsSubmiting] = useState(false);
  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Company: "",
    Enquiry: "",
    Message: "",
  });
  const auth = getAuth();
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

    const phoneNumber = form.Mobile;
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
          setIsSubmiting(true);
          await addDoc(collection(db, "ENQUIRY"), form);
          alert("Form data has been saved to Firebase.");
          setIsSubmiting(false);
          window.location.reload();
        } catch (error) {
          setIsSubmiting(false);
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
    <div className="bg-[#d6d6d6]  p-5">
      {isSubmitting && ( // Render loader only when isSubmitting is true
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-100">
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
      <h1 className="font-bold text-center md:text-lg lg:text-xl">
        Talk to Our Experts
      </h1>
      <form
        className="flex flex-col items-center justify-center mt-8 space-y-3"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            id="name"
            className="py-1.5 w-[17rem] rounded outline-none px-4"
            placeholder="Name"
            value={form.Name}
            onChange={(e) => {
              setForm({
                ...form,
                Name: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <input
            type="text"
            id="Email"
            placeholder="Email"
            value={form.Email}
            onChange={(e) => {
              setForm({
                ...form,
                Email: e.target.value,
              });
            }}
            className="py-1.5 w-[17rem] rounded outline-none px-4"
          />
        </div>
        <div>
          <PhoneInput
            value={form.Mobile}
            onChange={(e) => {
              setForm({
                ...form,
                Mobile: e,
              });
            }}
            className="py-1.5 w-[17rem] rounded outline-none px-4 bg-white"
          />
        </div>
        <button
          className="text-white w-32 flex items-center relative overflow-hidden group bg-[#fe8704] text-sm font-bold rounded px-4 py-1 justify-center ease-in-out duration-300"
          onClick={onNumSubmit}
        >
          <span className="absolute left-0 h-full w-0 transition-all bg-orange-700 opacity-100 group-hover:w-full duration-300 ease-in-out"></span>
          <span className="relative flex items-center">SEND OTP</span>
        </button>
        <div>
          <input
            type="number"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => {
              setotp(e.target.value);
            }}
            className="py-1.5 w-[17rem] rounded outline-none px-4"
          />
        </div>
        <div>
          <input
            type="text"
            id="Company"
            placeholder="Company"
            value={form.Company}
            onChange={(e) => {
              setForm({
                ...form,
                Company: e.target.value,
              });
            }}
            className="py-1.5 w-[17rem] rounded outline-none px-4"
          />
        </div>
        <div>
          <select
            name="nature of enquire"
            value={form.Enquiry}
            onChange={(e) => {
              setForm({ ...form, Enquiry: e.target.value });
            }}
            className="py-1.5 w-[17rem] rounded outline-none px-4"
          >
            <option value="Product Realted">Nature of Enquiry</option>
            {data.map((item, index) => {
              return (
                <React.Fragment>
                  <option>{item.Title}</option>
                </React.Fragment>
              );
            })}
          </select>
        </div>
        <div>
          <textarea
            name="Msg"
            placeholder="Message"
            id="messages"
            cols="32"
            rows="4"
            className="outline-none rounded px-2.5"
          ></textarea>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            type="submit"
            className="bg-[#ff5e15]  font-semibold rounded-lg flex items-center justify-center relative overflow-hidden group text-white px-28 py-1.5"
          >
            <span className="absolute left-0 h-full w-0 transition-all bg-orange-700 opacity-100 group-hover:w-full duration-300 ease-in-out"></span>
            <span className="relative flex items-center">Submit</span>
          </button>{" "}
        </div>
        <div id="sign-in-button"></div>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import { db, storage } from "../Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { ColorRing } from "react-loader-spinner";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";
import { career } from "../images/logo";

export default function Form() {
  const [resume, setResume] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Skills: "",
    FileUrl: "",
  });
  const [otp, setotp] = useState("");

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

    const phoneNumber = "+" + 91 + resume.Phone;
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

  const [isSubmitting, setIsSubmiting] = useState(false);
  const fileChange = (event) => {
    const imageFile = event.target.files[0];
    setResume((prevForm) => ({
      ...prevForm,
      FileUrl: imageFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmiting(true);
    if (Object.values(resume).every((i) => i === "")) {
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
            const imageRef = ref(storage, `Resumes/${resume.FileUrl.name}`);
            await uploadBytesResumable(imageRef, resume.FileUrl);
            const url = await getDownloadURL(imageRef);
            const resumeData = {
              ...resume,
              FileUrl: url,
            };
            await addDoc(collection(db, "RESUMES"), resumeData);
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
    <div className="bg-[#e3f3fb] p-6 px-5 my-24 rounded-lg max-w-3xl mx-auto shadow-md">
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
      <div className="text-center space-y-3.5">
        <h1 className="text-lg font-medium text-orange-500 md:text-xl">
          CAREER WITH VENOVET
        </h1>
        <p className="text-xl font-bold md:text-2xl ">Submit Your Resume</p>
      </div>
      <form onSubmit={handleSubmit} className="p-10 mt-6 bg-white rounded-2xl">
        <div className="justify-center gap-8 md:grid md:grid-cols-2 place-items-center">
          <div className="flex flex-col gap-4">
            <label htmlFor="name" className="text-[#787878]">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={resume.Name}
              onChange={(e) => {
                setResume({
                  ...resume,
                  Name: e.target.value,
                });
              }}
              className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw] outline-none"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="Email Address" className="text-[#787878]">
              Email Address
            </label>
            <input
              type="text"
              id="Email Address"
              value={resume.Email}
              onChange={(e) => {
                setResume({
                  ...resume,
                  Email: e.target.value,
                });
              }}
              className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw] outline-none"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="Phone " className="text-[#787878]">
              Phone
            </label>
            <div>
              <input
                value={resume.Phone}
                type="number"
                onChange={(e) => {
                  setResume({
                    ...resume,
                    Phone: e.target.value,
                  });
                }}
                className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw]  outline-none"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={onNumSubmit}
              className="bg-[#ff5e15] relative overflow-hidden group flex items-center  font-semibold rounded-lg shadow  shadow-black text-white px-16 md:px-20 py-2"
            >
              <span className="absolute left-0 h-full w-0 transition-all bg-orange-700 opacity-100 group-hover:w-full duration-300 ease-in-out"></span>
              <span className="relative flex items-center">Get OTP</span>
            </button>{" "}
          </div>
          <div className="flex flex-col gap-4">
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

          <div className="flex flex-col gap-4">
            <label htmlFor="UploadResume" className="text-[#787878]">
              Upload Resume{" "}
            </label>
            <input
              type="file"
              onChange={fileChange}
              className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw] outline-none"
            />
          </div>
          <div className="flex flex-col gap-4 md:col-span-2">
            <label htmlFor="Expertise Areas" className="text-[#787878]">
              Expertise Areas / Skills :
            </label>
            <textarea
              rows="4"
              cols="70"
              type="text"
              id="Expertise Areas"
              value={resume.Skills}
              onChange={(e) => {
                setResume({
                  ...resume,
                  Skills: e.target.value,
                });
              }}
              className="border-[1px] md:p-6 rounded-md border-slate-300 p-2.5  outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            type="submit"
            className="bg-[#ff5e15] relative overflow-hidden group  font-semibold rounded-lg flex items-center text-white px-8 py-1.5"
          >
            <span className="absolute left-0 h-full w-0 transition-all bg-orange-700 opacity-100 group-hover:w-full duration-300 ease-in-out"></span>
            <span className="relative flex items-center">Submit</span>
          </button>{" "}
        </div>
        <div id="sign-in-button"></div>
      </form>
      <div>
        <img src={career} alt="" />
      </div>
    </div>
  );
}

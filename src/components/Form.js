import React, { useRef, useState } from "react";
import { db, storage } from "../Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { ColorRing } from "react-loader-spinner";

export default function Form() {
  const [resume, setResume] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Skills: "",
    FileUrl: "",
  });

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
    }
  };
  return (
    <div className="bg-[#e3f3fb] p-6 my-24 rounded-lg max-w-3xl mx-auto shadow-md">
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
      <div className="text-center space-y-3.5">
        <h1 className="text-lg font-semibold text-orange-500 md:text-2xl">
          CAREER WITH VENOVET
        </h1>
        <p className="text-xl font-bold md:text-xl ">Submit Your Resume</p>
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
            <input
              type="text"
              id="Phone "
              value={resume.Phone}
              onChange={(e) => {
                setResume({
                  ...resume,
                  Phone: e.target.value,
                });
              }}
              className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw]  outline-none"
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
            className="bg-orange-500 tex-white font-semibold rounded-lg shadow-2xl shadow-black text-white px-8 py-1.5"
          >
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

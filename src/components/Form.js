import React, { useState } from "react";
import { db, storage } from "../Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

export default function Form() {
  const [resume, setResume] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Skills: "",
    FileUrl: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(resume).every((i) => i === "")) {
      alert("Please Fill the form");
    } else {
      try {
        // upload file
        const fileInput = document.getElementById("Upload Resume ");
        const file = fileInput?.files[0];

        if (file) {
          const storageRef = ref(storage, `resumes/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on(
            "state_changed",
            null,
            (error) => {
              console.error(error);
            },
            async () => {
              // download url for upload file
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

              //  Save form data and file URL to Firestore
              const resumeData = {
                ...resume,
                FileUrl: downloadURL,
              };

              await addDoc(collection(db, "RESUMES"), resumeData);

              alert("success");
            }
          );
        } else {
          alert("upload resume");
        }

        // await addDoc(collection(db, "RESUMES"), resume);
        // alert("success");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="bg-[#e3f3fb] p-6 my-24 rounded-lg max-w-3xl mx-auto shadow-md">
      <div className="text-center space-y-3.5">
        <h1 className="text-orange-500 font-semibold text-lg md:text-2xl">
          CAREER WITH VENOVET
        </h1>
        <p className="md:text-xl font-bold text-xl ">Submit Your Resume</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl mt-6 p-10">
        <div className=" md:grid md:grid-cols-2 place-items-center justify-center gap-8">
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
            <label htmlFor="Upload Resume " className="text-[#787878]">
              Upload Resume{" "}
            </label>
            <input
              type="file"
              id="Upload Resume "
              className="border-[1px] rounded-md border-slate-300 p-2.5 md:w-[20vw] outline-none"
            />
          </div>
          <div className="flex flex-col md:col-span-2 gap-4">
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
        <div className="flex justify-center items-center mt-6">
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

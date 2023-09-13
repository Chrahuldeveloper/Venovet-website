import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase";

export default function ExpertFrom() {
  const [data, setData] = useState([]);
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
    <div className="bg-[#d6d6d6]  p-5">
      <h1 className="font-bold text-center md:text-lg lg:text-xl">
        Talk to Our Experts
      </h1>
      <form className="flex flex-col items-center justify-center mt-8 space-y-3">
        <div>
          <input
            type="text"
            id="name"
            className="py-1.5 w-[17rem] rounded outline-none px-4"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="text"
            id="Email"
            placeholder="Email"
            className="py-1.5 w-[17rem] rounded outline-none px-4"
          />
        </div>
        <div>
          <input
            type="number"
            id="Mobile"
            placeholder="Mobile"
            className="py-1.5 w-[17rem] rounded outline-none px-4"
          />
        </div>
        <div>
          <input
            type="text"
            id="Company"
            placeholder="Company"
            className="py-1.5 w-[17rem] rounded outline-none px-4"
          />
        </div>
        <div>
          <select
            name="nature of enquire"
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
            className="bg-orange-500 tex-white font-semibold rounded-lg shadow-2xl shadow-black text-white px-28 py-1.5"
          >
            Submit
          </button>{" "}
        </div>
      </form>
    </div>
  );
}

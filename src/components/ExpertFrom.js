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
    <div className="bg-[#d6d6d6] max-w-sm md:max-w-md p-5">
      <h1 className="font-bold text-center md:text-lg lg:text-xl">
        Talk to Our Experts
      </h1>
      <form className="flex flex-col items-center justify-center mt-3 space-y-2">
        <div>
          <input
            type="text"
            id="name"
            className="py-2 rounded-lg outline-none px-14"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="text"
            id="Email"
            placeholder="Email"
            className="py-2 rounded-lg outline-none px-14"
          />
        </div>
        <div>
          <input
            type="number"
            id="Mobile"
            placeholder="Mobile"
            className="py-2 rounded-lg outline-none px-14"
          />
        </div>
        <div>
          <input
            type="text"
            id="Company"
            placeholder="Company"
            className="py-2 rounded-lg outline-none px-14"
          />
        </div>
        <div>
          <select
            name="nature of enquire"
            className="px-20 py-2 rounded-lg outline-none"
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
            cols="35"
            rows="8"
            className="outline-none px-2.5"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentRef = doc(db, "WHATWEDO");
        const documentSnapshot = await getDoc(documentRef);
        if (documentSnapshot.exists()) {
          setData(documentSnapshot.data());
        } else {
          setData(null); // Handle the case where the document doesn't exist
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  console.log(data);

  const DownloadPdf = async () => {
    const pdflink =
      "https://firebasestorage.googleapis.com/v0/b/venovet-78743.appspot.com/o/pdf%2Fassets_Forenoon%20Session%20Schedule.pdf?alt=media&token=2a3138ce-951c-4726-af70-f081def045db";
    try {
      const aTag = document.createElement("a");
      aTag.href = pdflink;
      aTag.download = "venovet.pdf";
      aTag.target = "_blank";
      document.body.append(aTag);
      aTag.click();
      aTag.remove();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="p-4 space-y-10 lg:flex items-start justify-center md:space-y-0 md:px-10 lg:space-x-16 my-28"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div>
        <img
          src="https://www.venovet.com/assets/images/title-shp1.png"
          alt="png"
          className="opacity-40"
        />
      </div>
      <div className="space-y-3 md:space-y-4">
        <h1 className="text-orange-500 text-lg font-semibold">
          WELCOME TO VENOVET
        </h1>
        <h2 className="font-semibold text-3xl">
          About Us <br /> Our Company.
        </h2>
      </div>
      <div className="space-y-3 md:max-w-2xl md:space-y-9">
        <h1 className="text-xl md:text-3xl font-semibold">
          We provide on-demand warehousing space for business and consumers
        </h1>
        <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-orange-500">
          Logistics Operations
        </h2>
        <p className="font-semibold leading-7 max-w-lg">
          For our clients from Transporting the Goods from Source to our
          Warehouse, Inwarding the Goods, Quality Check, Storage, Dispatch,
          Reporting and End Customer Delivery Transportation.
        </p>
        <div className="flex md:flex-row flex-col items-start mt-8 md:space-x-6 space-y-4 md:space-y-0">
          <button
            onClick={DownloadPdf}
            className="flex items-center text-sm space-x-3  bg-orange-500 text-white font-semibold px-8 py-2 rounded-lg shadow-2xl shadow-black"
          >
            <h1>DOWNLOAD BROCHURE</h1>
            <FaRegFilePdf size={20} color="white" />
          </button>
          <button className="text-sm  flex items-center space-x-3 bg-[#121a37] text-white font-semibold px-8 py-2 rounded-lg shadow-2xl shadow-black">
            <h1>WATCH OUR SHORT VIDEO</h1>
            <BsFillPlayFill size={20} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}

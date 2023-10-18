import React, { useEffect, useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { Link } from "react-router-dom";
export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentRef = doc(db, "SOCIAL-MEDIA-URL", "LINKS");
        const documentSnapshot = await getDoc(documentRef);
        if (documentSnapshot.exists()) {
          setData(documentSnapshot.data());
        } else {
          setData(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="items-start justify-st p-4 space-y-10 lg:flex md:space-y-0 md:px-14 lg:space-x-20 my-28"
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
        <h1 className="text-lg font-semibold text-[#ff5e15]">
          WELCOME TO VENOVET
        </h1>
        <h2 className="text-3xl font-semibold">
          About Us <br /> Our Company.
        </h2>
      </div>
      <div className="space-y-3 md:max-w-2xl md:space-y-7">
        <h1 className="text-xl font-semibold md:text-3xl">
          We provide on-demand warehousing space for business and consumers
        </h1>
        <h2 className="text-[1.9rem] font-bold text-[#ff5e15]  lg:text-3xl">
          Logistics Operations
        </h2>
        <p className="max-w-lg font-medium leading-7 text-[#414042]">
          For our clients from Transporting the Goods from Source to our
          Warehouse, Inwarding the Goods, Quality Check, Storage, Dispatch,
          Reporting and End Customer Delivery Transportation.
        </p>
        <div className="flex flex-col items-start mt-8 space-y-4 md:flex-row md:space-x-6 md:space-y-0">
          <Link to={data?.Pdf}>
            <button className="flex items-center px-8 py-2 space-x-3 text-sm font-semibold text-white bg-[#ff5e15] overflow-hidden relative group  transition duration-300 ease-in-out rounded-lg shadow-2xl shadow-black">
              <span className="absolute left-0 h-full w-0 transition-all bg-orange-700 opacity-100 group-hover:w-full duration-300 ease-in-out"></span>
              <span className="relative flex items-center">
                <h1>DOWNLOAD BROCHURE</h1>
                <FaRegFilePdf size={20} color="white" />
              </span>
            </button>
          </Link>
          <Link to={data?.Link} target="_blank" rel="noopener noreferrer">
            <button className="text-sm  flex items-center space-x-3 bg-[#121a37] text-white font-semibold px-8 py-2 rounded-lg shadow-2xl shadow-black">
              <h1>WATCH OUR SHORT VIDEO</h1>
              <BsFillPlayFill size={20} color="white" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { db } from "../../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Brochure() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentRef = doc(db, "BROCHURE", "LINKS");
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
    <div className="bg-[#f8f8f9] p-6 border-[1px] border-gray-100 max-w-xs flex flex-col space-y-5 text-center shadow-lg">
      <h1 className="font-semibold md:text-xl">Download Brochures</h1>
      <Link to={data?.Pdf}>
        <button className="bg-[#ff5e15] overflow-hidden relative group justify-center font-semibold rounded-lg  text-white px-8 py-4 flex items-center space-x-2.5 hover:brightness-95 duration-300 ease-in-out">
          <span className="absolute left-0 h-full w-0 transition-all bg-orange-700 opacity-100 group-hover:w-full duration-300 ease-in-out"></span>
          <span className="relative flex items-center space-x-1">
            <h1>Download Brochures</h1>
            <AiOutlineFilePdf size={20} color="white" />{" "}
          </span>
        </button>
      </Link>
    </div>
  );
}

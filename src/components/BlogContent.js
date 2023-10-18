import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
export default function BlogContent({ category }) {
  const [data, setdata] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const documentRef = doc(db, "BLOGS", category);
      const documentSnapshot = await getDoc(documentRef);
      setdata(documentSnapshot.data());
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <>
      <main className="p-5 shadow-md lg:max-w-3xl">
        <div>
          <div>
            <img src={data?.image} alt="" />
          </div>
          <div className="mt-3 space-y-3 text-[#777777]">
            <h1 className="text-lg text-[#ff5e14] lg:text-xl font-semibold">
              {data?.Tittle1}
            </h1>
            <p>{data?.Para1}</p>
            <p>{data?.Para2}</p>
            <h2 className="text-lg text-[#ff5e14] lg:text-xl font-semibold">
              {data?.Tittle2}
            </h2>
            <p className="text-black">{data?.Para3}</p>
          </div>
          <div className="mt-4">
            <ul className="space-y-4 text-[#777777] ">
              <li className="space-y-1.5">
                <h1 className="text-[#919191] font-bold">{data?.Tittle3}</h1>
                <p>{data?.Para4}</p>
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] font-bold">{data?.Tittle4}</h1>
                <p>{data?.Para5}</p>
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] font-bold">{data?.Tittle5}</h1>
                <p>{data?.Para6}</p>
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] font-bold">{data?.Tittle6}</h1>
                <p>{data?.Para7}</p>
              </li>
            </ul>
            <div className="space-y-3">
              <h2 className="text-lg text-[#ff5e14] lg:text-xl font-semibold mt-4">
                {data?.Tittle7}
              </h2>
              <p>{data?.Para8}</p>
            </div>
            <ul className="space-y-4 text-[#777777] mt-4">
              <li className="space-y-1.5">
                <h1 className="text-[#919191] font-bold">{data?.Tittle8}</h1>
                <p>{data?.Para9}</p>
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] font-bold">{data?.Tittle9}</h1>
                <p>{data?.Para10}</p>
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] font-bold">{data?.Tittle10}</h1>
                <p>{data?.Para11}</p>
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] font-bold">{data?.Tittle11}</h1>
                <p>{data?.Para12}</p>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h1 className="text-lg text-[#ff5e14] lg:text-xl font-semibold mt-4">
              {data?.Tittle12}
            </h1>
            <ul>{data?.Para13}</ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg text-[#ff5e14] lg:text-xl font-semibold mt-4">
              {data?.Tittle13}
            </h2>
            <p>{data?.Para14}</p>
          </div>
        </div>
      </main>
    </>
  );
}

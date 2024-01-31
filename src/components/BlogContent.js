import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import DOMPurify from "dompurify";
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
            <img src={data?.Blogimage} alt="" />
          </div>
          <div className="mt-3 space-y-3 text-[#777777]">
            <h1 className="text-lg text-[#ff5e14] lg:text-xl font-semibold">
              {data?.Tittle1}
            </h1>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data?.Para1),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data?.Para2),
              }}
            />
            <h2 className="text-lg text-[#ff5e14] lg:text-xl font-semibold">
              {data?.Tittle2}
            </h2>
            <p
              className="text-black"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data?.Para3),
              }}
            />
          </div>
          <div className="mt-4">
            <ul className="space-y-4 text-[#777777] ">
              <li className="space-y-1.5">
                <h1 className="text-[#919191] font-bold">
                  {data?.SubCat1?.ListTittle1}
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.Para4),
                  }}
                />
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] font-bold">
                  {data?.SubCat1?.ListTittle2}
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.SubCat1?.Para1),
                  }}
                />
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] font-bold">
                  {data?.SubCat1?.ListTittle3}
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.SubCat1?.Para2),
                  }}
                />
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] font-bold">
                  {data?.SubCat1?.ListTittle4}
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.SubCat1?.Para3),
                  }}
                />
              </li>
            </ul>
            <div className="space-y-3">
              <h2 className="text-lg text-[#ff5e14] lg:text-xl font-semibold mt-4">
                {data?.Tittle7}
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data?.Para8),
                }}
              />
            </div>
            <ul className="space-y-4 text-[#777777] mt-4">
              <li className="space-y-1.5">
                <h1 className="text-[#919191] ">
                  {data?.SubCat2?.ListTittle1}
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.SubCat2?.Para1),
                  }}
                />
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] ">
                  {data?.SubCat2?.ListTittle2}
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.SubCat2?.Para2),
                  }}
                />
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] ">
                  {data?.SubCat2?.ListTittle3}
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.SubCat2?.Para3),
                  }}
                />
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] ">
                  {data?.SubCat2?.ListTittle4}
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.SubCat2?.Para4),
                  }}
                />
              </li>
            </ul>
            <ul className="space-y-4 text-[#777777] mt-4">
              <li className="space-y-1.5">
                <h1 className="text-[#919191] ">{data?.SubCat3?.List1}</h1>
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] ">{data?.SubCat3?.List2}</h1>
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] ">{data?.SubCat3?.List3}</h1>
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] ">{data?.SubCat3?.List4}</h1>
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] ">{data?.SubCat3?.List5}</h1>
              </li>
            </ul>
            <ul className="space-y-4 text-[#777777] mt-4">
              <li className="space-y-1.5">
                <h1 className="text-[#919191] ">{data?.SubCat4?.List1}</h1>
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] ">{data?.SubCat4?.List2}</h1>
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] ">{data?.SubCat4?.List3}</h1>
              </li>
              <li className="space-y-1.5">
                <h1 className="text-[#919191] ">{data?.SubCat4?.List4}</h1>
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
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data?.Para14),
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}

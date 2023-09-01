import React from "react";

export default function BlogContent({ category }) {
  const docref = collection(db, `BLOGS/${category}`);
  const [data, loading, error] = useCollectionData(docref);
  console.log(error ? error.message : docs);

  return (
    <main className="p-5 shadow-md lg:max-w-3xl">
      <div>
        <div>
          <img src={data.Blogimage} alt="" />
        </div>
        <div className="mt-3 space-y-3 text-[#777777]">
          <h1 className="text-lg text-[#ff5e14] lg:text-xl font-semibold">
            {data.Tittle1}
          </h1>
          <p>{data.Para1}</p>
          <p>{data.Para2}</p>
          <h2 className="text-lg text-[#ff5e14] lg:text-xl font-semibold">
            {data.Tittle2}{" "}
          </h2>
          <p className="text-black">{data.Para3}</p>
        </div>
        <div className="mt-4">
          <ul className="space-y-4 text-[#777777] ">
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                {data.SubCat1.ListTittle1}
              </h1>
              <p>{data.SubCat1.ListPara1}</p>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                {data.SubCat1.ListTittle2}
              </h1>
              <p>{data.SubCat1.ListPara2}</p>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                {data.SubCat1.ListTittle3}
              </h1>
              <p>{data.SubCat1.ListPara3}</p>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                {data.SubCat1.ListTittle4}
              </h1>
              <p>{data.SubCat1.ListPara4}</p>
            </li>
          </ul>
          <div className="space-y-3">
            <h2 className="text-lg text-[#ff5e14] lg:text-xl font-semibold mt-4">
              {data.Tittle3}
            </h2>
            <p>{data.Para4}</p>
          </div>
          <ul className="space-y-4 text-[#777777] mt-4">
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                {data.SubCat2.ListTittle1}
              </h1>
              <p>{data.SubCat2.ListPara1}</p>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                {data.SubCat2.ListTittle2}
              </h1>
              <p>{data.SubCat2.ListPara2}</p>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                {data.SubCat2.ListTittle3}
              </h1>
              <p>{data.SubCat2.ListPara3}</p>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                {data.SubCat2.ListTittle4}
              </h1>
              <p>{data.SubCat2.ListPara4}</p>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h1>{data.Tittle4}</h1>
          <ul>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">{data.SubCat3.List1}</h1>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">{data.SubCat3.List2}</h1>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">{data.SubCat3.List3}</h1>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">{data.SubCat3.List4}</h1>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">{data.SubCat3.List5}</h1>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-lg text-[#ff5e14] lg:text-xl font-semibold mt-4">
            {data.Tittle5}
          </h2>
          <p>{data.Para4}</p>
        </div>
        <ul>
          <li className="space-y-1.5">
            <h1 className="text-[#919191] font-bold">{data.SubCat4.List1}</h1>
          </li>
          <li className="space-y-1.5">
            <h1 className="text-[#919191] font-bold">{data.SubCat4.List2}</h1>
          </li>
          <li className="space-y-1.5">
            <h1 className="text-[#919191] font-bold">{data.SubCat4.List3}</h1>
          </li>
          <li className="space-y-1.5">
            <h1 className="text-[#919191] font-bold">{data.SubCat4.List4}</h1>
          </li>
        </ul>
      </div>
    </main>
  );
}

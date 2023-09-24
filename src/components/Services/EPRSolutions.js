import React from "react";

export default function EPRSolutions({ data }) {
  const ERPSolutions = [
    {
      Tittle: `${data?.SubCat1?.Tittle}`,
      Para: `${data?.SubCat1?.Para}`,
    },
    {
      Tittle: `${data?.SubCat2?.Tittle}`,
      Para: `${data?.SubCat2?.Para}`,
    },
    {
      Tittle: `${data?.SubCat3?.Tittle}`,
      Para: `${data?.SubCat3?.Para}`,
    },
    {
      Tittle: `${data?.SubCat4?.Tittle}`,
      Para: `${data?.SubCat4?.Para}`,
    },
    {
      Tittle: `${data?.SubCat5?.Tittle}`,
      Para: `${data?.SubCat5?.Para}`,
    },
  ];

  const modules = [
    {
      image: "https://venovet.com/assets/images/erp-icon1.png",
      Tittle: `${data?.SubCat6?.Tittle}`,
      Para: `${data?.SubCat6?.Para}`,
    },
    {
      image: "https://venovet.com/assets/images/erp-icon2.png",
      Tittle: `${data?.SubCat7?.Tittle}`,
      Para: `${data?.SubCat7?.Para}`,
    },
    {
      image: "https://venovet.com/assets/images/erp-icon3.png",
      Tittle: `${data?.SubCat8?.Tittle}`,
      Para: `${data?.SubCat8?.Para}`,
    },
    {
      image: "https://venovet.com/assets/images/erp-icon4.png",
      Tittle: `${data?.SubCat9?.Tittle}`,
      Para: `${data?.SubCat9?.Para}`,
    },
    {
      image: "https://venovet.com/assets/images/erp-icon5.png",
      Tittle: `${data?.SubCat10?.Tittle}`,
      Para: `${data?.SubCat10?.Para}`,
    },
    {
      image: "https://venovet.com/assets/images/erp-icon6.png",
      Tittle: `${data?.SubCat11?.Tittle}`,
      Para: `${data?.SubCat11?.Para}`,
    },
  ];

  return (
    <>
      <div className="space-y-8 text-[#7a7a7a] flex justify-center items-center flex-col">
        <h1 className="text-lg font-bold text-black md:text-xl lg:text-2xl">
          {data?.Tittle1}
        </h1>
        <p>{data?.Para1}</p>
      </div>
      <div className="grid justify-center grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {ERPSolutions.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="max-w-xs p-5 text-center shadow-lg shadow-slate-300">
                <div className=
                "space-y-2">
                  <h1 className="font-semibold text-orange-500 ">
                    {item.Tittle}
                  </h1>
                  <p className="text-[#7a7a7a]">{item.Para}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-7 text-[#7a7a7a] space-y-4">
        <h1 className="text-lg font-bold">{data?.Tittle2}</h1>
        <p>{data?.Para2}</p>
        <ul className="ml-4 space-y-1">
          <li className="list-disc">Power of One</li>
          <li className="list-disc">Flexible Contract Management</li>
          <li className="list-disc">Skill Anywhere’ Workforce Management</li>
          <li className="list-disc">Successful Project Delivery</li>
          <li className="list-disc">Flexible Contract Management</li>
          <li className="list-disc">Power of One</li>
          <li className="list-disc">'Resource First’ Timesheets</li>
          <li className="list-disc">Global Payroll Processing</li>
        </ul>
      </div>

      <div className="mt-7">
        <h1 className="text-lg font-bold text-center">
          Check Out The Modules We Support Your Business With
        </h1>
      </div>

      <div className="grid justify-center grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-7">
        {modules.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="max-w-xs p-5 space-y-2 text-center shadow-md shadow-slate-300">
                <img src={item.image} alt="" className="mx-auto" />
                <div className="space-y-2">
                  <h1 className="font-semibold text-orange-500 ">
                    {item.Tittle}
                  </h1>
                  <p className="text-[#7a7a7a]">{item.Para}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

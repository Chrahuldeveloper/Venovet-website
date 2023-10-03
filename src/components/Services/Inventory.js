import React from "react";

export default function Inventory({ data }) {
  const AuditServices = [
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
    {
      Tittle: `${data?.SubCat6?.Tittle}`,
      Para: `${data?.SubCat6?.Para}`,
    },
    {
      Tittle: `${data?.SubCat7?.Tittle}`,
      Para: `${data?.SubCat7?.Para}`,
    },
  ];
  const Benefits = [
    {
      Tittle: `${data?.SubCat8?.Tittle}`,
      Para: `${data?.SubCat8?.Para}`,
    },
    {
      Tittle: `${data?.SubCat9?.Tittle}`,
      Para: `${data?.SubCat9?.Para}`,
    },
    {
      Tittle: `${data?.SubCat10?.Tittle}`,
      Para: `${data?.SubCat10?.Para}`,
    },
    {
      Tittle: `${data?.SubCat11?.Tittle}`,
      Para: `${data?.SubCat11?.Para}`,
    },
  ];

  return (
    <section>
      {/* What is Stock Audit Services*/}
      <div className="flex flex-col gap-5 lg:flex-row">
        <img src={data?.SubCat1?.image} className="rounded-lg w-72" alt="" />
        <div className="space-y-4 ">
          <h1 className="text-xl font-semibold lg:text-3xl font-poppins">
            {data?.SubCat1?.Tittle}
          </h1>
          <p className="text-[#777777]">{data?.SubCat1?.Para}</p>
        </div>
      </div>
      {/* What is Stock Audit Services*/}
      {/*Eligibility For Stock Audit Services */}
      <div className="flex flex-col items-start gap-6 mt-8 lg:flex-row">
        <div className="space-y-3">
          <h1 className="text-xl font-semibold lg:text-3xl font-poppins">
            {data?.SubCat2?.Tittle}
          </h1>
          <ul className="space-y-3 text-[#777777]">
            <p className="text-[#777777]">{data?.SubCat2?.Para}</p>
          </ul>
        </div>
        <img
          className="max-w-sm rounded-lg"
          src={data?.SubCat2?.image}
          alt=""
        />
      </div>
      {/*Eligibility For Stock Audit Services */}

      {/*Process for Stock Audit Services */}
      <div>
        <h1 className="text-xl font-semibold lg:text-3xl font-poppins">
          Process for Stock Audit Services
        </h1>
        <div className="grid grid-cols-1 gap-5 mt-8 lg:grid-cols-2 ">
          {AuditServices.map((item, index) => {
            return (
              <div key={index} className="space-y-3 ">
                <h1 className="text-lg font-semibold md:text-xl ">
                  {item.Tittle}
                </h1>
                <p className="text-[#777777]">{item.Para}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/*Process for Stock Audit Services */}

      {/* Benefits  of Stock Audit Services*/}
      <div className="mt-8">
        <h1 className="text-xl font-semibold lg:text-3xl font-poppins">
          Benefits of Stock Audit Services
        </h1>
        <div className="grid grid-cols-1 gap-5 mt-6 ">
          {Benefits.map((item, index) => {
            return (
              <div key={index} className="space-y-3 ">
                <h1 className="text-lg font-semibold md:text-xl ">
                  {item.Tittle}
                </h1>
                <p className="text-[#777777]">{item.Para}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Benefits  of Stock Audit Services*/}
    </section>
  );
}

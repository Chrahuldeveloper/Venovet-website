import React from "react";
import { s4 } from "../../images/services/Value";

export default function ValueAddService({ data }) {
  return (
    <section>
      <div>
        <img src={s4} alt="" />
        <div className=" text-justify text-white bg-[#1165cd] p-8 rounded-lg -translate-y-10  md:max-w-3xl mx-auto text-sm md:text-base">
          {data?.Para}
        </div>
      </div>

      {/* Value Added Services section */}
      <div>
        <h1 className="text-lg font-semibold md:text-xl lg:text-2xl">
          Value Added Services Include
        </h1>
        <div className="flex flex-col items-center gap-6 lg:items-start lg:flex-row mt-7">
          <img
            className="order-2 max-w-xs  rounded-lg"
            src={data?.SubCat1?.image}
            alt="imge"
          />
          <div className="max-w-lg lg:max-w-none space-y-3.5">
            <h1 className="text-xl font-semibold">{data?.SubCat1?.Tittle}</h1>
            <p className="text-justify text-[#7a7a7a] text-sm lg:text-base   leading-7">
              {data?.SubCat1?.Para}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:justify-between lg:items-start lg:flex-row mt-7">
          <img
            className="max-w-xs  rounded-lg "
            src={data?.SubCat2?.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data?.SubCat2?.Tittle}</h1>
            <p className="text-justify text-[#7a7a7a] text-sm lg:text-base  leading-7">
              {data?.SubCat2?.Para}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:items-start lg:flex-row mt-7">
          <img
            className="order-2 max-w-xs   rounded-lg"
            src={data?.SubCat3?.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data?.SubCat3?.Tittle}</h1>
            <p className="text-justify text-[#7a7a7a] text-sm lg:text-base  leading-7">
              {data?.SubCat3?.Para}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:items-start lg:flex-row mt-7">
          <img
            className="max-w-xs rounded-lg "
            src={data?.SubCat4?.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data?.SubCat4?.Tittle}</h1>
            <p className="text-justify text-[#7a7a7a] text-smlg:text-base   leading-7">
              {data?.SubCat4?.Para}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:items-start lg:flex-row mt-7">
          <img
            className="order-2 max-w-xs rounded-lg"
            src={data?.SubCat5?.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data?.SubCat5?.Tittle}</h1>
            <p className="text-justify text-[#7a7a7a] text-sm lg:text-base leading-7">
              {data?.SubCat5?.Para}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:items-start lg:flex-row mt-7">
          <img
            className="max-w-xs rounded-lg  "
            src={data?.SubCat6?.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data?.SubCat6?.Tittle}</h1>
            <p className="text-justify text-[#7a7a7a] text-sm  lg:text-base leading-7">
              {data?.SubCat6?.Para}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:items-start lg:flex-row mt-7">
          <img
            className="order-2 max-w-xs rounded-lg "
            src={data?.SubCat7?.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data?.SubCat7?.Tittle}</h1>
            <p className="text-justify text-[#7a7a7a] text-sm lg:text-base leading-7">
              {data?.SubCat7?.Para}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:items-start lg:flex-row mt-7">
          <img
            className="max-w-xs rounded-lg  "
            src={data?.SubCat8?.image}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-semibold">{data?.SubCat8?.Tittle}</h1>
            <p className="text-justify text-[#7a7a7a] text-sm  leading-7">
              {data?.SubCat8?.Para}
            </p>
          </div>
        </div>
      </div>
      {/* Value Added Services section */}
    </section>
  );
}

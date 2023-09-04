import React from "react";
import { Card } from "./index";
import { Icons } from "./../index";

export default function WareHouseManagement({ data }) {
  return (
    <section classNamw="mt-5 md:mt-0">
      <div className="space-y-6">
        <h1 className="max-w-sm font-semibold md:max-w-full md:text-2xl lg:text-4xl">
          Consistent, reliable and efficient warehouse management
        </h1>
        <div className="flex flex-col items-start space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row text-[#7a7a7a]">
          <p>
            Venovet maintains and manages a network of Grade A warehousing
            facilities strategically located across India. Our warehousing
            services are trusted by the industry's front-runners for their
            consistent, reliable and efficient performance. Our experienced team
            makes use of the dedicated
          </p>
          <p>
            Warehouse Management System (WMS) & Transport Management System
            (TMS) that provides real-time data intelligence to re-model
            inventory management, driving measurable cost reductions.
          </p>
        </div>
      </div>
      {/* Offerings section*/}
      <div className="mt-5">
        <h1 className="text-lg md:text-xl lg:text-3xl">Our Offerings</h1>
        <div className="flex flex-col mt-5 space-y-4 md:items-start lg:space-x-10 lg:flex-row lg:space-y-0">
          <img
            className="max-w-sm rounded-lg"
            src={"https://venovet.com/assets/images/s1.jpg"}
            alt="imge"
          />
          <div className="max-w-lg space-y-3.5">
            <h1 className="text-xl font-bold text-orange-500 ">
              Distribution Warehousing
            </h1>
            <p className="text-[#7a7a7a] text-sm leading-6">
              Leverage our capabilities in developing and managing distribution
              centres in a dedicated/shared services model focused on driving
              100% order fulfilment. We utilise efficient resource management
              and automation techniques coupled with digitally-enabled purchase
              order and sales order management. This ensures seamless planning
              and execution of order fulfillment and provides real time
              inventory tracking and monitoring.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start space-y-4 lg:flex-row mt-7 lg:space-y-0">
        <img
          className="max-w-sm rounded-lg lg:order-2"
          src={"https://venovet.com/assets/images/s2.jpg"}
          alt="imge"
        />
        <div className="max-w-lg space-y-3.5 ">
          <h1 className="text-xl font-bold text-orange-500 ">
            Consolidation Warehousing
          </h1>
          <p className="text-[#7a7a7a] text-sm leading-6">
            Use our expertise and warehousing facilities to reduce your
            inventory level and capital investment by consolidating your small
            shipments from a number of suppliers in the same geographical area
            and combine them into larger, more economical shipping loads
            intended for the same area at a warehouse that act as a singular
            hub.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start space-y-4 lg:space-x-10 lg:flex-row mt-7 lg:space-y-0">
        <img
          className="max-w-sm rounded-lg"
          src={"https://venovet.com/assets/images/s3.jpg"}
          alt="imge"
        />
        <div className="max-w-lg space-y-3.5">
          <h1 className="text-xl font-bold text-orange-500 ">
            In-Plant Warehousing
          </h1>
          <p className="text-[#7a7a7a] text-sm leading-6">
            Our in-plant warehousing services act as a bridge between your
            suppliers and your manufacturing units. We follow the lean supply
            chain methodology, providing just the right amount of material
            necessary for production, to keep the holding cost low and enable
            JIT operations.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start space-y-4 lg:flex-row mt-7 lg:space-y-0">
        <img
          className="max-w-sm rounded-lg lg:order-2"
          src={"https://venovet.com/assets/images/s4.jpg"}
          alt="imge"
        />
        <div className="max-w-lg space-y-3.5">
          <h1 className="text-xl font-bold text-orange-500 ">
            VALUE ADDED SERVICES
          </h1>
          <p className="text-[#7a7a7a] text-sm leading-6">
            Improving efficiencies by expanding capabilities With operational
            and service excellence as our cornerstones, we offer a bouquet of
            services that complement our warehousing and transportation
            capabilities. These include:
            <ul className="pt-5 pl-4">
              <li className="list-disc">Labelling</li>
              <li className="list-disc">Reverse logistics</li>
              <li className="list-disc">Kitting/Dekitting</li>
              <li className="list-disc">Quality checks</li>
              <li className="list-disc">Refurbishing</li>
            </ul>
          </p>
        </div>
      </div>
      {/* Offerings section*/}

      {/* efficiency your competitive advantage section */}
      <div className="mt-7">
        <h1 className="text-xl font-semibold text-center md:text-2xl lg:text-3xl ">
          Make efficiency your competitive advantage
        </h1>
        <Card />
      </div>
      {/* efficiency your competitive advantage section */}

      {/* Experience Flexible Warehousing section */}
      <div className="flex flex-col items-start justify-start gap-8 mt-8 lg:flex-row">
        <div className="space-y-3">
          <h1 className="text-lg font-bold md:text-xl lg:text-2xl">
            Experience Flexible Warehousing
          </h1>
          <h2 className="font-semibold">
            Are you paying as per fixed terms when your requirements are
            dynamic?
          </h2>
          <p className="text-[#777777] leading-7 text-sm">
            Forget rigid contracts spanning years and leverage the on-demand
            services of our Multi User Facilities (MUFs) through a pay-per-use
            model. Get the unflinching support of a team of specialists,
            dedicated to helping you reduce costs, enhance customer service and
            drive efficiencies.
          </p>
        </div>
        <img
          className="max-w-sm rounded-lg"
          src={"https://venovet.com/assets/images/s5.jpg"}
          alt=""
        />
      </div>
      {/* Experience Flexible Warehousing section */}
      {/* why us section */}
      <div className="mt-7">
        <div className="space-y-3">
          <h1 className="text-lg md:text-xl lg:text-3xl">Why Us!</h1>
          <p className="text-[#777777] leading-7 text-sm">
            We continue to pursue that same vision in today’s complex, uncertain
            world, working every day to earn our customers’ trust! During that
            time, we’ve become expert in freight transportation by air and all
            its related services. We work closely with all major airlines around
            the world.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3">
          <Icons />
        </div>
      </div>
      {/* why us section */}
    </section>
  );
}
{
  /* <section classNamw="mt-5 md:mt-0">
      <div className="space-y-6">
        <h1 className="max-w-sm font-semibold md:max-w-full md:text-2xl lg:text-4xl">
          {data.Tittle1}
        </h1>
        <div className="flex flex-col items-start space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row text-[#7a7a7a]">
          <p>{data.Para1}</p>
          <p>{data.Para2}</p>
        </div>
      </div>
      {/* Offerings section*/
}
// <div className="mt-5">
//   <h1 className="text-lg md:text-xl lg:text-3xl">Our Offerings</h1>
//   <div className="flex flex-col mt-5 space-y-4 md:items-start lg:space-x-10 lg:flex-row lg:space-y-0">
//     <img
//       className="max-w-sm rounded-lg"
//       src={data.SubCat1.image}
//       alt="imge"
//     />
//     <div className="max-w-lg space-y-3.5">
//       <h1 className="text-xl font-bold text-orange-500 ">
//         {data.SubCat1.Tittle}
//       </h1>
//       <p className="text-[#7a7a7a] text-sm leading-6">
//         {data.SubCat1.Para}
//       </p>
//     </div>
//   </div>
// </div>

// <div className="flex flex-col items-start space-y-4 lg:flex-row mt-7 lg:space-y-0">
//   <img
//     className="max-w-sm rounded-lg lg:order-2"
//     src={data.SubCat2.image}
//     alt="imge"
//   />
//   <div className="max-w-lg space-y-3.5 ">
//     <h1 className="text-xl font-bold text-orange-500 ">
//       {data.SubCat2.Tittle}
//     </h1>
//     <p className="text-[#7a7a7a] text-sm leading-6">
//       {data.SubCat2.Para}
//     </p>
//   </div>
// </div>

// <div className="flex flex-col items-start space-y-4 lg:space-x-10 lg:flex-row mt-7 lg:space-y-0">
//   <img
//     className="max-w-sm rounded-lg"
//     src={data.SubCat3.image}
//     alt="imge"
//   />
//   <div className="max-w-lg space-y-3.5">
//     <h1 className="text-xl font-bold text-orange-500 ">
//       {data.SubCat3.Tittle}
//     </h1>
//     <p className="text-[#7a7a7a] text-sm leading-6">
//       {data.SubCat3.Para}
//     </p>
//   </div>
// </div>

{
  /* <div className="flex flex-col items-start space-y-4 lg:flex-row mt-7 lg:space-y-0">
        <img
          className="max-w-sm rounded-lg lg:order-2"
          src={data.SubCat4.image}
          alt="imge"
        />
        <div className="max-w-lg space-y-3.5">
          <h1 className="text-xl font-bold text-orange-500 ">
            {data.SubCat4.Tittle}
          </h1>
          <p className="text-[#7a7a7a] text-sm leading-6">
            {data.SubCat4.Para}
            <ul className="pt-5 pl-4">
              <li className="list-disc">Labelling</li>
              <li className="list-disc">Reverse logistics</li>
              <li className="list-disc">Kitting/Dekitting</li>
              <li className="list-disc">Quality checks</li>
              <li className="list-disc">Refurbishing</li>
            </ul>
          </p>
        </div>
      </div> */
}
{
  /* Offerings section*/
}

{
  /* efficiency your competitive advantage section */
}
// <div className="mt-7">
//   <h1 className="text-xl font-semibold text-center md:text-2xl lg:text-3xl ">
//     {data.Tittle3}
//   </h1>
//   <Card data={data} />
// </div>
{
  /* efficiency your competitive advantage section */
}

{
  /* Experience Flexible Warehousing section */
}
//   <div className="flex flex-col items-start justify-start gap-8 mt-8 lg:flex-row">
//     <div className="space-y-3">
//       <h1 className="text-lg font-bold md:text-xl lg:text-2xl">
//         {data.Subcat9.Tittle}
//       </h1>
//       <h2 className="font-semibold">{data.Subcat9.SubTittle}</h2>
//       <p className="text-[#777777] leading-7 text-sm">
//         {data.Subcat9.Para}
//       </p>
//     </div>
//     <img className="max-w-sm rounded-lg" src={data.Subcat9.image} alt="" />
//   </div>
//   {/* Experience Flexible Warehousing section */}
//   {/* why us section */}
//   <div className="mt-7">
//     <div className="space-y-3">
//       <h1 className="text-lg md:text-xl lg:text-3xl">{data.Tittle5}</h1>
//       <p className="text-[#777777] leading-7 text-sm">{data.Para5}</p>
//     </div>
//     <div className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3">
//       <Icons />
//     </div>
//   </div>
//   {/* why us section */}
// </section> */}

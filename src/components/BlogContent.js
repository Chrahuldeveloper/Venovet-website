import React from "react";
// import { useCollectionData } from "react-firebase-hooks/firestore";
// import { db } from "../Firebase";
// import { collection } from "firebase/firestore";
export default function BlogContent({ category }) {
  // const docref = collection(db, `BLOGS/${category}`);
  // const [data, loading, error] = useCollectionData(docref);
  // console.log(error ? error.message : data);
  return (
    <main className="p-5 shadow-md lg:max-w-3xl">
      <div>
        <div>
          <img src={"https://www.venovet.com/assets/images/s1.jpg"} alt="" />
        </div>
        <div className="mt-3 space-y-3 text-[#777777]">
          <h1 className="text-lg text-[#ff5e14] lg:text-xl font-semibold">
            Reducing the effective logistics costs of products by 8% for an FMCG
            giant
          </h1>
          <p>
            Explore how we enabled an industry leader in the FMCG sector to
            boost its profits by optimising its warehousing & secondary
            distribution.
          </p>
          <p>
            Our customer is an industry leader in the FMCG sector with a
            formidable multi-national presence. Within India, owing to the vast
            geographical spread of its supply chain, the company was facing
            myriad challenges in its warehousing and secondary distribution.
            This led to systemic losses and opportunity costs, eventually
            affecting the company’s growth and bottom-line.
          </p>
          <h2 className="text-lg text-[#ff5e14] lg:text-xl font-semibold">
            CHALLENGES
          </h2>
          <p className="text-black">
            A radical shift was desired in the way the company managed the
            movements of goods from its plants to warehouses and regional
            distribution centres. After a thorough assessment of its operations
            and value chain study, we identified the following key challenges:
          </p>
        </div>
        <div className="mt-4">
          <ul className="space-y-4 text-[#777777] ">
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                1. Unpredictable vehicle availability
              </h1>
              <p>
                The company was working with local transporters constantly
                competing with one another. This, coupled with intensive
                fluctuating business seasons, made vehicle shortage a regular
                phenomenon. It led to significant delays in the delivery of
                products to distribution centres and eventually the market. It
                also made budgeting, forecasting & planning incredibly
                difficult.
              </p>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                2. Poor load planning
              </h1>
              <p>
                The company required an integrated perspective on its secondary
                distribution operations. Its existing system of loading goods
                into trucks was inefficient with respect to both load
                optimisation (underutilised tonnage and/or volume) and loading
                time (24 hours).
              </p>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                3. Inefficiencies at the warehouse
              </h1>
              <p>
                Inefficient management of operations at the warehouse resulted
                in high operating costs, that also included ancillary costs in
                the form of high loading time and demurrage.
              </p>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                4. Lack of in-transit visibility
              </h1>
              <p>
                Working with local transporters meant no in-transit shipment
                visibility and total lack of accurate transit time estimations.
                This dealt a fatal blow to the inventory planning at the
                distribution level and led to high detention cost.
              </p>
            </li>
          </ul>
          <div className="space-y-3">
            <h2 className="text-lg text-[#ff5e14] lg:text-xl font-semibold mt-4">
              SOLUTION
            </h2>
            <p>
              To tackle rising costs and enable better inventory management with
              shorter transit times and more efficient operations, Varuna Group
              devised an integrated approach. Realising that the root cause of
              the challenges that the company was facing was the lack of an
              efficient 3PL network, we helped design and create the same around
              its manufacturing plants and regional distribution centres.
            </p>
          </div>
          <ul className="space-y-4 text-[#777777] mt-4">
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                1. Ensuring vehicle availability through dedicated allocations
              </h1>
              <p>
                Since market vehicles were at the mercy of seasonal demands, we
                allocated a fixed number of trucks from our fleet to the company
                to cope with the situation and warrant timely placements. To
                ensure continuous return movement for constant vehicle
                availability and also contain the cost of dedicating a part of
                our fleet, we assigned equal and opposite return loads to the
                vehicles.
              </p>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                2. Identifying the right vehicle fit & utilizing technology to
                ensure load optimisation
              </h1>
              <p>
                After a thorough analysis of the company’s products, we selected
                the right vehicle type. We moved away from manual load planning
                and introduced an advanced software to generate an optimum load
                plan basis the SKUs under consideration and the vehicle to be
                used. This enabled us to upgrade the space utilisation from 65%
                to 95% and facilitate cost-effective transportation.
              </p>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                3. Utilising buffer warehouses for better inventory management
              </h1>
              <p>
                The company had established a kitting warehouse next to its
                manufacturing units. After a thorough examination, our team
                introduced aggregation at this warehouse, using it as a buffer
                warehouse. We also kicked off strategic, streamlined measures
                such as 24x7 operations leading to optimized transit times and
                reduced detention through better inventory management.
              </p>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                4. Ensuring efficient operations
              </h1>
              <p>
                Strict adherence to global quality standards, developing
                comprehensive SOPs and periodic training of the workforce
                ensured seamless management of operations, significantly
                bringing down the costs related to demurrage, damages and other
                ancillary cost leakages.
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h1 className="text-lg text-[#ff5e14] lg:text-xl font-semibold mt-4">
            OUR PERFORMANCE
          </h1>
          <ul>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                1. 50% Reduction in transit times
              </h1>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                2. 100% En route vehicle visibility
              </h1>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                3. 0.04% Dispatch error
              </h1>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                4. 98% Placement efficiency
              </h1>
            </li>
            <li className="space-y-1.5">
              <h1 className="text-[#919191] font-bold">
                5. Increase in vehicle space utilization from 65% to 95%
              </h1>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-lg text-[#ff5e14] lg:text-xl font-semibold mt-4">
            RESULTS
          </h2>
          <p>
            As a result of our systematic, transparent and predictable
            operations, the company not only experienced massive improvements in
            its distribution chain but was also able to boost its profits. It
            was able to:
          </p>
        </div>
        <ul>
          <li className="space-y-1.5">
            <h1 className="text-[#919191] font-bold">
              1. Reduce cost per tonne
            </h1>
          </li>
          <li className="space-y-1.5">
            <h1 className="text-[#919191] font-bold">
              2. Reduce time to market
            </h1>
          </li>
          <li className="space-y-1.5">
            <h1 className="text-[#919191] font-bold">
              4. Register 8% reduction in the effective logistical cost of
              products
            </h1>
          </li>
          <li className="space-y-1.5">
            <h1 className="text-[#919191] font-bold">
              3. Reduce inventory size
            </h1>
          </li>
        </ul>
      </div>
    </main>
  );
}

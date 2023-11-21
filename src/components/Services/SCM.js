import React from "react";
import { BsLightbulb } from "react-icons/bs";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { RxCountdownTimer } from "react-icons/rx";
import { image1, image2 }  from '../../images/services/index'
export default function SCM() {
  const Approch = [
    {
      icons: <BsLightbulb size={27} color="#1266cf" />,
      Tittle: "AUTOMATION STUDY",
      Para: "We study your business process and offer solutions combined with the best practices in supply chain.",
      list1: "Feasibility Study",
      list2: "Evalution",
      list3: "PreRequsite Report",
      list4: "ROI Analysis",
    },
    {
      icons: <HiOutlinePaintBrush size={27} color="#1266cf" />,
      Tittle: "DESIGN PROCESS",
      Para: "We design our products to suit your warehouse layout, Structures and process with minimal customization.",
      list1: "Design Configuration",
      list2: "Software Configuration",
      list3: "Gripper & Robot Structure",
      list4: "Business Process Optimization",
    },
    {
      icons: <RxCountdownTimer size={27} color="#1266cf" />,
      Tittle: "DEPLOYMENT PROCESS",
      Para: "We deploy our automation systems parallel to existing business operations in stages or full flow.",
      list1: "Layout Preparation",
      list2: "Installation",
      list3: "Test & Deploy",
      list4: "API Integration",
    },
  ];

  const PRODUCTSOLUTIONS = [
    {
      icons: <BsLightbulb size={27} color="#1266cf" />,
      Tittle: "ORDER FULFILMENT",
      list1: "Storage & Retrieval",
      list2: "Inventory Tracking",
      list3: "Order Picking",
      list4: "Re-stacking",
    },
    {
      icons: <HiOutlinePaintBrush size={27} color="#1266cf" />,
      Tittle: "Barcoad Reading",
      list1: "Autonomous",
      list2: "Software Configuration",
      list3: "Palletizing",
      list4: "Delivery Reports",
    },
    {
      icons: <RxCountdownTimer size={27} color="#1266cf" />,
      Tittle: "PARCEL SORTING",
      list1: "Barcoad Reading",
      list2: "Online Weighing",
      list3: "3D Profile",
      list4: "Diverting",
    },
    {
      icons: <RxCountdownTimer size={27} color="#1266cf" />,
      Tittle: "FACTORY LOGISTICS",
      list1: "Set Way Points",
      list2: "Define Operation",
      list3: "Mobile Access",
      list4: "Storage & Retrieval",
    },
  ];

  return (
    <section>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-7">
        <img
          src={image1}
          className="rounded-lg lg:max-w-sm"
          alt=""
        />
        <div className="space-y-3 text-justify">
          <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl font-poppins">
            Overview
          </h1>
          <p className="text-[#777777]">
            Contract logistics services include analyzing customer
            sector-specific needs and business processes to plan and create a
            customized supply chain solution, which includes infrastructure
            design, inventory management and making technology-enabled
            distribution centres available for them.
          </p>
          <p className="text-[#777777]">
            Our distribution centres receive, store, track, and dispatch our
            customer's inventory and provide end-to-end real time visibility. We
            also provide value-added services, such as kitting, bundling, unit
            cartonisation and packaging solutions, depending on customer
            requirements.
          </p>
          <p className="text-[#777777]">
            One of the leaders among the logistics companies in India, our core
            competency lies in integrated technology-enabled Distribution
            Centres. We partner with our customers and co-create innovative
            supply chain solutions to effectively reduce their Time-to-Market.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-7 lg:flex-row">
        <div className="space-y-3 text-justify">
          <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl font-poppins">
            Key Competencies
          </h1>
          <p className="text-[#777777]">
            Capabilities to study customers' supply chain processes,
            re-engineer, build and implement efficient supply chain solutions
            for varied sectors
          </p>
          <p className="text-[#777777]">
            Technology-enabled distribution centres across India with warehouse
            height ranging from 7.5 to 14 meters
          </p>
          <p className="text-[#777777]">
            Multi-user, built-to-suit and scalable boxes based on customer
            requirements and the ability to manage high throughputs, large
            volumes and multiple SKU mix Proven expertise in Value Added
            Services such as Kitting, Bundling and Promo-packaging.
          </p>
        </div>
        <img
          src={image2}
          className="max-w-sm mx-auto rounded-lg lg:mx-0"
          alt=""
        />
      </div>

      <div className="mt-7">
        <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl font-poppins">
          OUR APPROACH
        </h1>
        <div className="flex flex-col gap-5 lg:flex-row mt-7">
          {Approch.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center"
                key={index}
              >
                <div className="border-[1px] border-gray-300 p-2 translate-y-5">
                  {item.icons}
                </div>
                <div className=" space-y-3 text-center bg-white shadow-md shadow-slate-50 border-[1px] border-gray-300 p-6 mt-3">
                  <h1 className="font-semibold text-orange-500">
                    {item.Tittle}
                  </h1>
                  <p className="text-[#777777] text-justify">{item.Para}</p>
                  <hr />
                  <ul className="space-y-1">
                    <li>{item.list1}</li>
                    <li>{item.list2}</li>
                    <li>{item.list3}</li>
                    <li>{item.list4}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-5 text-[#777777] mt-10 text-justify">
        <h1 className="text-xl font-semibold text-center text-black md:text-2xl lg:text-3xl font-poppins">
          OUR PRODUCT SOLUTIONS
        </h1>
        <p>
          VENOVET automation offers product solutions from inward goods receipt
          to the point goods exit the warehouse. Our fully automated Logistics
          Management Server is designed for very high through put and
          efficiency.
        </p>
        <p>
          Independent deployment of Robots for Order fulfilment, Segregation,
          Palletizing, Parcel Sorting, Online Weighing and profiling is made
          possible due to our modular flexible design.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-8 lg:grid-cols-2">
        {PRODUCTSOLUTIONS.map((item, index) => {
          return (
            <>
              <div className="" key={index}>
                <div className="p-7 space-y-3 text-center shadow-md border-[1px] border-gray-300 ">
                  <div className="border-[1px] w-14 h-14 mx-auto border-gray-300 p-3 ">
                    {item.icons}
                  </div>
                  <h1 className="font-semibold text-orange-500">
                    {item.Tittle}
                  </h1>
                  <ul className="space-y-2.5">
                    <li>{item.list1}</li>
                    <hr />
                    <li>{item.list2}</li>
                    <hr />
                    <li>{item.list3}</li>
                    <hr />
                    <li>{item.list4}</li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}

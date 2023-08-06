import React from "react";

const card = [
  {
    png: "https://venovet.com/assets/images/sicon18.png",
    Title: "Optimal Location",
    p: "Get the most suitable warehousing location that fits perfectly to your business needs at a price that makes sense to you.",
  },
  {
    png: "https://venovet.com/assets/images/sicon19.png",
    Title: "Time-bound services",
    p: "No more uncertainty, our warehouse network allows us to find possibilities and commit time with our customers to get them the warehouse.",
  },
  {
    png: "https://venovet.com/assets/images/sicon20.png",
    Title: "Detailed Profiles and Grading",
    p: "Get detailed information of various warehouse facilities from warehouse profiles. We grade individual facility so that you make better decisions.",
  },
  {
    png: "https://venovet.com/assets/images/sicon21.png",
    Title: "Free Consultation",
    p: "We help with your overall business plan and work with you to achieve your supply chain goals by finding the right facility as per your need*",
  },
];

const classification = [
  {
    img: "https://venovet.com/assets/images/sicon22.png",
    Title: "Explore",
    p: "We give you options to explore and will help you shortlist the right warehouses, all from the comfort of your office.",
  },
  {
    img: "https://venovet.com/assets/images/sicon23.png",
    Title: "Visit",
    p: "We arrange your site visit for the shortlisted warehouses and help you get answers for all the questions before we move any further.",
  },
  {
    img: "https://venovet.com/assets/images/sicon24.png",
    Title: "Book",
    p: "We take care of the heavy lifting and work with you to get your warehouse running as soon as possible.",
  },
];

const Everyone = [
  {
    img: "https://venovet.com/assets/images/sicon25.png",
    T: "3PLs",
    p: "When you are looking for expansion, we help you get the right warehouse on lease, suitable for operations, at the right price.",
  },
  {
    img: "https://venovet.com/assets/images/sicon26.png",
    T: "Manufacturers",
    p: "Raw materials and manufactured goods storage require industrial warehouse with right specifications, we arrange that for you.",
  },
  {
    img: "https://venovet.com/assets/images/sicon27.png",
    T: "Brands",
    p: "You need space to store your products and we arrange the warehouse close to your customers, so you can focus on your business.",
  },
  {
    img: "https://venovet.com/assets/images/sicon28.png",
    T: "Distribution",
    p: "Your space requirements increase as your business grows. Get the space near retailers or in city outskirts all from our network.",
  },
];
function RealEstate() {
  return (
    <div className="">
      <div>
        <h1 className="font-bold text-xl pb-8">WHAT WE PROVIDE:</h1>
        <div className="lg:flex space-x-4">
          <img
            className="max-w-xs rounded-md"
            src="https://venovet.com/assets/images/s30.jpg"
            alt=""
          />
          <div className="space-y-6 max-w-md text-[#777777] ">
            <p>
              Strategically located warehouse for every business need. 100+
              ready to occupy warehouse, available for rent
            </p>
            <p>
              We help you with your overall business plan and work with you to
              achieve your supply chain goals by arranging the facility optimal
              as per your need. We help arrange site visits, organise
              negotiation rounds and help you with the paperwork. Our goal is to
              get the facility available for operations in a time-bound manner,
              no strings attached.
            </p>
          </div>
        </div>
      </div>

      {/* second section ... */}
      <div className="py-10">
        <h1 className="text-xl font-bold py-8">
          Help your business succeed with our warehouse network
        </h1>
        <div className="lg:flex space-x-8">
          <img
            className="h-[45rem] rounded-md"
            src="https://venovet.com/assets/images/s32.jpg"
            alt=""
          />
          <div className="">
            {card.map((item, index) => {
              return (
                <div className="flex space-x-4 h-[32vh] shadow-lg px-4 py-8 rounded-lg bg-white my-2">
                  <img className="w-10 h-10" src={item.png} alt="" />
                  <div className="max-w-xs space-y-2">
                    <h1 className="font-bold">{item.Title}</h1>
                    <p className="text-[#777777]">{item.p}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Third section .... */}

      <div className="py-10 flex flex-col items-center ">
        <h1 className="font-bold text-2xl max-w-lg text-center">
          Easy classification to get you going fast, Lease warehouse in three
          simple steps
        </h1>
        <div className="lg:flex space-y-8 lg:space-y-0 justify-around pt-10 space-x-4">
          {classification.map((item, index) => {
            return (
              <div className="flex flex-col items-center justify-center">
                <img src={item.img} alt="" />
                <h1>{item.Title}</h1>
                <p className="text-[#777777] text-center max-w-xs">{item.p}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Warehouse for ervery one ... */}
      <div className="my-10">
        <h1 className="font-bold text-xl">Warehouse for Everyone</h1>
        <div className="grid lg:grid-cols-2 gap-4 pt-10">
          {Everyone.map((item, index) => {
            return (
              <div className="flex space-x-4 bg-white shadow-lg rounded-lg px-4 p-6">
                <img className="w-10 h-10" src={item.img} alt="" />
                <div>
                  <p className="font-bold">{item.T}</p>
                  <p className="text-[#777777]">{item.p}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RealEstate;

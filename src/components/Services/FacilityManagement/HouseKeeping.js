import React from "react";

export default function HouseKeeping({ data }) {
  return (
    <>
      <section className="mt-7">
        <div className="flex flex-col justify-start gap-4 md:flex-row">
          <div>
            <img
              src="https://venovet.com/assets/images/s51.jpg"
              alt="https://venovet.com/assets/images/s51.jpg"
              className="lg:max-w-xs"
            />
          </div>
          <div className="text-[#7a7a7a] space-y-5 text-justify">
            <h1 className="text-lg font-bold text-black md:text-xl">
              Housekeeping Services
            </h1>
            <p className="leading-8">
              We provide housekeeping services for corporate office, Office
              campus, Industries, IT Industries, Institutes and Commercial
              Complex by latest methods and well-trained housekeeping technical
              persons for a pleasant working environment.
            </p>
            <p className="leading-8">
              House Keeping services is maintained with all cleaning &
              sanitizing consumable material like hand wash soap, phenyl, urinal
              cubes, room spray, Glass cleaner, brasso & silvo polishing liquid,
              soap oil cleaning powder, Brooms, Cleaning cloths, mop stick,
              cotton waste, mop cloth, glass cloth, brushes, ordinal and Other
              Cleaning items. House keeping services can be rendered as one time
              cleaning, monthly cleaning or Daily cleaning on annual contract.
            </p>
          </div>
        </div>
        <div className="text-[#7a7a7a]  mt-3.5 text-justify">
          <h1 className="text-lg font-bold text-black md:text-xl">
            Our Housekeeping cleaning are as follows:
          </h1>
          <ul className="mt-4 ml-4 space-y-3">
            <li className="list-disc">
              Lobby, Offices, Boardrooms & Showrooms
            </li>
            <li className="list-disc">
              Corridors, Elevators, Stairwells & Landing
            </li>
            <li className="list-disc">Eating Areas/Cafeterias/Kitchenette</li>
            <li className="list-disc">Washrooms Cleaning</li>
            <li className="list-disc">
              Window Cleaning, Façade and Carpet cleaning
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

import React from "react";
import vechilesData from "../../Data/Vehicles";
export default function Transpotation() {
  const section1 = [
    {
      image: "https://venovet.com/assets/images/s9.jpg",
      Para: "VENOVET is a leading player in India road transportation industry and Logistics Services Provider. Transportation of Goods of all size and type is an integral part of our organization.We provide cost-effective logistics solutions that meets transport needs of Businesses.",
      Para2:
        "Logistic solutions using road network is provided to metro, urban and rural areas across India. We have myriad of vehicles in our fleet, these include trucks, trailers and solely owned vehicles. Fleet also includes forklifts, cranes and material handling equipment.",
    },
    {
      image: "https://venovet.com/assets/images/s10.jpg",
      Para: "Transportation is the most important aspect in every business for making its appearance in market by shifting of goods from one place to another. We guarantee you door to door delivery in India & proceeding by leaps and boundaries. We specify in cargo Road Transportation Services in India, which can simply be termed as spectacular and cost effective as well.",
    },
    {
      image: "https://venovet.com/assets/images/s11.jpg",
      Para: "The transport and logistics sector is a pivotal fundament that is important for the development of a country. Since the 1990s, the transportation infrastructure of India has undergone a significant change. While in the 90s, the demand for transport grew at an annual rate of 10%, in the last decade the demand in the transport and logistics industry grew along with the accelerating Indian GDP. This growth has increased the demand for practically all transport services.",
    },
    {
      image: "https://venovet.com/assets/images/s12.jpg",
      Para: "The annual cost spends for logistics services are estimated at 14% of the GDP as the share of the total value of goods. Normally, in emerging economies, these costs are about 6%-8% of the GDP. With this figure, Indian logistics costs are estimated to be the highest in the world. Therefore it is necessary to manage this sector more professionally in order to reduce operational costs, improve customer services and satisfaction levels and to become more competitive in global markets.",
    },
  ];

  const section3 = [
    {
      image: "https://venovet.com/assets/images/s34.jpg",
      List1: "Booking of all types of Tempo",
      List2: "Booking of all types of Trucks",
      List3: "Booking of Full Truck Load (FTL)",
      List4: "Booking of Part Truck Load (PTL)",
      List5: "Booking of all types of Heavy-Duty Trucks",
      List6: "Booking of closed-body containerized trucks",
      List7: "Booking of other light and heavy commercial vehicles",
      List8: "Temperature controlled transportation of perishable goods",
      List9:
        "Inter-state carriage of all types of Goods (except for Dangerous Goods)",
      List10:
        "Booking of all types of Trailers: Low Bed Trailer, High Bed Trailer, and Hydraulic Axle",
    },
    {
      image: "https://venovet.com/assets/images/s36.jpg",
      List1: "All our deliveries are safe and on time",
      List2: "All our vehicles are tested against pollution control",
      List3:
        "All the heavy goods vehicles are tested for the roadworthiness test",
      List4:
        "Most of the vehicles are laced with GPS device and can be tracked in real time",
      List5:
        "We comply with the road transportation policies as mentioned in the National Transportation Guidelines",
    },
  ];

  return (
    <>
      <div className="space-y-3.5">
        {section1.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col items-start gap-5 md:flex-row">
                <img src={item.image} alt={i} className="max-w-sm rounded-lg" />
                <div className="text-[#7a7a7a] space-y-3">
                  <p>{item.Para}</p>
                  {item.Para2 ? <p>{item.Para2}</p> : null}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="text-[#7a7a7a] space-y-3.5 mt-5">
        <p>
          Another fact is that transport and logistics services in India,
          consume a large portion of energy, especially petroleum products. This
          share increases even more in India with the growth of economy and
          population. Urbanization and fast industrialization also increase this
          consumption because of higher demand in freight and passenger
          transport. The Indian urban population grows at an average rate of 3%
          a year and has increased significantly in the last 50 years from 285
          million in 2001 to 1.34 billion in 2017 as of 14th feb.
        </p>
        <p>
          Our road transportation service in India relaxes our clients to get
          the goods delivered at their demanded place. This also reflects our
          networking in terms of road transportation service in India. VENOVET
          has a wide coverage in Indian Road transportation service which allows
          us to cover all the territories of our country as to ease the clients.
          We have covered approximately all the major destinations for road
          transportation services in India. We have been specialised in
          delivering the goods via road transport on PAN India basis. The base
          of our services lies in our approach where attention is paid to each
          and every possible aspect. So feel free to come and join us for
          efficient and very effective Road Transportation Service in India
          offered by us.
        </p>
      </div>
      <div className="mt-6 space-y-7">
        {section3.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="flex flex-col items-start gap-8 md:flex-row">
                <img src={item.image} alt={i} className="max-w-sm rounded-lg" />
                <ul className="text-[#7a7a7a] space-y-2">
                  <li className="list-disc">{item.List1}</li>
                  <li className="list-disc">{item.List2}</li>
                  <li className="list-disc">{item.List3}</li>
                  <li className="list-disc">{item.List4}</li>
                  <li className="list-disc">{item.List5}</li>
                  {item.List6 ? (
                    <li className="list-disc">{item.List6}</li>
                  ) : null}
                  {item.List7 ? (
                    <li className="list-disc">{item.List7}</li>
                  ) : null}
                  {item.List8 ? (
                    <li className="list-disc">{item.List8}</li>
                  ) : null}
                  {item.List9 ? (
                    <li className="list-disc">{item.List9}</li>
                  ) : null}
                  {item.List10 ? (
                    <li className="list-disc">{item.List10}</li>
                  ) : null}
                </ul>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-7">
        <h1 className="font-semibold md:text-xl ">
          Types Of Vehicles We Provide
        </h1>
        <div className="grid grid-cols-4 gap-3 mt-5 place-items-center">
          {vechilesData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="max-w-xs p-5 text-center rounded-lg shadow-md">
                  <h1>{item.Name}</h1>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

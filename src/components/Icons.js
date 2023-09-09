import React from "react";

export default function Icons() {
  const data = [
    {
      icon: "https://7oroof.com/tfdemos/optime/wp-content/uploads/2019/03/Wallet-Icon.png",
      Tittle: "Transparent Pricing",
    },
    {
      icon: "https://7oroof.com/tfdemos/optime/wp-content/uploads/2019/03/015-search.png",
      Tittle: "Real-Time Tracking",
    },
    {
      icon: "https://7oroof.com/tfdemos/optime/wp-content/uploads/2019/03/Trolley-Icon.png",
      Tittle: "Warehouse Storage",
    },
    {
      icon: "https://7oroof.com/tfdemos/optime/wp-content/uploads/2019/03/Security-Icon.png",
      Tittle: "Security For Cargo ",
    },
    {
      icon: "https://7oroof.com/tfdemos/optime/wp-content/uploads/2019/03/Payments-Icon.png",
      Tittle: "Easy Payment Methods ",
    },
    {
      icon: "https://7oroof.com/tfdemos/optime/wp-content/uploads/2019/03/Call-Center-Icon.png",
      Tittle: "24/7 Hours Support",
    },
  ];

  return (
    <>
      {data.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center justify-center space-y-5 border-[1px] border-gray-200 p-5 ">
              <img src={_.icon} alt="" className="w-10 h-10" />
              <h1 className="font-semibold ">{_.Tittle}</h1>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
}

import React from "react";

export default function Inventory() {
  const AuditServices = [
    {
      Tittle: "Step 1: Detailed Discussion",
      Para: "This involves detailed discussion with our Patron expert to understand your your business, frequency of stock-audit, scope of stock audit,, location, man-days. This step will help us to understand your requirement and set the processes accordingly",
    },
    {
      Tittle: "Step 2: Detailed Scoping and Quotation",
      Para: "After having the detailed discussion, our Patron expert will have brainstorm internally to design a proper process keeping in mind the your requirements. Patron expert will share the scope and quotation with you for approval. This will help to bridge any communication gap.",
    },
    {
      Tittle: "Step 3: Stock Audit Plan",
      Para: "Once scope and quotation is agreed; all information will be collected like bank statement, invoices in order start the accounting, set-up software Like tally, Zoho , GST login credentials. . Patron expert will analyse the information and communicate with you expected day for next communication.",
    },
    {
      Tittle: "Step 4: Execution",
      Para: "Patron field staff will execute the stock audit as per planat different locations.",
    },
    {
      Tittle: "Step 5: Report the findings",
      Para: "All observations will be presented in the required format to the client.",
    },
  ];
  const Benefits = [
    {
      Tittle: "Prevents Fraud & Pilferage",
      Para: "Stock audit services will disclose any failure due to lack of security which results in loss, theft, or misappropriation. It is also crucial to any sort of inventory losses resulting from wastages, pilferage, dormant and obsolete stock. It also helps in finding out any discrepancies in the packaging and warehouse procedures.",
    },
    {
      Tittle: "Comparative Profitability",
      Para: "Stock audit enables the true picture of the financial position of the company as the stock that requires replacement or repairment can be worked on efficiently thereby saving the company from any kind of financial loss.",
    },
    {
      Tittle: "Independent Third Party Opinion",
      Para: "An accurate valuation of the inventory and gap identification in the current inventory management process can be done with the help of professional firm: Stock Audit helps in cross verifications of the stock of the company having multiple business locations.",
    },
    {
      Tittle: "Identification of Slow-moving & Deadstock",
      Para: "Stock audit is necessary to reduce unnecessary investments on stocks and to ensure that you have a proper line balancing in the process. It helps to keep a track of the inventory to avoid any shortage and overstocking of the material. Also, the process of inventory management becomes easier in case the company is dealing with various vendors.",
    },
  ];

  return (
    <section>
      {/* What is Stock Audit Services*/}
      <div className="flex flex-col gap-5 lg:flex-row">
        <img
          src="https://venovet.com/assets/images/s20.jpg"
          className="rounded-lg"
          alt=""
        />
        <div className="space-y-4 ">
          <h1 className="text-lg font-semibold lg:text-2xl">
            What is Stock Audit Services
          </h1>
          <p className="text-[#777777]">
            Stock Audit is an imperative auditing term referring to the physical
            verification of the inventory with computed stock maintained by the
            company. The major purpose to conduct this activity is to rule out
            the discrepancies in the book stock and physical stock by passing
            adjustment entries.
          </p>
          <p className="text-[#777777]">
            Even though this statutory process needs to be performed at least
            once in a financial year by the business institutions, stock audit
            also known as inventory audit has become a particularly important
            practice especially for expanding businesses where being on
            multi-locations, dealing through vendors and dealers is a general
            pattern. To run the business swimmingly and have an uncanny
            presence, one needs to keep an unerring track for inventory, being
            tangible or intangible. And, it is always important to keep into
            consideration the purpose for which audit is being conducted because
            of different approaches being used in discrete audit procedures.
          </p>
        </div>
      </div>
      {/* What is Stock Audit Services*/}
      {/*Eligibility For Stock Audit Services */}
      <div className="flex flex-col items-start gap-6 mt-8 lg:flex-row">
        <div className="space-y-3">
          <h1 className="text-lg font-semibold lg:text-2xl">
            Eligibility For Stock Audit Services
          </h1>
          <ul className="space-y-3 text-[#777777]">
            <li className="list-disc">
              Any business house or individual can get its stock
              audit/verfication for taking better decision making
            </li>
            <li className="list-disc">
              Stock audit can be done under statutory requirement of banks etc.
            </li>
          </ul>
        </div>
        <img
          className="max-w-sm rounded-lg"
          src="https://venovet.com/assets/images/s21.jpg"
          alt=""
        />
      </div>
      {/*Eligibility For Stock Audit Services */}

      {/*Process for Stock Audit Services */}
      <div>
        <h1 className="text-lg font-semibold md:text-xl lg:text-2xl">
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
        <h1 className="text-lg font-semibold md:text-xl lg:text-2xl">
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

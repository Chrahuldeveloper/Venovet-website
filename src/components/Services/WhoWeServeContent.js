import React from "react";
import { venovetChart } from "../../images/index";
import { KeyBenifits } from "../../components/index";

export default function WhoWeServeContent({ data }) {
  const WhyUsData = [
    {
      image: "https://venovet.com/assets/images/icon.png",
      Tittle: "Transparent Pricing         ",
    },
    {
      image: "https://venovet.com/assets/images/icon-1.png",
      Tittle: "Real-Time Tracking",
    },
    {
      image: "https://venovet.com/assets/images/icon-5.png",
      Tittle: "Warehouse Storage",
    },
    {
      image: "https://venovet.com/assets/images/icon-2.png",
      Tittle: "Security For Cargo",
    },
    {
      image: "https://venovet.com/assets/images/icon-3.png",
      Tittle: "Payment Methods",
    },
    {
      image: "https://venovet.com/assets/images/icon-4.png",
      Tittle: "24/7 Hours Support",
    },
  ];

  const DynamicContent = {
    Tittle1: "Overview",
    Para1:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quas provident ea, ex, cum incidunt officia pariatur amet, velit recusandae est. Dignissimos praesentium iste deleniti reprehenderit! Excepturi exercitationem porro vero deserunt molestiae perspiciatis. Aut tempore molestias, sed ipsam sequi nisi! Aliquid nemo atque quibusdam harum. Suscipit labore repudiandae cum quos nulla voluptates totam, delectus minus molestiae reprehenderit consectetur eaque corporis incidunt dolore asperiores iure doloribus, voluptatem dolorum unde. Accusamus distinctio libero aliquid nam? Accusamus veritatis rerum, explicabo voluptate alias deleniti eaque! Dolores recusandae eveniet explicabo voluptas ducimus pariatur deserunt. Eaque dolorum debitis iste velit magni consequatur modi perferendis voluptatem iure.",
    Para2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quas provident ea, ex, cum incidunt officia pariatur amet, velit recusandae est. Dignissimos praesentium iste deleniti reprehenderit! Excepturi exercitationem porro vero deserunt molestiae perspiciatis. Aut tempore molestias, sed ipsam sequi nisi! Aliquid nemo atque quibusdam harum. Suscipit labore repudiandae cum quos nulla voluptates totam, delectus minus molestiae reprehenderit consectetur eaque corporis incidunt dolore asperiores iure doloribus, voluptatem dolorum unde. Accusamus distinctio libero aliquid nam? Accusamus veritatis rerum, explicabo voluptate alias deleniti eaque! Dolores recusandae eveniet explicabo voluptas ducimus pariatur deserunt. Eaque dolorum debitis iste velit magni consequatur modi perferendis voluptatem iure.",
    Para3:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quas provident ea, ex, cum incidunt officia pariatur amet, velit recusandae est. Dignissimos praesentium iste deleniti reprehenderit! Excepturi exercitationem porro vero deserunt molestiae perspiciatis. Aut tempore molestias, sed ipsam sequi nisi! Aliquid nemo atque quibusdam harum. Suscipit labore repudiandae cum quos nulla voluptates totam, delectus minus molestiae reprehenderit consectetur eaque corporis incidunt dolore asperiores iure doloribus, voluptatem dolorum unde. Accusamus distinctio libero aliquid nam? Accusamus veritatis rerum, explicabo voluptate alias deleniti eaque! Dolores recusandae eveniet explicabo voluptas ducimus pariatur deserunt. Eaque dolorum debitis iste velit magni consequatur modi perferendis voluptatem iure.",
    Tittle2: "Stats & Charts",
    ChartsPara1:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry^^s standard dummy textever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book.",
    ChartsPara2:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry^^s standard dummy textever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book.",
    ChartsPara3:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry^^s standard dummy textever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book",
    Tittle3: "How It Works?",
    HowItWorksPara:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry^^s standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book.",
    whyusPara:
      "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry^^s standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };

  return (
    <section className="md:max-w-3xl p-4">
      <div className="space-y-4 text-[#7a7a7a]">
        <h1 className="font-semibold font-poppins text-black text-2xl md:text-3xl lg:text-4xl">
          {DynamicContent.Tittle1}
        </h1>
        <p className="text-justify">{data?.Overview}</p>
      </div>

      <div className="mt-7">
        <h1 className="font-semibold font-poppins text-black text-2xl md:text-3xl lg:text-4xl">
          {DynamicContent.Tittle2}
        </h1>
        <div className="flex flex-col items-start gap-5 mt-5 md:flex-row">
          <div className="space-y-4 text-[#7a7a7a]">
            <p className="text-justify">{data?.Stats}</p>
          </div>
          <div>
            <img src={venovetChart} alt={venovetChart} className="max-w-md" />
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-7">
        <h1 className="font-semibold font-poppins text-black text-2xl md:text-3xl lg:text-4xl">
          {DynamicContent.Tittle3}
        </h1>
        <p className="text-[#7a7a7a] leading-8">
          <p className="text-justify">{data?.How}</p>
        </p>
        <img src={data?.Image} alt="" />
      </div>

      <div className="space-y-4 mt-7">
        <h1 className="font-semibold font-poppins text-black text-2xl md:text-3xl lg:text-4xl">
          Why Us!
        </h1>
        <p className="text-[#7a7a7a] leading-8">{data?.Why}</p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WhyUsData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="p-3 space-y-3 text-center shadow-xl rounded-xl">
                  <img src={item.image} alt={index} className="mx-auto" />
                  <h1 className="text-lg font-semibold md:text-xl ">
                    {item.Tittle}
                  </h1>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {/* Key Benifits */}
      <KeyBenifits />
    </section>
  );
}

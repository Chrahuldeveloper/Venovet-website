import React from "react";
import { venovetChart } from "../../images/index";
import { KeyBenifits } from "../../components/index";

export default function WhoWeServeContent() {
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

  return (
    <section className="max-w-3xl">
      <div className="space-y-4 text-[#7a7a7a]">
        <h1 className="font-bold text-black md:text-lg lg:text-2xl">
          Overview
        </h1>
        <p className="leading-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quas
          provident ea, ex, cum incidunt officia pariatur amet, velit recusandae
          est. Dignissimos praesentium iste deleniti reprehenderit! Excepturi
          exercitationem porro vero deserunt molestiae perspiciatis. Aut tempore
          molestias, sed ipsam sequi nisi! Aliquid nemo atque quibusdam harum.
          Suscipit labore repudiandae cum quos nulla voluptates totam, delectus
          minus molestiae reprehenderit consectetur eaque corporis incidunt
          dolore asperiores iure doloribus, voluptatem dolorum unde. Accusamus
          distinctio libero aliquid nam? Accusamus veritatis rerum, explicabo
          voluptate alias deleniti eaque! Dolores recusandae eveniet explicabo
          voluptas ducimus pariatur deserunt. Eaque dolorum debitis iste velit
          magni consequatur modi perferendis voluptatem iure.
        </p>
        <p className="leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fuga
          modi laudantium aperiam odio numquam repellat, est explicabo nesciunt
          magnam ullam eos, ipsa neque consequuntur corporis dignissimos
          corrupti placeat dolor architecto. Soluta aut repudiandae, temporibus
          id nostrum, ratione veritatis nobis nam, quae optio incidunt facilis.
          Fugiat deleniti neque perspiciatis at alias. Omnis harum error ipsam
          sunt debitis commodi similique dolores optio exercitationem mollitia
          nemo aliquam asperiores cum vel, necessitatibus impedit quam ducimus
          voluptas quas ullam accusamus sed! Minus, velit? Molestiae optio
          tempore nobis tenetur at modi omnis quisquam reiciendis laudantium?
          Dolor minima mollitia, hic enim repellendus libero! Distinctio,
          tempora suscipit!
        </p>
        <p className="leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          voluptatibus recusandae provident rerum molestias, perferendis quis
          tempore inventore soluta. Similique rem dicta dolores? Repudiandae non
          aliquid maiores minima voluptatem animi quisquam saepe obcaecati, qui
          accusamus, sequi maxime facere! Magni ad assumenda numquam at
          consequuntur dicta laudantium, nihil cupiditate provident possimus!
          Atque unde esse similique voluptatem repellendus exercitationem
          molestias ab ducimus deleniti provident tenetur aspernatur odio
          dolorum accusantium fuga quas quibusdam error quisquam, cum, aut,
          deserunt perferendis dicta! Perferendis alias dolorem dignissimos
          tempora corporis maxime cum dolor, tenetur ab sunt sequi natus
          molestias? Minima dignissimos quia perferendis architecto enim.
          Nostrum, enim?
        </p>
      </div>

      <div className="mt-7">
        <h1 className="font-bold text-black md:text-lg lg:text-2xl">
          Stats & Charts
        </h1>
        <div className="flex flex-col items-start gap-5 mt-5 md:flex-row">
          <div className="space-y-4 text-[#7a7a7a]">
            <p className="leading-">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry^^s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="leading-">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry^^s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="leading-">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry^^s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <img src={venovetChart} alt="" className="max-w-md" />
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-7">
        <h1 className="font-bold text-black md:text-lg lg:text-2xl">
          How It Works?
        </h1>
        <p className="text-[#7a7a7a] leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry^^s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <img
          src="https://venovet.com/assets/images/1643377320_service-consumer-goods-1.jpg"
          alt=""
        />
      </div>

      <div className="space-y-4 mt-7">
        <h1 className="font-bold text-black md:text-lg lg:text-2xl">Why Us!</h1>
        <p className="text-[#7a7a7a] leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry^^s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WhyUsData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="p-3 space-y-3 text-center shadow-xl rounded-xl">
                  <img src={item.image} alt={index} className="mx-auto" />
                  <h1 className="text-lg font-extrabold md:text-xl ">
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

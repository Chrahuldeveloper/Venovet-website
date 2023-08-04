import React from "react";
import { AboutUsFaq } from "../components/index";

export default function AboutUsSection() {
  return (
    <section>
      <div className="space-y-4  px-10 md:px-0 md:pl-48 pt-5">
        <h1 className=" font-semibold text-orange-500 md:text-lg ">
          FOR ALL YOUR
        </h1>
        <p className="font-bold lg:text-2xl md:text-xl">CARGO NEEDS</p>
      </div>
      <AboutUsFaq />
    </section>
  );
}

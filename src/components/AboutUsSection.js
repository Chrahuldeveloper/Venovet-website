import React from "react";
import { AboutUsFaq } from "../components/index";

export default function AboutUsSection() {
  return (
    <section className="p-10">
      <div className="px-10 pt-5 space-y-4 md:px-0 ">
        <h1 className="font-semibold text-[#ff5e15] md:text-lg ">
          FOR ALL YOUR
        </h1>
        <p className="font-semibold md:text-xl lg:text-3xl">CARGO NEEDS</p>
      </div>
      <AboutUsFaq />
    </section>
  );
}

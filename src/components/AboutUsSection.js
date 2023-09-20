import React from "react";
import { AboutUsFaq } from "../components/index";

export default function AboutUsSection() {
  return (
    <section>
      <div className="px-10 pt-5 space-y-4 md:px-0 md:pl-48">
        <h1 className="font-semibold text-orange-500 md:text-lg lg:text-2xl">
          FOR ALL YOUR
        </h1>
        <p className="font-bold md:text-xl lg:text-3xl">CARGO NEEDS</p>
      </div>
      <AboutUsFaq />
    </section>
  );
}

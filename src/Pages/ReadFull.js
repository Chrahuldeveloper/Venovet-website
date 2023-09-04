import React from "react";
import {
  Footer,
  Navbar,
  NewsLetter,
  ServiceHeroSection,
  BlogContent,
} from "../components";
import { Brochure } from "../components/Services/index";
import { Help } from "../components/Services/index";

export default function ReadFull({category}) {
  return (
    <body className="overflow-x-clip">
      <main>
        <Navbar Page={"whatwedo"} />
        <ServiceHeroSection image={""} Tittle={""} Para={""} />
        <div className="flex flex-col max-w-5xl gap-16 p-5 mx-auto lg:max-w-7xl md:flex-row md:justify-around md:items-start">
          <div className="space-y-8">
            <Help />
            <Brochure />
          </div>
          <div>
            <BlogContent category={category}/>
          </div>
        </div>
        <NewsLetter />
        <Footer />
      </main>
    </body>
  );
}

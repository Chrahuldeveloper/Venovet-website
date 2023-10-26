import React from "react";
import {
  Footer,
  Navbar,
  NewsLetter,
  BlogContent,
  BlogPageHeroSection,
} from "../components";
import { Brochure } from "../components/Services/index";
import { Help } from "../components/Services/index";
import { useParams } from "react-router-dom";

export default function ReadFull() {
  const { tittle } = useParams();
  console.log(tittle);
  return (
    <body className="overflow-x-clip">
      <main>
        <Navbar Page={"Blog"} />
        <BlogPageHeroSection />
        <div className="flex flex-col max-w-5xl gap-16 p-5 mx-auto lg:max-w-7xl md:flex-row md:justify-around md:items-start">
          <div className="space-y-8">
            <Help />
            <Brochure />
          </div>
          <div>
            <BlogContent category={tittle} />
          </div>
        </div>
        <NewsLetter />
        <Footer />
      </main>
    </body>
  );
}

import React, { useEffect, useState } from "react";
import {
  FilterCategory,
  Footer,
  Navbar,
  NewsLetter,
  ServiceHeroSection,
} from "../components";
import { WhoWeServeContent } from "../components/Services/index";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import Data from "../Data/WhoweserveCategories";
export default function WhoWeServer() {
  const { categoryid } = useParams();
  const [servedata, setservedata] = useState();
  const replaceHyphensExceptAutoMobility = (categoryId) => {
    return categoryId.split("-").reduce((acc, part, index, array) => {
      const nextPart = array[index + 1]?.toLowerCase();
      if (part.toLowerCase() === "auto" && nextPart === "mobility") {
        // Skip the next part and add "Auto-Mobility"
        array[index + 1] = "";
        return acc + (acc ? " " : "") + "Auto-Mobility";
      } else if (part === "") {
        // Skip empty parts (used to handle skipped "mobility" after "auto")
        return acc;
      }
      return acc + (acc ? " " : "") + part;
    }, "");
  };

  const decodedCategory = replaceHyphensExceptAutoMobility(categoryid);
  const defaultData = Data.find((item) => item.catgeory === decodedCategory);
  console.log(decodedCategory);

  useEffect(() => {
    const fetchData = async () => {
      const documentRef = doc(db, "WHO-WE-SERVE", decodedCategory);
      const documentSnapshot = await getDoc(documentRef);
      setservedata(documentSnapshot.data());
      // console.log(documentSnapshot.data());
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [decodedCategory]);

  return (
    <div className="overflow-x-clip">
      <main>
        <Navbar Page={"whatwedo"} />
        <ServiceHeroSection
          image={defaultData?.image}
          Tittle={defaultData?.Tittle}
          Para={defaultData?.Para}
        />
        <div className="flex flex-col items-start justify-center gap-10 px-5 mt-4 md:px-12 lg:px-24 lg:flex-row">
          <FilterCategory Tittle={"Who We Serve"} Page={"whoweserve"} />
          <WhoWeServeContent data={servedata} />
        </div>
        <NewsLetter />
        <Footer />
      </main>
    </div>
  );
}

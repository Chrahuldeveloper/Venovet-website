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
import Data from '../Data/WhoweserveCategories'
export default function WhoWeServer() {
  const { categoryid } = useParams();
  const [servedata, setservedata] = useState();
  const decodedCategory = decodeURIComponent(categoryid);
  const defaultData = Data.find(
    (item) => item.catgeory === decodedCategory
  );

  useEffect(() => {
    const fetchData = async () => {
      const documentRef = doc(db, "WHO-WE-SERVE", categoryid);
      const documentSnapshot = await getDoc(documentRef);
      setservedata(documentSnapshot.data());
      // console.log(documentSnapshot.data());
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [categoryid]);

  return (
    <div className="overflow-x-clip">
      <main>
        <Navbar Page={"whatwedo"} />
        <ServiceHeroSection
          image={defaultData.image}
          Tittle={defaultData.Tittle}
          Para={defaultData.Para}
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

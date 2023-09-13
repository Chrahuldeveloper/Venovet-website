import React, { useEffect, useState } from "react";
import {
  FilterCategory,
  Footer,
  Navbar,
  NewsLetter,
  ServiceHeroSection,
} from "../components";
import { WhoWeServeContent } from "../components/Services/index";
import { useLocation, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

export default function WhoWeServer() {
  const data = useLocation();
  const { categoryid } = useParams();
  console.log(categoryid);
  const { image, Tittle, Para } = data.state;
  const [servedata, setservedata] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const documentRef = doc(db, "WHO-WE-SERVE", categoryid);
      const documentSnapshot = await getDoc(documentRef);
      setservedata(documentSnapshot.data());
      console.log(documentSnapshot.data());
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [categoryid]);

  return (
    <body className="overflow-x-clip">
      <main>
        <Navbar Page={"whatwedo"} />
        <ServiceHeroSection image={image} Tittle={Tittle} Para={Para} />
        <div className="flex flex-col items-start justify-center gap-10 mt-4 lg:flex-row">
          <FilterCategory Tittle={"Who We Serve"} Page={"whoweserve"} />
          <WhoWeServeContent data={servedata} />
        </div>
        <NewsLetter />
        <Footer />
      </main>
    </body>
  );
}

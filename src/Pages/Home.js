import { useEffect, useState } from "react";
import {
  About,
  Navbar,
  Slider,
  // Testimonials,
  FAQ,
  Footer,
  Features,
  Services,
  Blogs,
  Bridge,
  NewsLetter,
  Enquire,
  DragTop,
} from "../components";
import { useLocation } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

export default function Home() {
  const location = useLocation();
  // const [isSubmitting, setIsSubmiting] = useState(true);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setIsSubmiting(false);
  //   };

  //   window.addEventListener("load", handleLoad);
  //   //to avoid memory leaks
  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsContentLoaded(true);
    };

    // Check if the content is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset loading status when the location changes
    setIsContentLoaded(true);
  }, [location]);
  return (
    <div className="scroll-smooth overflow-x-clip animate__animated animate__fadeIn animate__delay-0.3s">
      {!isContentLoaded && ( // Render loader only when isSubmitting is true
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-75">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#ff5e15"]}
          />
        </div>
      )}
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Features />
      <Enquire />
      {/* <Testimonials /> */}
      <FAQ />
      <Bridge />
      <Blogs />
      <NewsLetter />
      <DragTop />
      <Footer />
    </div>
  );
}

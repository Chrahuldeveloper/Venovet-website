import { useEffect } from "react";
import {
  About,
  Navbar,
  Slider,
  Testimonials,
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

export default function Home() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <body className="overflow-x-clip animate__animated animate__fadeIn animate__delay-0.3s">
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Features />
      <Enquire />
      <Testimonials />
      <FAQ />
      <Bridge />
      <Blogs />
      <NewsLetter />
      <DragTop />
      <Footer />
    </body>
  );
}

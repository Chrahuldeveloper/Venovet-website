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

export default function Home() {
  return (
    <body className="overflow-x-clip">
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

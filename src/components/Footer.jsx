import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
const Footer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    // console.log(container);
  }, []);
  const currentYear = new Date().getFullYear();

  const [links, setlinks] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentRef = doc(db, "SOCIAL-MEDIA-URL", "LINKS");
        const documentSnapshot = await getDoc(documentRef);
        if (documentSnapshot.exists()) {
          setlinks(documentSnapshot.data());
        } else {
          setlinks(null); // Handle the case where the document doesn't exist
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative">
      <Particles
        id="particle"
        init={particlesInit}
        loaded={particlesLoaded}
        className="h-[80rem] md:h-[50rem] lg:h-[26rem]"
        options={{
          fullScreen: {
            enable: false,
          },
          background: {
            color: {
              value: "#0a1024",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="absolute  justify-betwee   flex justify-center items-center top-0 w-[100%] text-[#d5d5d5] left-3 right-3">
        <div className=" pt-20 lg:flex space-y-14 lg:space-y-0 ">
          {/* //first section */}
          <div className="space-y-4 ">
            <img
              src="https://venovet.com/assets/images/retina-logo2.png"
              alt=""
            />
            <p className="max-w-sm leading-8">
              Transporting the Goods from Source to our Warehouse, Inwarding the
              Goods, Quality Check, Storage, Dispatch, Reporting and End
              Customer Delivery Transportation.
            </p>
          </div>
          {/* second section  */}
          <div className="space-y-8 md:flex md:justify-between md:space-y-0 md:space-x-20 ">
            <div className="space-y-4 ">
              <h1 className="text-lg font-semibold text-white">ABOUT US</h1>
              <ul className="text-[17px] cursor-pointer">
                <Link to="/about">
                  <li className="my-4 hover:text-[#ff5e15] transition duration-700 hover:translate-x-3  ease-in-out">
                    About Us
                  </li>
                </Link>
                <Link
                  to="/whatwedo/Warehouse Management (2PL & 3PL)"
                  state={{
                    image: "https://venovet.com/assets/images/bgs8.jpg",
                    Tittle: "Venovet's Warehouse Management",
                    Para: "Give an efficiency boost to your inventory management",
                  }}
                >
                  <li className="my-4 hover:text-[#ff5e15] transition duration-700 hover:translate-x-3  ease-in-out ">
                    What we do
                  </li>
                </Link>
                <Link
                  to="/whoweserve/"
                  state={{
                    image: "https://venovet.com/assets/images/bgs8.jpg",
                    Tittle: "Fast Moving Consumer Goods (FMCG)",
                    Para: "Relaxes our clients to get the goods delivered at their demanded place",
                  }}
                >
                  <li className="my-4 hover:text-[#ff5e15] transition duration-700 hover:translate-x-3  ease-in-out">
                    Who we serve
                  </li>
                </Link>
                <Link to="/BlogPage">
                  <li className="my-4 hover:text-[#ff5e15] transition duration-700 hover:translate-x-3  ease-in-out">
                    Our Blog
                  </li>
                </Link>
              </ul>
            </div>
            <div className="space-y-4 ">
              <h1 className="text-lg font-semibold text-white">SUPPORT</h1>
              <ul className="space-y-4  text-[17px] cursor-pointer md:w-36">
                <Link to="/contact">
                  <li className="my-4 hover:text-[#ff5e15] transition duration-700 hover:translate-x-3  ease-in-out">
                    Request a Quote
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="my-4 hover:text-[#ff5e15] transition duration-700 hover:translate-x-3  ease-in-out">
                    Contact Us
                  </li>
                </Link>
                <Link to="/about">
                  <li className="my-4 hover:text-[#ff5e15] transition duration-700 hover:translate-x-3  ease-in-out">
                    FAQ's
                  </li>
                </Link>
                <Link to="/career">
                  <li className="my-4 hover:text-[#ff5e15] transition duration-700 hover:translate-x-3  ease-in-out">
                    Careers
                  </li>
                </Link>
              </ul>
            </div>
            <div className="space-y-4 ">
              <h1 className="text-lg font-semibold text-white">LINKS</h1>
              <ul className="space-y-4  text-[17px] cursor-pointer">
                <Link to="/shop">
                  <li className="my-4 hover:text-[#ff5e15] transition duration-700 hover:translate-x-3  ease-in-out">
                    Shop
                  </li>
                </Link>
                <Link to="/BlogPage">
                  <li className="my-4 hover:text-[#ff5e15] transition duration-700 hover:translate-x-3  ease-in-out">
                    News
                  </li>
                </Link>
                <Link to="/BlogPage">
                  <li className="my-4 hover:text-[#ff5e15] transition duration-700 hover:translate-x-3  ease-in-out">
                    Gallery
                  </li>
                </Link>
                <Link to="/BlogPage">
                  <li className="my-4 hover:text-[#ff5e15] transition duration-700 hover:translate-x-3  ease-in-out">
                    Case Studies
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          {/* third section  */}
          <div className="space-y-10 lg:px-10">
            <div>
              <p className="text-white">Call Us</p>
              <p className="text-[#ff5e15] text-2xl font-bold cursor-pointer">
                {links?.Phone}
              </p>
            </div>
            <div>
              <p className="text-white">Mail Us</p>
              <p className="text-[#1065cd] text-2xl font-bold cursor-pointer">
                {links?.Email}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center flex w-full bg-[#070b1b] py-6">
        <h1 className="text-center text-[#777777]">
          ©{" "}
          <span className="text-white hover:text-[#ff5e15] cursor-pointer transition duration-300 ease-in-out">
            VENOVET
          </span>{" "}
          {currentYear}. All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;

import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
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

      <div className="absolute  justify-between top-0 w-[100%] text-[#d5d5d5] lg:ml-20">
        <div className="px-10 pt-20 lg:flex space-y-14 lg:space-y-0 ">
          {/* //first section */}
          <div className="space-y-4">
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
          <div className="space-y-8 md:flex md:justify-between md:space-y-0 md:space-x-20 md:pl-20">
            <div className="space-y-4">
              <h1 className="text-lg font-semibold text-white">ABOUT US</h1>
              <ul className="text-[17px] cursor-pointer">
                <Link to="/about">
                  <li className="my-4">About Us</li>
                </Link>
                <Link
                  to="/whatwedo/Warehouse Management (2PL & 3PL)"
                  state={{
                    image: "https://venovet.com/assets/images/bgs8.jpg",
                    Tittle: "Venovet's Warehouse Management",
                    Para: "Give an efficiency boost to your inventory management",
                  }}
                >
                  <li className="my-4">What we do</li>
                </Link>
                <Link
                  to="/whoweserve/"
                  state={{
                    image: "https://venovet.com/assets/images/bgs8.jpg",
                    Tittle: "Fast Moving Consumer Goods (FMCG)",
                    Para: "Relaxes our clients to get the goods delivered at their demanded place",
                  }}
                >
                  <li className="my-4">Who we serve</li>
                </Link>
                <Link to="/BlogPage">
                  <li className="my-4">Our Blog</li>
                </Link>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-lg font-semibold text-white">SUPPORT</h1>
              <ul className="space-y-4 text-[17px] cursor-pointer">
                <Link to="/contact">
                  <li className="my-4">Request a Quote</li>
                </Link>
                <Link to="/contact">
                  <li className="my-4">Contact Us</li>
                </Link>
                <Link to="/about">
                  <li className="my-4">FAQ's</li>
                </Link>
                <Link to="/career">
                  <li className="my-4">Careers</li>
                </Link>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-lg font-semibold text-white">LINKS</h1>
              <ul className="space-y-4 text-[17px] cursor-pointer">
                <Link to="/shop">
                  <li className="my-4">Shop</li>
                </Link>
                <Link to="/BlogPage">
                  <li className="my-4">News</li>
                </Link>
                <Link to="/BlogPage">
                  <li className="my-4">Gallery</li>
                </Link>
                <Link to="/BlogPage">
                  <li className="my-4">Case Studies</li>
                </Link>
              </ul>
            </div>
          </div>
          {/* third section  */}
          <div className="space-y-10 lg:px-10">
            <div>
              <p className="text-white">Call Us</p>
              <p className="text-[#ff5e15] text-2xl font-bold cursor-pointer">
                +91 9912 742 555
              </p>
            </div>
            <div>
              <p className="text-white">Mail Us</p>
              <p className="text-[#1065cd] text-2xl font-bold cursor-pointer">
                sales@venovet.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

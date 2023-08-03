import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
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
        className="h-[60rem] md:h-[50rem] lg:h-[26rem]"
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
              onClick: {
                enable: true,
                mode: "push",
              },
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

      <div className="absolute top-0 bottom-0  w-[100%] text-[#d5d5d5]">
        <div className="lg:flex lg:justify-center px-24 pt-20 space-y-14 lg:space-y-0 ">
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

            {/* social icons  */}
            <div className="flex space-x-4 pt-4">
              <AiFillFacebook size={30} />
              <AiOutlineTwitter size={30} />
              <AiOutlineInstagram size={30} />
              <AiFillLinkedin size={30} />
            </div>
          </div>
          {/* second section  */}
          <div className="flex justify-between  items-center space-x-20">
            <div className="space-y-4">
              <h1 className="text-white text-lg font-semibold">ABOUT US</h1>
              <ul className="space-y-4 text-[17px] cursor-pointer">
                <li>About Us</li>
                <li>What we do</li>
                <li>Who we serve</li>
                <li>Our Blog</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-white text-lg font-semibold">SUPPORT</h1>
              <ul className="space-y-4 text-[17px] cursor-pointer">
                <li>Request a Quote</li>
                <li>Contac Us</li>
                <li>FAQ's</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-white text-lg font-semibold">LINKS</h1>
              <ul className="space-y-4 text-[17px] cursor-pointer">
                <li>Shop</li>
                <li>News</li>
                <li>Gallery</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>
          {/* third section  */}
          <div className="px-10  space-y-10">
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

import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Bridge = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);
  return (
    <div className="relative">
      <Particles
        id="particles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="h-[26rem]"
        options={{
          fullScreen: {
            enable: false,
          },
          background: {
            color: {
              value: "#ff5e15",
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

      <div className="absolute top-0 flex text-white space-y-8 flex-col items-center  w-[100%] h-[100%]">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl  max-w-3xl  md:leading-[4rem] text-center pt-8 ">
          Bridging gap between Business and Technology
        </h1>
        <p className="max-w-md leading-8 text-center md:text-xl md:max-w-2xl">
          For our clients from Transporting the Goods from Source to our
          Warehouse, Inwarding the Goods, Quality Check, Storage, Dispatch,
          Reporting and End Customer Delivery Transportation.
        </p>
        <Link to="/contact">
          <button className="bg-white text-[#ff5e15] relative overflow-hidden group  font-semibold text-sm py-3 px-6 rounded-xl flex items-center space-x-2 ease-in-out duration-200">
            <span className="absolute left-0 h-full w-0 transition-all bg-[#d2eaff] opacity-100 group-hover:w-full duration-300 ease-in-out"></span>
            <span className="relative flex items-center">
              <h1>CONTACT US</h1>
              <AiOutlineArrowRight size="23" color="#ff5e15" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Bridge;

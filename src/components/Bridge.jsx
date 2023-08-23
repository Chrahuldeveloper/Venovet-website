import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
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
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl  max-w-3xl  md:leading-[4rem] text-center pt-8 ">
          Bridging gap between Business and Technology
        </h1>
        <p className="max-w-md text-lg leading-8 text-center md:max-w-2xl">
          For our clients from Transporting the Goods from Source to our
          Warehouse, Inwarding the Goods, Quality Check, Storage, Dispatch,
          Reporting and End Customer Delivery Transportation.
        </p>
        <button className="bg-white text-[#ff5e15] font-semibold text-sm py-3 px-6 rounded-xl flex items-center space-x-2 hover:brightness-95 ease-in-out duration-200">
          <h1>CONTACT US</h1>
          <AiOutlineArrowRight size="23" color="#ff5e15" />
        </button>
      </div>
    </div>
  );
};

export default Bridge;

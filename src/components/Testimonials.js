import ParticleLink from "./ParticleLink";
import Data from "../Data/TestimonialData";
const Testimonials = () => {
  return (
    <section className="my-10">
      <h1 className="text-orange-500 font-bold text-lg lg:text-2xl text-center">
        WHAT CLIENTS SAY?
      </h1>

      <div className=" relative my-5">
        <ParticleLink />

        <div className="absolute top-0 w-[100%]   flex  flex-col  items-center">
          <div className="flex justify-start items-center overflow-x-scroll w-[40vw]">
            {Data.map((_, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center py-10 w-[100vw] space-x-4 px-8 text-center"
                >
                  <img className="w-24" src={_.image} alt="img.png" />
                  <div>
                    <h1 className="text-white text-2xl font-semibold">
                      {_.Name}
                    </h1>
                    <p className="text-[#d0d0d0] text-xs leading-8 py-4">
                      {_.p}
                    </p>
                    <div className="flex space-x-3">
                      <p>{_.star}</p>
                      <p className="text-[#ff4747]">{_.review}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

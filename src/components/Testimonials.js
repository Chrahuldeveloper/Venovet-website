import ParticleLink from "./ParticleLink";
import Data from "../Data/TestimonialData";
const Testimonials = () => {
  return (
    <div className="my-8 relative">
      <ParticleLink />

      <div className="absolute top-0 w-[100%] h-[100%] flex  flex-col  items-center">
        <h1 className="text-[#fff] py-14 text-3xl md:text-4xl lg:text-5xl font-semibold">
          WHAT CLIENTS SAY?
        </h1>

        <div className="flex space-x-20 pt-10">
          {Data.map((_, index) => {
            return (
              <div className="flex max-w-lg space-x-4 px-8">
                <div className="flex items-center p-3 rounded-md border-[#ccc] border-[1px]">
                  <img className="w-[28rem]" src={_.image} alt="img.png" />
                </div>
                <div>
                  <h1 className="text-white text-2xl font-semibold">
                    {_.Name}
                  </h1>
                  <p className="text-[#d0d0d0] leading-8 py-4">{_.p}</p>
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
  );
};

export default Testimonials;

import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../features/ProductSlice";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Detail({ Product }) {
  const dispatch = useDispatch();
  const scrollref = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const item = {
    name: Product.name,
    image1: Product.image1,
    image2: Product.image2,
    image3: Product.image3,
    image4: Product.image4,
    desc: Product.desc,
    Price: Product.Price,
    MRP: Product.MRP,
  };

  const images = [
    Product.image1,
    Product.image2,
    Product.image3,
    Product.image4,
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const scrollRight = () => {
    const nextImage = activeImage + 1;
    if (nextImage < images.length) {
      scrollref.current.scrollLeft = nextImage * scrollref.current.clientWidth;
      setActiveImage(nextImage);
    }
  };

  const scrollLeft = () => {
    const prevImage = activeImage - 1;
    if (prevImage >= 0) {
      scrollref.current.scrollLeft = prevImage * scrollref.current.clientWidth;
      setActiveImage(prevImage);
    }
  };

  const handleDotClick = (index) => {
    scrollref.current.scrollLeft = index * scrollref.current.clientWidth;
    setActiveTestimonial(index);
  };

  return (
    <main className="flex flex-col items-center gap-6 my-12 md:flex-row justify-evenly md:gap-0">
      {/* <div className="border-[1px] border-gray-300 max-w-[20rem] p-1 overflow-x-scroll">
        <div className="flex gap-5 p-2" ref={scrollref}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`product-${index}`}
              className="rounded-md"
            />
          ))}
        </div>
      </div> */}
      <div>
        <div
          className="flex  justify-start p-3 overflow-x-scroll max-w-xs  gap-14 md:gap-20 scroll-smooth md:max-w-sm pl-20 md:flex-row "
          ref={scrollref}
        >
          {images.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0  items-center max-w-sm space-x-8 md:max-w-auto">
                  <img
                    className="w-36 h-36 max-w-md md:w-64 md:h-64 rounded-md border-[#ccc] border-[1px] p-2"
                    src={_}
                    alt="img.png"
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="hidden md:flex items-center justify-center gap-0.5 space-x-2 pt-10">
          {Array.from({ length: images.length }).map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-2xl  ${
                index === activeTestimonial ? " bg-[#ff5e15]" : "bg-black"
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="border-[1px] border-gray-200 max-w-md text-gray-500 p-3.5 text-sm space-y-2">
          <p className="text-lg font-semibold text-slate-500">
            MRP Price : {item?.Price}
          </p>
          <p className="text-lg font-semibold text-slate-500">
            Deal Price : {item?.MRP}
          </p>
          <div className="py-2 space-y-2">
            <h1 className="text-xl text-black font-bold">
              Product Description:
            </h1>
            <p className="text-black font-poppins">
              {item?.desc ? item?.desc : "No description"}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-7">
          <button
            className="bg-[#ff5e15] rounded-md relative overflow-hidden group text-[#fff] p-4 py-2 flex  cursor-pointer items-center space-x-1.5 transition ease-in-out duration-500 "
            onClick={() => {
              dispatch(addTocart(item));
              Swal.fire({
                title: "Sucess",
                text: " Added to Cart sucessfully",
                icon: "success",
                confirmButtonText: "OK",
              });
            }}
          >
            <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-in-out bg-orange-700 opacity-100 group-hover:w-full"></span>
            <span className="relative flex items-center">
              <h1>Add to Cart</h1>
            </span>
          </button>
          <Link to="/shop">
            <button className="bg-[#ff5e15] rounded-md relative overflow-hidden group text-[#fff] p-4 py-2 flex  cursor-pointer items-center space-x-1.5   transition ease-in-out duration-500">
              <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-in-out bg-orange-700 opacity-100 group-hover:w-full"></span>
              <span className="relative flex items-center">
                <h1>Go back</h1>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

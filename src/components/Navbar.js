import React, { useEffect, useState } from "react";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineWechat,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Navbar({ Page }) {
  const [service, setservice] = useState(false);
  const [ScrollY, setScrollY] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollY(true);
    } else if (window.scrollY === 0) {
      setScrollY(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      {/* Show Navbar only on Scroll */}
      <div
        className={` ${
          ScrollY
            ? "md:fixed top-0 left-0 right-0 z-50 bg-white shadow-md ease-in-out duration-500"
            : "hidden"
        } w-screen `}
      >
        <div className=" px-6 py-3.5 flex justify-between items-center shadow-md  ">
          <div>
            <img
              src="https://venovet.com/assets/images/logo.png"
              alt="https://venovet.com/assets/images/logo.png"
              className=""
            />
          </div>
          <div>
            <ul className="flex items-center space-x-8 text-black">
              <li className="cursor-pointer">HOME</li>
              <Link to={"/about"}>
                <li className={`cursor-pointer `}>ABOUT US</li>
              </Link>
              <div>
                <li
                  onClick={() => {
                    setservice(!service);
                  }}
                  className="cursor-pointer"
                >
                  SERVICES
                </li>
                <div
                  className={`${service ? "block" : "hidden"} mt-2 absolute`}
                >
                  <ul className="text-sm text-[#676767]">
                    <li className="bg-white border py-1 px-3 w-[14vw]">
                      What we do
                    </li>
                    <li className="bg-white border py-1 px-3">Who we serve</li>
                  </ul>
                </div>
              </div>

              <li className="cursor-pointer">BLOG</li>
              <li className="cursor-pointer">SHOP</li>
              <li className="cursor-pointer">CAREERS</li>
              <li className="cursor-pointer">CONTACT US</li>
            </ul>
          </div>
        </div>
      </div>

      {/*Social icons for Mobile */}
      <div className="md:hidden bg-[#252a2c] w-screen p-2.5 flex items-center space-x-3">
        <AiOutlineTwitter size={25} color="white" />
        <AiFillLinkedin size={25} color="white" />
        <AiFillFacebook size={25} color="white" />
      </div>

      {/* Show case bar for Big screens */}
      <div className="hidden md:block text-white bg-[#121a37] w-screen p-3.5">
        <div className="flex justify-around items-center mx-10">
          <div className="flex items-center space-x-1.5">
            <AiOutlineMail size={25} color="#ff5e15" />
            <h1 className="font-semibold">Email:sales@venovet.com</h1>
          </div>
          <div className="flex items-center space-x-2.5">
            <AiOutlineTwitter size={28} color="white" cursor={"pointer"} />
            <AiFillLinkedin size={28} color="white" cursor={"pointer"} />
            <AiFillFacebook size={28} color="white" cursor={"pointer"} />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="my-3.5 flex items-center justify-between mx-5 md:mx-28">
        <div>
          <img src="https://venovet.com/assets/images/logo.png" alt="pic" />
        </div>
        <div>
          <AiOutlineMenu
            size={35}
            color="white"
            className="md:hidden cursor-pointer bg-[#121a37] p-1.5 hover:bg-orange-600 ease-in-out duration-300"
          />
          <div className="hidden md:block">
            <div className="flex items-center">
              <img
                src="https://venovet.com/assets/images/whatsapp-icon.png"
                alt="whatsup"
                className="w-10 h-10"
              />
              <h1 className="text-lg font-semibold">+91 9912 742 555</h1>
              <div className="ml-10 flex items-center space-x-2">
                <AiOutlineShoppingCart
                  size={39}
                  color="white"
                  className="bg-orange-500 p-2 rounded-full"
                />
                <div className="font-semibold">
                  <h1>MyCart</h1>
                  <p className="text-slate-400 ">item : 0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Bar with drop down only for Big screens */}
      <div className="lg:flex justify-center mt-1 translate-y-6 hidden">
        <div className="flex items-center bg-[#121a37] p-4">
          <ul className="flex items-center space-x-14 text-white">
            <li className="cursor-pointer">HOME</li>
            <Link to={"/about"}>
              <li
                className={`cursor-pointer ${
                  Page === "About" ? "text-orange-500" : null
                } `}
              >
                ABOUT US
              </li>
            </Link>
            <div>
              <li
                onClick={() => {
                  setservice(!service);
                }}
                className="cursor-pointer"
              >
                SERVICES
              </li>
              <div className={`${service ? "block" : "hidden"} mt-2 absolute`}>
                <ul className="text-sm text-[#676767]">
                  <li className="bg-white border py-1 px-3 w-[14vw]">
                    What we do
                  </li>
                  <li className="bg-white border py-1 px-3">Who we serve</li>
                </ul>
              </div>
            </div>

            <li className="cursor-pointer">BLOG</li>
            <Link to={"/shop"}>
            <li  className={`cursor-pointer ${
                  Page === "Shop" ? "text-orange-500" : null
                } `}>SHOP</li>
            </Link>
            <Link to={"/career"}>
              <li
                className={`cursor-pointer ${
                  Page === "career" ? "text-orange-500" : null
                } `}
              >
                CAREERS
              </li>
            </Link>
            <li className="cursor-pointer">CONTACT US</li>
          </ul>
        </div>
        <button className="bg-orange-500 text-white p-3.5 flex items-center space-x-1.5 font-semibold">
          <AiOutlineWechat size={30} color="white" />
          <h1>Request a Call Back</h1>
          <AiOutlineArrowRight size={30} color="white" />
        </button>
      </div>
    </nav>
  );
}

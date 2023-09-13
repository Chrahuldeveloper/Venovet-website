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
import { DropDown, MobileNavbar } from "./index";
import { useSelector } from "react-redux";
export default function Navbar({ Page }) {
  const [service, setservice] = useState(false);
  const [what, setWhat] = useState(false);
  const [who, setWho] = useState(false);
  const [ScrollY, setScrollY] = useState(false);
  const [toogle, settoogle] = useState(false);
  const [mobilewhat, setmobilewhat] = useState(false);
  const [mobilewho, setmobilewho] = useState(false);
  const [mobileservice, setmobileservice] = useState(false);

  const cart = useSelector((state) => state.cart);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrollY(true);
    } else if (window.scrollY === 0) {
      setScrollY(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav>
        {/* Show Navbar only on Scroll */}
        <div
          className={` ${
            ScrollY
              ? "md:fixed top-0 left-0 right-0 z-50  bg-white shadow-md ease-in-out duration-500"
              : "hidden"
          } w-screen `}
        >
          <div className=" px-10 py-3.5 flex justify-between items-center shadow-md  ">
            <div>
              <Link
                to={"/"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src="https://venovet.com/assets/images/logo.png"
                  alt="https://venovet.com/assets/images/logo.png"
                  className=""
                />
              </Link>
            </div>
            <div>
              <ul className="flex items-center text-black space-x-14">
                <Link to={"/"}>
                  <li className="cursor-pointer">HOME</li>
                </Link>
                <Link to={"/about"}>
                  <li className={`cursor-pointer `}>ABOUT US</li>
                </Link>
                <div>
                  <li
                    onMouseEnter={() => {
                      setmobileservice(!mobileservice);
                    }}
                    className="cursor-pointer"
                  >
                    SERVICES
                  </li>
                  <div
                    onMouseEnter={() => setmobileservice(true)}
                    onMouseLeave={() => setmobileservice(false)}
                    className={`${
                      mobileservice ? "flex" : "hidden"
                    } mt-2 absolute cursor-pointer `}
                  >
                    <ul className="text-sm text-[#676767] w-[16vw] font-semibold">
                      <li
                        onMouseEnter={() => {
                          setmobilewhat(true);
                          setmobilewho(false);
                        }}
                        className="bg-white border py-1.5 px-3 hover:text-[#ff5e15] transition ease-in-out duration-300"
                      >
                        What we do
                      </li>
                      <li
                        onMouseEnter={() => {
                          setmobilewho(true);
                          setmobilewhat(false);
                        }}
                        onMouseLeave={() => {
                          setmobilewho(false);
                        }}
                      >
                        <li className="bg-white border py-1.5 px-3 hover:text-[#ff5e15] transition ease-in-out duration-300">
                          Who we serve
                        </li>
                      </li>
                    </ul>
                    <div
                      onMouseEnter={() => {
                        setWhat(true);
                      }}
                      onMouseLeave={() => {
                        setWhat(false);
                      }}
                      className={`${
                        mobilewhat ? "flex" : "hidden"
                      } bg-white py-2 text-sm text-[#676767] w-[18vw]`}
                    >
                      <DropDown ismobile={false} type={"Whatwedo"} />
                    </div>
                    <div
                      onMouseEnter={() => {
                        setWho(true);
                      }}
                      onMouseLeave={() => {
                        setWho(false);
                      }}
                      className={`${
                        mobilewho ? "flex" : "hidden"
                      } bg-white py-2 text-sm text-[#676767] w-[18vw]`}
                    >
                      <DropDown ismobile={false} type={"WhoweServe"} />
                    </div>
                  </div>
                </div>
                <Link to="/BlogPage">
                  <li className="cursor-pointer">BLOG</li>
                </Link>
                <Link to={"/shop"}>
                  <li
                    className={`cursor-pointer ${
                      Page === "Shop" ? "text-orange-500" : null
                    } `}
                  >
                    SHOP
                  </li>
                </Link>
                <Link to={"/career"}>
                  <li className="cursor-pointer">CAREERS</li>
                </Link>
                <Link to={"/contact"}>
                  <li className="cursor-pointer">CONTACT US</li>
                </Link>
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
        <div className="hidden md:block text-white bg-[#121a37] w-screen  p-3.5">
          <div className="flex items-center justify-around mx-10">
            <div className="flex items-center space-x-1.5">
              <AiOutlineMail size={25} color="#ff5e15" />
              <h1>Email:sales@venovet.com</h1>
            </div>
            <div className="flex items-center space-x-2.5">
              <img
                src="https://venovet.com/assets/images/linkedin-2.png"
                className="w-28"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Main Navbar */}
        <div className="my-3.5 flex items-center justify-between mx-5 md:mx-28">
          <div>
            <Link
              to={"/"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img src="https://venovet.com/assets/images/logo.png" alt="pic" />
            </Link>
          </div>
          <div>
            <AiOutlineMenu
              size={35}
              onClick={() => {
                settoogle(true);
              }}
              color="white"
              className="md:hidden cursor-pointer bg-[#121a37] p-1.5 hover:bg-orange-600 ease-in-out duration-300"
            />
            <div className="hidden md:block">
              <p className="text-[#8d8d8d] ml-5 font-semibold text-sm">
                24/7 Services
              </p>
              <div className="flex items-center">
                <img
                  src="https://venovet.com/assets/images/whatsapp-icon.png"
                  alt="whatsup"
                  className="w-10 h-10"
                />
                <h1 className="text-lg font-semibold">+91 9912 742 555</h1>
                <Link to="/mycart">
                  <div className="flex items-center ml-10 space-x-2">
                    <AiOutlineShoppingCart
                      size={39}
                      color="white"
                      className="p-2 bg-orange-500 rounded-full"
                    />
                    <div className="font-semibold">
                      <h1>MyCart</h1>
                      <p className="text-slate-400 ">
                        item : {cart.cartItems.length}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Bar with drop down only for Big screens */}
        <div className="justify-center hidden mt-1 translate-y-6 lg:flex ">
          <div className="flex items-center bg-[#121a37] p-4 rounded-l-md">
            <ul className="flex items-center text-white space-x-14">
              <Link to={"/"}>
                <li className="cursor-pointer">HOME</li>
              </Link>
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
                  onMouseEnter={() => {
                    setservice(!service);
                  }}
                  className="cursor-pointer"
                >
                  SERVICES
                </li>
                <div
                  onMouseEnter={() => setservice(true)}
                  onMouseLeave={() => setservice(false)}
                  className={`${service ? "flex" : "hidden"} mt-2 absolute`}
                >
                  <ul className="text-sm text-[#676767] w-[15vw] cursor-pointer">
                    <li
                      onMouseEnter={() => {
                        setWhat(true);
                      }}
                      onMouseLeave={() => {
                        setWhat(false);
                      }}
                      className={`cursor-pointer ${
                        Page === "whatwedo" ? "text-orange-500" : null
                      }  bg-white border py-1 px-3 hover:text-[#ff5e15] transition ease-in-out duration-300`}
                    >
                      What we do
                    </li>
                    <div>
                      <li
                        onMouseEnter={() => {
                          setWho(true);
                        }}
                        onMouseLeave={() => {
                          setWhat(false);
                        }}
                        className={`cursor-pointer ${
                          Page === "whoweserve" ? "text-orange-500" : null
                        }  bg-white border py-1 px-3 hover:text-[#ff5e15] transition ease-in-out duration-300`}
                      >
                        Who we serve
                      </li>
                    </div>
                  </ul>
                  <div
                    onMouseEnter={() => {
                      setWhat(true);
                    }}
                    onMouseLeave={() => {
                      setWhat(false);
                    }}
                    className={`${
                      what ? "flex" : "hidden"
                    } bg-white py-2 text-sm text-[#676767] w-[18vw]`}
                  >
                    <DropDown ismobile={false} type={"Whatwedo"} />
                  </div>
                  <div
                    onMouseEnter={() => {
                      setWho(true);
                    }}
                    onMouseLeave={() => {
                      setWho(false);
                    }}
                    className={`${
                      who ? "flex" : "hidden"
                    } bg-white py-2 text-sm text-[#676767] w-[18vw]`}
                  >
                    <DropDown ismobile={false} type={"WhoweServe"} />
                  </div>
                </div>
              </div>
              {/* services */}
              <Link to="/BlogPage">
                <li className="cursor-pointer">BLOG</li>
              </Link>
              <Link to={"/shop"}>
                <li
                  className={`cursor-pointer ${
                    Page === "Shop" ? "text-orange-500" : null
                  } `}
                >
                  SHOP
                </li>
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
              <Link to={"/contact"}>
                <li className="cursor-pointer">CONTACT US</li>
              </Link>
            </ul>
          </div>
          <Link to="/contact">
            <button className="bg-orange-500 text-white p-3.5 flex cursor-pointer items-center space-x-1.5 font-semibold rounded-r-md hover:brightness-90 ease-in-out duration-300">
              <AiOutlineWechat size={30} color="white" />
              <h1>Request a Call Back</h1>
              <AiOutlineArrowRight size={30} color="white" />
            </button>
          </Link>
        </div>
      </nav>
      {/* Mobile Navbar */}
      {toogle ? <MobileNavbar settoogle={settoogle} /> : null}
    </>
  );
}

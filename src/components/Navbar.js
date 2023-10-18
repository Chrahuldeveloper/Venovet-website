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
import vvmain from "../images/vvlogo.png";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
export default function Navbar({ Page }) {
  const [service, setservice] = useState(false);
  const [what, setWhat] = useState(false);
  const [who, setWho] = useState(false);
  const [ScrollY, setScrollY] = useState(false);
  const [toogle, settoogle] = useState(false);
  const [mobilewhat, setmobilewhat] = useState(false);
  const [mobilewho, setmobilewho] = useState(false);
  const [mobileservice, setmobileservice] = useState(false);
  const [nonmobilewhat, setnonmobilewhat] = useState(false);
  const [nonmobilewho, setnonmobilewho] = useState(false);

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

  const cart = useSelector((state) => state.cart);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrollY(true);
    } else if (window.scrollY === 0) {
      setScrollY(false);
    }
  };
  console.log(what, who);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="z-50">
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
              <ul className="flex items-center text-[0.95rem] text-[#121a37] font-[500] space-x-14">
                <Link to={"/"}>
                  <li className="cursor-pointer hover:text-[#ff5e15] transition duration-300 ease-in-out">
                    HOME
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li
                    className={`cursor-pointer hover:text-[#ff5e15] transition duration-300 ease-in-out `}
                  >
                    ABOUT US
                  </li>
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
                  <li className="cursor-pointer hover:text-[#ff5e15]  transition duration-300 ease-in-out">
                    BLOG
                  </li>
                </Link>
                <Link to={"/shop"}>
                  <li
                    className={`hover:text-[#ff5e15] transition duration-300 ease-in-out cursor-pointer ${
                      Page === "Shop" ? "text-[#ff5e15]" : null
                    } `}
                  >
                    SHOP
                  </li>
                </Link>
                <Link to={"/career"}>
                  <li className="cursor-pointer hover:text-[#ff5e15]  transition duration-300 ease-in-out">
                    CAREERS
                  </li>
                </Link>
                <Link to={"/contact"}>
                  <li className="cursor-pointer hover:text-[#ff5e15]  transition duration-300 ease-in-out">
                    CONTACT US
                  </li>
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
        <div className="hidden md:block text-white bg-[#121a37] w-screen z-50 p-3.5">
          <div className="flex items-center justify-between mx-10 gap-x-28">
            <div className="flex items-center space-x-1.5">
              <AiOutlineMail size={25} color="#ff5e15" />
              <h1 className="text-[#d5d5d5]  cursor-pointer">
                Email:{" "}
                <span className="hover:text-[#ff5e15] transition duration-300 ease-in-out">
                  {links?.Email}
                </span>
              </h1>
            </div>
            <div className="flex items-center space-x-2.5 cursor-pointer">
              <Link to={"https://www.linkedin.com/"}>
                <img
                  src="https://venovet.com/assets/images/linkedin-2.png"
                  className="w-28"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Main Navbar */}
        <div className="my- flex items-center justify-between mx-5 md:mx-28 ">
          <div>
            <Link
              to={"/"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img src={vvmain} alt="pic" />
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
              <p className="text-[#8d8d8d] pl-11 mb-[-0.75rem] font-semibold text-sm">
                24/7 Services
              </p>
              <div className="flex items-center">
                {/* <Link to={`https://wa.me/${links?.Whatsapp}`}> */}
                <a
                  href={`whatsapp://send?phone=${links?.Whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center">
                    <img
                      src="https://venovet.com/assets/images/whatsapp-icon.png"
                      alt="whatsup"
                      className="w-10 h-10"
                    />
                    <h1 className="text-lg font-semibold">{links?.Whatsapp}</h1>
                  </div>
                  {/* </Link> */}
                </a>
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
        <div className="z-50 justify-center hidden mt-1 translate-y-6 lg:flex">
          <div className="flex items-center bg-[#121a37] p-4 rounded-l-md pr-40">
            <ul className="flex items-center space-x-12 text-white">
              <Link to={"/"}>
                <li className="cursor-pointer  hover:text-[#ff5e15] transition duration-300 ease-in-out">
                  HOME
                </li>
              </Link>
              <Link to={"/about"}>
                <li
                  className={`cursor-pointer  hover:text-[#ff5e15] transition duration-300 ease-in-out ${
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
                  className="cursor-pointer  hover:text-[#ff5e15] transition duration-300 ease-in-out"
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
                        setnonmobilewhat(true);
                        setnonmobilewho(false);
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
                          setnonmobilewho(true);
                          setnonmobilewhat(false);
                        }}
                        onMouseLeave={() => {
                          setnonmobilewhat(false);
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
                      setnonmobilewhat(true);
                      setnonmobilewho(false);
                    }}
                    onMouseLeave={() => {
                      setnonmobilewhat(false);
                    }}
                    className={`${
                      nonmobilewhat ? "flex" : "hidden"
                    } bg-white py-2 text-sm text-[#676767] w-[18vw]`}
                  >
                    <DropDown ismobile={false} type={"Whatwedo"} />
                  </div>
                  <div
                    onMouseEnter={() => {
                      setnonmobilewho(true);
                    }}
                    onMouseLeave={() => {
                      setnonmobilewho(false);
                    }}
                    className={`${
                      nonmobilewho ? "flex" : "hidden"
                    } bg-white py-2 text-sm text-[#676767] w-[18vw]`}
                  >
                    <DropDown ismobile={false} type={"WhoweServe"} />
                  </div>
                </div>
              </div>
              {/* services */}
              <Link to="/BlogPage">
                <li className="cursor-pointer  hover:text-[#ff5e15] transition duration-300 ease-in-out">
                  BLOG
                </li>
              </Link>
              <Link to={"/shop"}>
                <li
                  className={`cursor-pointer  hover:text-[#ff5e15] transition duration-300 ease-in-out ${
                    Page === "Shop" ? "text-orange-500 " : null
                  } `}
                >
                  SHOP
                </li>
              </Link>
              <Link to={"/career"}>
                <li
                  className={`cursor-pointer  hover:text-[#ff5e15] transition duration-300 ease-in-out ${
                    Page === "career" ? "text-orange-500" : null
                  } `}
                >
                  CAREERS
                </li>
              </Link>
              <Link to={"/contact"}>
                <li className="cursor-pointer  hover:text-[#ff5e15] transition duration-300 ease-in-out">
                  CONTACT US
                </li>
              </Link>
            </ul>
          </div>
          <Link to="/contact">
            <button className="bg-[#ff5e15] relative overflow-hidden group text-[#fff] p-4 flex  cursor-pointer items-center space-x-1.5  rounded-r-md transition ease-in-out duration-500">
              <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-in-out bg-orange-700 opacity-100 group-hover:w-full"></span>
              <span className="relative flex items-center">
                <AiOutlineWechat size={20} color="white" />
                <h1>Request a Call Back</h1>
                <AiOutlineArrowRight size={20} color="white" />
              </span>
            </button>
          </Link>
        </div>
      </nav>
      {/* Mobile Navbar */}
      {toogle ? <MobileNavbar settoogle={settoogle} /> : null}
    </>
  );
}

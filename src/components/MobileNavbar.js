import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { DropDown } from "./index";
import { Link } from "react-router-dom";
export default function MobileNavbar({ settoogle }) {
  const [dropdown, setdropdown] = useState(false);
  const [Whatwedo, setWhatwedo] = useState(false);
  const [WhoweServe, setWhoweServe] = useState(false);

  return (
    <>
      <aside className="fixed top-0 bottom-0 right-0 z-50 md:hidden">
        <nav className="bg-[#0c0c0c] text-white font-semibold h-screen w-[60vw] overflow-y-scroll ">
          <div className="flex justify-end px-10 pt-5 pb-5">
            <RxCross2
              size="30"
              color="white"
              onClick={() => {
                settoogle(false);
              }}
              cursor={"pointer"}
            />
          </div>
          <ul className="px-10 pt-20 ">
            <Link to="/">
              <li className="my-6 duration-300 ease-in-out cursor-pointer hover:text-orange-500">
                HOME
              </li>
            </Link>
            <Link to="/about">
              <li className="my-6 duration-300 ease-in-out cursor-pointer hover:text-orange-500">
                ABOUT US
              </li>
            </Link>
            <li
              onClick={() => {
                setdropdown(!dropdown);
              }}
              className="my-6 duration-300 ease-in-out cursor-pointer hover:text-orange-500"
            >
              SERVICES
            </li>
            {dropdown ? (
              <div className="space-y-2 ">
                <li
                  onClick={() => {
                    setWhatwedo(!Whatwedo);
                  }}
                  className="my-6 duration-300 ease-in-out cursor-pointer hover:text-orange-500"
                >
                  What we do
                </li>
                <ul className={`${Whatwedo ? "block" : "hidden"}`}>
                  <DropDown ismobile={true} type={"Whatwedo"} />
                </ul>
                <li
                  onClick={() => {
                    setWhoweServe(!WhoweServe);
                  }}
                  className="my-6 duration-300 ease-in-out cursor-pointer hover:text-orange-500"
                >
                  Who we Serve
                </li>
                <ul className={`${WhoweServe ? "block" : "hidden"}`}>
                  <DropDown ismobile={true} type={"WhoweServe"} />
                </ul>
              </div>
            ) : null}
            <Link to="/BlogPage">
              <li className="my-6 duration-300 ease-in-out cursor-pointer hover:text-orange-500">
                BLOG
              </li>
            </Link>
            <Link to="/shop">
              <li className="my-6 duration-300 ease-in-out cursor-pointer hover:text-orange-500">
                SHOP
              </li>
            </Link>
            <Link to="/career">
              <li className="my-6 duration-300 ease-in-out cursor-pointer hover:text-orange-500">
                CAREERS
              </li>
            </Link>
            <Link to="/contact">
              <li className="my-6 duration-300 ease-in-out cursor-pointer hover:text-orange-500">
                CONTACT US
              </li>
            </Link>
          </ul>
        </nav>
      </aside>
    </>
  );
}

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
export default function MobileNavbar({ settoogle }) {
  const [dropdown, setdropdown] = useState(false);

  return (
    <>
      <aside className="fixed top-0 right-0 bottom-0 md:hidden z-50">
        <nav className="bg-[#0c0c0c] text-white font-semibold h-screen w-[60vw]">
          <div className="flex justify-end pt-5 px-5">
            <RxCross2
              size="30"
              color="white"
              onClick={() => {
                settoogle(false);
              }}
              cursor={"pointer"}
            />
          </div>
          <ul className="space-y-6 px-10 pt-20">
            <li className="cursor-pointer hover:text-orange-500 duration-300 ease-in-out">
              HOME
            </li>
            <li className="cursor-pointer hover:text-orange-500 duration-300 ease-in-out">
              ABOUT US
            </li>
            <li
              onClick={() => {
                setdropdown(!dropdown);
              }}
              className="cursor-pointer hover:text-orange-500 duration-300 ease-in-out"
            >
              SERVICES
            </li>
            {dropdown ? (
              <div className=" space-y-2">
                <li className="cursor-pointer hover:text-orange-500 duration-300 ease-in-out">
                  What we do
                </li>
                <li className="cursor-pointer hover:text-orange-500 duration-300 ease-in-out">
                  Who we Serve
                </li>
              </div>
            ) : null}
            <li className="cursor-pointer hover:text-orange-500 duration-300 ease-in-out">
              BLOG
            </li>
            <li className="cursor-pointer hover:text-orange-500 duration-300 ease-in-out">
              SHOP
            </li>
            <li className="cursor-pointer hover:text-orange-500 duration-300 ease-in-out">
              CAREERS
            </li>
            <li className="cursor-pointer hover:text-orange-500 duration-300 ease-in-out">
              CONTACT US
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

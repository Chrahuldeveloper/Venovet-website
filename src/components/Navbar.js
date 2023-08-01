import React from "react";
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
export default function Navbar() {
  return (
    <nav>
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
      <div className="my-3.5 flex items-center justify-between mx-5 md:mx-20">
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
      <div className="md:flex justify-center mt-1 translate-y-6 hidden">
        <div className="flex items-center bg-[#121a37] p-4">
          <ul className="flex items-center space-x-12 text-white">
            <li className="cursor-pointer">HOME</li>
            <li className="cursor-pointer">ABOUT US</li>
            <li className="cursor-pointer">SERVICES</li>
            <li className="cursor-pointer">BLOG</li>
            <li className="cursor-pointer">SHOP</li>
            <li className="cursor-pointer">CAREERS</li>
            <li className="cursor-pointer">CONTACT US</li>
          </ul>
        </div>
        <button className="bg-orange-500 text-white p-3.5 flex items-center space-x-1.5 font-semibold">
          <AiOutlineWechat size={30} color="white"  />
          <h1>Request a Call Back</h1>
          <AiOutlineArrowRight size={30} color="white" />
        </button>
      </div>
    </nav>
  );
}

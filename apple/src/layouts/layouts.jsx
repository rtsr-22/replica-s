import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const logo = "./icons8-apple.svg";
  const icon = './search.png';
  const icon1 = './shop.png';
  const menuItems = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Vision",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  return (
    <nav className="bg-[#171719] w-full h-[45px] flex justify-center items-center px-6 shadow-md fixed top-0 left-0 right-0 z-50">
      <ul className="flex items-center gap-9 text-slate-300 text-[11.5px] tracking-wide">
        {/* Logo */}
        <li>
          <img src={logo} alt="Apple Logo" className="w-4 h-5 cursor-pointer" />
        </li>

        {/* Navigation Items */}
        {menuItems.map((item, index) => (
          <li key={index} className="cursor-pointer hover:opacity-85 transition hover:text-white">
            {item}
          </li>
        ))}

        {/* Icons */}
        <img
          src={icon}
          alt="search icon"
          className="w-4.5 h-4.5 opacity-50 cursor-pointer hover:opacity-75 transition"
        />
        <img
          src={icon1}
          alt="store icon"
          className="w-4 h-4 cursor-pointer hover:opacity-75 transition"
        />
      </ul>
    </nav>
  );
};

const Layouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-[45px]"> {/* Added padding-top to avoid overlap */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layouts;

import React, { useState } from "react";

import logoImage from "../assets/logo.png";
import userImage from "../assets/userImg.png";
import searchSymbol from "../assets/searchSymbol.png";
import notificationIcon from "../assets/bellpng.png";
import microphone from "../assets/microphone1.png";

const Header = () => {

  return (
    <header className="sticky top-0 z-10 w-full bg-white px-4 dark:bg-black md:px-5">
      <div className="flex h-14 w-full items-center justify-between ">
        <div className="flex items-center gap-1">
          <div className="group flex items-center">
            <div className="hidden md:mr-4 md:block">
              <div className="flex h-9 w-9 cursor-pointer flex-col items-center justify-center rounded-full transition duration-150 ease-in-out hover:bg-white/[0.2] ">
                <div className="mb-1 h-[2px] w-5 bg-white"></div>
                <div className="mb-1 h-[2px] w-5 bg-white"></div>
                <div className="h-[2px] w-5 bg-white "></div>
              </div>
            </div>
            <img
              className="h-8 w-8 cursor-pointer md:h-10 md:w-10"
              src={logoImage}
              alt="logo-image"
            />
          </div>
          <div className="font-pathway text-2xl font-extrabold tracking-wide text-white md:text-[28px] cursor-pointer">
            LightTube
          </div>
        </div>

        <div className=" hidden md:block">
          <div className="group flex items-center ">
            <div className="flex h-8 items-center rounded-l-3xl border border-[#303030] group-focus-within:border-blue-500 md:ml-5 md:h-10 md:pl-5 md:group-focus-within:ml-5 ">
              <div className="hidden w-10 items-center justify-center group-focus-within:md:flex">
                <img
                  className="md:h-5 md:w-5"
                  src={searchSymbol}
                  alt="search-image"
                />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-44 bg-transparent pl-5 pr-5 text-white outline-none md:w-64 md:pl-0 md:group-focus-within:pl-0 lg:w-[500px]"
              />
            </div>
            <button className="flex h-8 w-[40px] items-center justify-center rounded-r-3xl border border-l-0 border-[#303030] bg-white/[0.1] md:h-10 md:w-[60px]">
              <img
                src={searchSymbol}
                alt="search-image"
                className="md:h-5 md:w-5"
              />
            </button>
            <div className="transition-bg flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/[0.1] duration-150 ease-in-out hover:bg-white/[0.3] md:ml-4 lg:ml-5">
              <img
                className="h-5 w-5 bg-transparent md:h-6 md:w-6"
                src={microphone}
                alt="microphone"
              />
            </div>
          </div>
        </div>

        <ul className="flex items-center gap-4 md:gap-5">
          <li className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.1] duration-150 ease-in-out hover:bg-white/[0.3]">
            <img
              className="h-5 w-5 cursor-pointer border-white text-white outline-white md:h-6 md:w-6 "
              src={notificationIcon}
              alt="notification-icon"
            />
          </li>
          <li>
            <img
              className="h-6 w-6 cursor-pointer text-white md:hidden "
              src={searchSymbol}
              alt="search-icon"
            />
          </li>
          <li>
            <img
              className="h-8 w-8 cursor-pointer md:h-11 md:w-11"
              src={userImage}
              alt="user-image"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

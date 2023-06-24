import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

import logoImage from "../assets/logo.png";
import userImage from "../assets/userImg.png";
import searchSymbol from "../assets/searchSymbol.png";
import notificationIcon from "../assets/bellpng.png";
import microphone from "../assets/microphone1.png";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + "&q=" + searchQuery);
    const data = await response.json();
    const suggestions = data?.items?.map((item) => item.snippet) || [];
    setSuggestions(suggestions);
  };

  return (
    <header className="sticky top-0 z-10 w-full bg-white px-4 dark:bg-black md:h-[60px] md:px-5">
      <div className="flex h-14 w-full items-center justify-between ">
        <div className="flex items-center gap-1">
          <div className="group flex items-center">
            <div
              className="hidden md:mr-4 md:block"
              onClick={() => toggleMenuHandler()}
            >
              <div className="flex h-9 w-9 cursor-pointer flex-col items-center justify-center rounded-full transition duration-150 ease-in-out hover:bg-white/[0.2] md:h-7 md:w-7 ">
                <div className="mb-1 h-[2px] w-5 bg-white"></div>
                <div className="mb-1 h-[2px] w-5 bg-white"></div>
                <div className="h-[2px] w-5 bg-white "></div>
              </div>
            </div>
            <Link to="/">
              <img
                className="h-8 w-8 cursor-pointer md:h-8 md:w-7 lg:h-10 lg:w-10"
                src={logoImage}
                alt="logo-image"
              />
            </Link>
          </div>
          <Link to="/">
            <div className="cursor-pointer font-pathway text-2xl font-extrabold tracking-wide text-white md:text-xl lg:text-[28px]">
              LightTube
            </div>
          </Link>
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
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onBlur={() => setShowSuggestions(false)}
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
        <ul className="flex items-center gap-4 md:gap-1 lg:gap-5">
          <li className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.1] duration-150 ease-in-out hover:bg-white/[0.3] md:h-6 md:w-8">
            <img
              className="lg-h-7 h-5 w-5 cursor-pointer border-white text-white outline-white md:h-5 md:w-5 lg:w-7 "
              src={notificationIcon}
              alt="notification-icon"
            />
          </li>
          <li>
            <img
              className="h-6 w-6 cursor-pointer text-white md:hidden md:h-8 md:w-8 "
              src={searchSymbol}
              alt="search-icon"
            />
          </li>
          <li>
            <img
              className="h-8 w-8 cursor-pointer lg:h-11 lg:w-11"
              src={userImage}
              alt="user-image"
            />
          </li>
        </ul>
      </div>
      {showSuggestions && (
        <div className="absolute rounded-2xl bg-[#202020] p-4 text-white md:w-[340px] md:left-[230px] lg:left-[480px] lg:top-[52px] lg:w-[540px]">
          <ul>
            {suggestions?.map((suggestion, index) => (
              <li key={index} className="mb-2 flex items-center gap-3">
                <img
                  className="md:h-4 md:w-4"
                  src={searchSymbol}
                  alt="search-image"
                />
                <p className="md:text-sm lg:text-base font-medium">{suggestion?.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

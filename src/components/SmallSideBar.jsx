import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SmallSideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <aside
      className={`mt-2 hidden px-2 md:block md:w-[70px] ${
        isMenuOpen === true ? "lg:hidden" : ""
      } fixed `}
    >
      <Link className="mb-8 flex flex-col items-center gap-2 ">
        <i className="fa-solid fa-house text-white"></i>
        <span className="text-[10px] text-white">Home</span>
      </Link>
      <Link className="mb-8 flex flex-col items-center gap-1">
        <i className="fa fa-play text-white"></i>
        <span className="text-[10px] text-white">Shorts</span>
      </Link>
      <Link className="mb-8 flex flex-col items-center gap-1 ">
        <i className="fa fa-money-bill text-white"></i>
        <span className="text-[10px] text-white">Subscriptions</span>
      </Link>
      <Link className=" flex flex-col items-center gap-1 ">
        <i className="fa fa-photo-film text-white"></i>
        <span className="text-[10px] text-white">Library</span>
      </Link>
    </aside>
  );
};

export default SmallSideBar;

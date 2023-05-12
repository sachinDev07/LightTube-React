import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="hidden h-[calc(100%_-_60px)] w-56 bg-black pl-4 pr-4 text-white md:block">
      <ul className="flex flex-col border-b-2 border-solid border-white/[0.4] pb-3">
        <Link className="transition-bg mb-1 mt-2  flex items-center rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa-solid fa-house mr-6 text-white"></i>
          <span>Home</span>
        </Link>
        <Link className="transition-bg mb-1  flex items-center rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa fa-play mr-7 text-white"></i>
          <span>Shorts</span>
        </Link>
        <Link className="transition-bg mb-1 flex  items-center rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i className="fa fa-money-bill mr-6"></i>
          <span>Subscription</span>
        </Link>
      </ul>
      <ul className="flex flex-col border-b-2 border-solid border-white/[0.4] pb-3 pt-3">
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa fa-photo-film mr-6"></i>
          <span>Library</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa fa-clock-rotate-left mr-6"></i>
          <span>History</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa fa-play mr-7"></i>
          <span>Your vidoes</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa-regular fa-clock mr-6"></i>
          <span>Watch later</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa-solid fa-scissors mr-6"></i>
          <span>Your clips</span>
        </Link>
      </ul>
      <span className="bold mt-4 inline-block text-lg text-white">Explore</span>
      <ul className="mt-3 flex flex-col">
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa-solid fa-fire mr-6"></i>
          <span>Trending</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa fa-bag-shopping mr-6"></i>
          <span>Shopping</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa fa-music mr-6"></i>
          <span>Music</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa fa-film mr-6"></i>
          <span>Movies & Shows</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa fa-signal mr-6"></i> <span>Live</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa fa-gamepad mr-6"></i>
          <span>Gaming</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa-solid fa-newspaper mr-6"></i>
          <span>News</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa-solid fa-trophy mr-6"></i>
          <span>Sports</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa-solid fa-lightbulb mr-6"></i>
          <span>Learning</span>
        </Link>
        <Link className="transition-bg mb-1 flex items-center  rounded-lg px-3 py-2 duration-150 ease-in-out hover:bg-white/[0.2]">
          <i class="fa-solid fa-shirt mr-5"></i>
          <span>Fashion & Beauty</span>
        </Link>
      </ul>
    </aside>
  );
};

export default SideBar;

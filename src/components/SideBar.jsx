import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SmallSideBar from "./SmallSideBar";
import BigSideBar from "./BigSideBar";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`h-screen md:fixed md:z-50 md:top-16 md:w-[10%]  ${
        isMenuOpen ? "lg:w-[20%]" : "lg:w-[7%]"
      } `}
    >
      <SmallSideBar />
      <BigSideBar />
    </div>
    
  );
};

export default SideBar;

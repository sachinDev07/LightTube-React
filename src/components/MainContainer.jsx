import { useSelector } from "react-redux";

import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`w-full md:w-[85%] lg:w-[90%]    ${
        isMenuOpen === true ? "md:opacity-50 lg:ml-72 lg:pr-28" : "lg:ml-24"
      } lg:opacity-100 `}
    >
      {/* <ButtonList /> */}
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

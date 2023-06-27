import { useEffect } from "react";

import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      // API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          chatMessage: generateRandomMessage() + " 😲",
        })
      );
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mr-4 mt-6 h-[480px] overflow-y-scroll rounded-md border-2 border-white p-2 flex flex-col-reverse">
      {chatMessage.map((c, index) => (
        <ChatMessages key={index} name={c.name} chatMessage={c.chatMessage} />
      ))}
    </div>
  );
};

export default LiveChat;

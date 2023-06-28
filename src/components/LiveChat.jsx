import { useEffect, useState } from "react";

import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      // API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          chatMessage: generateRandomMessage() + " 😲",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed mr-6 rounded-md border-2 border-white">
      <div className="mr-1 mt-6 flex h-[480px] flex-col-reverse overflow-y-scroll p-2">
        {chatMessage.map((c, index) => (
          <ChatMessages key={index} name={c.name} chatMessage={c.chatMessage} />
        ))}
      </div>
      <form
        className="flex w-[450px] items-center justify-between p-2 px-4"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Sachin kumar",
              chatMessage: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <div className="w-[340px] rounded-lg border-2 border-green-600 px-2 py-1">
          <input
            className="w-full border-none bg-transparent outline-none"
            type="text"
            placeholder="let's chat"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
        </div>
        <button
          className="rounded-md bg-green-600 px-3 py-1 hover:bg-green-800"
          type="submit"
          onSubmit={() => {
            dispatch(
              addMessage({
                name: "Sachin kumar",
                chatMessage: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;

import { Provider } from "react-redux";
import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "./components/Header";
import store from "./utils/store";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";

import "./App.css";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

export default appRouter;

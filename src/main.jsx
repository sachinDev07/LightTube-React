import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Login from "./Login.jsx";
import Body from "./components/Body.jsx";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    children: [
      {
        path : "/",
        element : <Body />
      },
    ]
  },
  {
    path: "/login",
    element : <Login />,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)

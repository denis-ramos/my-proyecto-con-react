import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Rickandmortyapp from "./componentes/Rickandmortyapp.jsx";
import Home from "./componentes/Home.jsx";

import { createBrowserRouter, createHashRouter, Route, Router, RouterProvider } from "react-router-dom";
import Home from "./componentes/Home.jsx";

const router =createHashRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/",
    element:<Rickandmortyapp/>
  },
  {
    path: "/*",
    element:<p>ERROR</p>
  }
]
)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

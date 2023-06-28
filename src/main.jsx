import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CraftedShots from "./pages/all projects/Crafted Shots/CraftedShots.jsx";
import ToyHavenVille from "./pages/all projects/toyHaven Ville/ToyHavenVille.jsx";
import FlavorsOfMexico from "./pages/all projects/Flavors of Mexico/FlavorsOfMexico.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "crafted-shots",
    element: <CraftedShots/>
  },
  {
    path: "toyhaven-ville",
    element: <ToyHavenVille/>
  },
  {
    path: "flavors-of-mexico",
    element: <FlavorsOfMexico/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoreAbout from "./pages/home/about/MoreAbout.jsx";
import "aos/dist/aos.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about-me",
    element:<MoreAbout/>
  }
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

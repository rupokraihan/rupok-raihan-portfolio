import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

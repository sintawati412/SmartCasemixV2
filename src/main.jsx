import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";

import Dashboard from "./pages/Dashboard";
import ICD10 from "./pages/ICD10";
import ICD9 from "./pages/ICD9";
import BA from "./pages/BA";
import Favorite from "./pages/Favorite";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "icd10",
        element: <ICD10 />,
      },
      {
        path: "icd9",
        element: <ICD9 />,
      },
      {
        path: "ba",
        element: <BA />,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
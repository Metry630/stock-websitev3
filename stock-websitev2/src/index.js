import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home2 from "./routes/Logo";
import Home from "./routes/Home";
import News from "./routes/News";
import LearningResources from "./routes/LearningResources/LearningResources";
import Graphs from "./routes/Graphs";
import Signup from "./routes/Signup";
import ErrorPage from "./routes/ErrorPage";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "learning",
        element: <LearningResources />,
      },
      {
        path: "graphs",
        element: <Graphs />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

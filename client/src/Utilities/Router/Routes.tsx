import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../../Components/Authentication/Login/Login";
import Registration from "../../Components/Authentication/Registration/Registration";
import Errorpage from "../../Components/ErrorPage/Errorpage";
import Header from "../../Components/Main/Header/Header";
import Home from "../../Components/Main/Home/Home";
import Main from "../../Components/Main/Main";
import Schedule from "../../Components/Schedule/Schedule";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Registration /> },
        { path: "/schedule", element: <Schedule /> },
      ],
    },
    {
      path: "*",
      element: (
        <div>
          <Errorpage></Errorpage>
        </div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Routes;

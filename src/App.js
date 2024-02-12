import React from "react";
import MainLayout from "./Layouts/MainLayout";
import Portfolio from "./Components/Portfolio/Portfolio";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Components/HomeCompmonent/Home";
import Error from "./Components/ErrorComponent/Error";
import About from "./Components/AboutComponent/About";
import Contact from "./Components/ContactComponent/Contact";
const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/nav", element: <NavBar /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);
  return (
    <>
      {/* <MainLayout /> */}
      {/* <Portfolio /> */}
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;

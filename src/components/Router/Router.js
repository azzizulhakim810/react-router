import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Service from "../Service/Service";
import SingleUser from "../SingleUser/SingleUser";

export const routerMain = createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>,
  },
  {
    path:"/about",
    element:<About></About>,
  },
  {
    path:"/users",
    element:<SingleUser></SingleUser>,
  },
  {
    path:"/service",
    element:<Service></Service>,
  },
  {
    path:"/contact",
    element:<Contact></Contact>,
  }
]);
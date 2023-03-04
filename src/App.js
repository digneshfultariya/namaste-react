import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginPage from "./components/LoginPage";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
      path: '/login',
      element: <LoginPage />
  },
  {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
          {
              path: '/',
              element: <Body />
          },
          {
              path: '/about',
              element: <About />
          },
          {
              path: '/restaurants/:id',
              element: <RestaurantMenu />
          }
      ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

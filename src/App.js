import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Contact from "./pages/contact";
import Details from "./pages/details";
import Shop from "./pages/shop";
import Home from "./pages/home";
import SignIn from "./pages/signin";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details" element={<Details />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;

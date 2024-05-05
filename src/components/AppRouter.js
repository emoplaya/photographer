import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import Portfolio from "../pages/Portfolio";
import Reviews from "../pages/Reviews";
import PrimarySchool from "../pages/PrimarySchool";
import KinderGarden from "../pages/KinderGarden";
import Costumes from "../pages/Costumes";
import Cart from "../pages/Cart";
import PlaceOrder from "../pages/PlaceOrder";
import PhotosDisplay from "../pages/PhotosDisplay";

const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/contacts", Component: Contacts },
  { path: "/portfolio", Component: Portfolio },
  { path: "/reviews", Component: Reviews },
  { path: "*", Component: Home },
  { path: "/primary", Component: PrimarySchool },
  { path: "/kinder", Component: KinderGarden },
  { path: "/costumes", Component: Costumes },
  { path: "/cart", Component: Cart },
  { path: "/order", Component: PlaceOrder },
  { path: "/photosdisplay", Component: PhotosDisplay },
];
const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;

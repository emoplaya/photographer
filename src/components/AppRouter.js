import React, { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Contacts from "../pages/Contacts/Contacts";
import Portfolio from "../pages/Portfolio/Portfolio";
import Reviews from "../pages/Reviews/Reviews";
import PrimarySchool from "../pages/Portfolio/PrimarySchool";
import KinderGarden from "../pages/Portfolio/KinderGarden";
import Costumes from "../pages/Portfolio/Costumes";
import Cart from "../pages/Cart/Cart";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";
import PhotosDisplay from "../pages/PhotosDisplay/PhotosDisplay";

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
    <AnimatePresence mode="wait">
      <Routes>
        {publicRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;

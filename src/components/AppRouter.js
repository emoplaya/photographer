import React from "react";
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

const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/contacts", Component: Contacts },
  { path: "/portfolio", Component: Portfolio },
  { path: "/reviews", Component: Reviews },
  { path: "*", Component: Home },
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

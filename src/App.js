import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import "./scss/app.scss";
import AppRouter from "./components/AppRouter";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

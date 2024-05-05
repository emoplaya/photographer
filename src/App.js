import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter";
import LoginPopup from "./components/LoginPopup/LoginPopup";

import "./scss/app.scss";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="wrapper">
        <BrowserRouter>
          <NavBar setShowLogin={setShowLogin} />
          <ScrollToTop />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

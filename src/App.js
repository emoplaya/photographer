import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

import "./scss/app.scss";
import AppRouter from "./components/AppRouter";
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import Home from "./Pages/Home/Home";
import AccommodationSheet from "./Pages/AccommodationSheet/AccommodationSheet";
import About from "./Pages/About/About";
import NotFound from "./Pages/404/404";
import Header from "./Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FicheLogement" element={<AccommodationSheet />} />
        <Route path="/APropos" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

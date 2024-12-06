import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import DetailsPage from "./components/DetailsPage";
import MODX70Page from "./components/MODX70Page"
import AccueilSite from "./components/AccueilSite";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<AccueilSite />} />
          <Route path="/MainPage" element={<MainPage />} />
        </Routes>
      </Router>
  );
};

export default App;

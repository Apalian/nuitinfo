import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AccueilSite from "./components/AccueilSite";
import Navbar from "./components/Navbar";

const App = () => {
  return (
      <Router>
        <Routes>
          {/* Définir les routes */}
          <Route path="/" element={<AccueilSite />} /><Route path="/new" element={<AccueilSite />} />
        </Routes>
      </Router>
  );
};

export default App;

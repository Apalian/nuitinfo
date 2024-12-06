import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import DetailsPage from "./components/DetailsPage";
import MODX70Page from "./components/MODX70Page"

const App = () => {
  return (
      <Router>

        <Routes>
          {/* Définir les routes */}
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/DetailsPage" element={<DetailsPage />} />
          <Route path="/MODX70Page" element={<MODX70Page />} />
        </Routes>
      </Router>
  );
};

export default App;

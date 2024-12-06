import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import DetailsPage from "./components/DetailsPage";

const App = () => {
  return (
      <Router>

        <Routes>
          {/* Définir les routes */}
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/DetailsPage" element={<DetailsPage />} />
        </Routes>
      </Router>
  );
};

export default App;

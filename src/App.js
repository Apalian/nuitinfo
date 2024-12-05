import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";


const App = () => {
  return (
      <Router>

        <Routes>
          {/* Définir les routes */}
          <Route path="/MainPage" element={<MainPage />} />
        </Routes>
      </Router>
  );
};

export default App;

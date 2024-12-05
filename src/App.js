import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Accueil from "./components/Accueil";

const App = () => {
  return (
      <Router>
        <Routes>
          {/* Définir les routes */}
          <Route path="/" element={<Accueil />} />
        </Routes>
      </Router>
  );
};

export default App;

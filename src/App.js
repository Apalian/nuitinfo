import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import AccueilSite from "./components/AccueilSite";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Rediriger vers le fichier HTML statique */}
                <Route path="/" element={<iframe src="/captcha/captcha.html" style={{ width: "100%", height: "100vh", border: "none" }} />} />
                <Route path="/Accueil" element={<AccueilSite />} />
                <Route path="/MainPage" element={<MainPage />} />
            </Routes>
        </Router>
    );
};

export default App;

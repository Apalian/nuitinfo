import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import AccueilSitePropre from "./components/AccueilSitePropre";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Rediriger vers le fichier HTML statique */}
                <Route path="/" element={<iframe src="/captcha/captcha.html" style={{ width: "100%", height: "100vh", border: "none" }} />} />
                <Route path="/Accueil" element={<AccueilSitePropre />} />
                <Route path="/MainPage" element={<MainPage />} />
            </Routes>
        </Router>
    );
};

export default App;

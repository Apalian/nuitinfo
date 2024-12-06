import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import AccueilSite from "./components/AccueilSitePropre";
import RedirectToCaptcha from "./components/redirectToCaptcha";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Rediriger vers le fichier HTML statique */}

                <Route path="/" element={<AccueilSite />} />
                <Route path="/MainPage" element={<MainPage />} />
            </Routes>
        </Router>
    );
};

export default App;

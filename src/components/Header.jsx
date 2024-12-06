// src/components/Header.js
import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css'; // Optionnel : pour styliser le header

const Header = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/MainPage');
    };

    return (
        <header className="header bg-primary text-white text-center py-5">
            <div className="container">
                <h1>Les Parallèles entre le Corps Humain et l’Océan</h1>
                <p>Découvrez comment notre corps et l'océan sont interconnectés</p>
                <button
                    onClick={handleBackClick}
                    className="btn btn-light mt-3"
                    aria-label="Retour à la page principale"
                >
                    Retour
                </button>
            </div>
        </header>
    );
};

export default Header;

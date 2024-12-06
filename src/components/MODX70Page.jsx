// src/components/MODX70Page.js
import React from 'react';
import Header from './Header';
import './MODX70Page.css';

const MODX70Page = () => {
    return (
        <div className="modx70-page-container">
            <Header />
            <div className="modx70-content">
                <h1>Le MODX 70 (Un Appareil de Soutien Extérieur pour l’Océan)</h1>

                <div className="modx70-section">
                    <h2>Parallèle avec le corps humain</h2>
                    <p>
                        Lorsque certains organes vitaux d’un patient s’affaiblissent, la médecine peut recourir à des dispositifs de soutien externes pour rétablir les fonctions essentielles. De même, le MODX 70, développé par la Fondation Race For Water, agit comme un appareil technologique venant assister l’Océan dans sa lutte contre le réchauffement, la pollution et la dégradation des écosystèmes. Tel un « cœur artificiel » ou un « poumon externe » placé au service d’un organisme affaibli, ce navire « zéro émission de CO₂ » réduit la pression sur les processus océaniques, facilitant leur restauration.
                    </p>
                </div>

                <div className="modx70-section">
                    <h2>Problématique</h2>
                    <p>
                        Le transport maritime classique, dopé aux énergies fossiles, libère de grandes quantités de CO₂ et de polluants, perturbant les courants, l’équilibre chimique, la biodiversité et la fonction filtrante de l’Océan. Privé d’un « système respiratoire » optimal, d’une « circulation » fluide et d’une « immunité » robuste, l’Océan peine à réguler le climat, produire de l’oxygène ou soutenir la vie marine. Sans intervention, ses mécanismes vitaux se grippent, compromettant l’avenir de la planète.
                    </p>
                </div>

                <div className="modx70-section">
                    <h2>Solutions</h2>
                    <p>
                        Le MODX 70 démontre qu’il est possible de naviguer sans nuire aux équilibres océaniques. En recourant aux énergies renouvelables, en intégrant des systèmes véliques et un stockage de l’énergie innovant, il offre un modèle concret de transition énergétique pour le transport maritime. À son bord, la Fondation Race For Water mène études, sensibilisation et démonstrations, inspirant ainsi une évolution des pratiques internationales. Comme un traitement adapté, ce navire aide l’Océan à retrouver sa pleine vitalité, assurant la pérennité d’un environnement stable, source de vie et d’équilibre pour les générations futures.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MODX70Page;

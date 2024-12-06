// src/components/PageBouee.js
import React, { useState, useRef } from 'react';
import './PageBouee.css';
import lifebuoyImg from '../assets/lifebuoy.png';
import oceanVideo from '../assets/video.mp4';

const PageBouee = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const videoRef = useRef(null);

    return (
        <div className="page-bouee-container">
            {/* Vidéo en arrière-plan */}
            <video
                className="background-video"
                autoPlay
                loop
                muted
                playsInline
                ref={videoRef}
            >
                <source src={oceanVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Conteneur de la bouée */}
            <div className="lifebuoy-container">
                <img src={lifebuoyImg} alt="Bouée" className="lifebuoy-image" />

                {/* Trois zones invisibles sur la bouée */}
                <div
                    className="invisible-zone zone-1"
                    onClick={() => setShowModal1(true)}
                    title="Solution 1"
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && setShowModal1(true)}
                ></div>
                <div
                    className="invisible-zone zone-2"
                    onClick={() => setShowModal2(true)}
                    title="Solution 2"
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && setShowModal2(true)}
                ></div>
                <div
                    className="invisible-zone zone-3"
                    onClick={() => setShowModal3(true)}
                    title="Solution 3"
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && setShowModal3(true)}
                ></div>
            </div>

            {/* Modales pour chaque solution */}
            {showModal1 && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Décarboner le transport maritime</h2>
                        <p>
                            La Fondation Race For Water promeut l’usage d’énergies renouvelables
                            et de technologies véliques, afin de naviguer sans émettre de CO₂,
                            contribuant ainsi à préserver le climat et l’équilibre de l’Océan.
                        </p>
                        <button onClick={() => setShowModal1(false)}>Fermer</button>
                    </div>
                </div>
            )}

            {showModal2 && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Réduire la pollution plastique</h2>
                        <p>
                            En soutenant des solutions locales de gestion et de valorisation des déchets,
                            la Fondation limite l’arrivée de plastiques dans l’Océan, préservant ainsi
                            la faune marine et la santé humaine.
                        </p>
                        <button onClick={() => setShowModal2(false)}>Fermer</button>
                    </div>
                </div>
            )}

            {showModal3 && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Protéger la biodiversité marine</h2>
                        <p>
                            À travers la création d’Aires Marines Protégées et la sensibilisation,
                            la Fondation Race For Water contribue à sauvegarder les écosystèmes marins,
                            renforçant ainsi la résilience de l’Océan face aux changements globaux.
                        </p>
                        <button onClick={() => setShowModal3(false)}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PageBouee;

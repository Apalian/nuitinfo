// src/components/MainPage.js
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import boatImg from '../assets/boat.png';
import raftImg from '../assets/raft.png';
import lifebuoyImg from '../assets/lifebuoy.png';
import oceanVideo from '../assets/video.mp4';

const MainPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const navigate = useNavigate();
    const videoRef = useRef(null);

    const handleItemClick = (item) => {
        if (selectedItem === item) {
            setSelectedItem(null);
        } else {
            setSelectedItem(item);
            if (item === 'raft') {
                navigate('/DetailsPage');
            }
        }
    };

    const initialPositions = {
        lifebuoy: { left: '-20%' },
        raft: { left: '0%' },
        boat: { left: '20%' },
    };

    const selectedPosition = { top: '50%', left: '20%' };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.3;
        }

        if (selectedItem) {
            const waveDuration = 10000;
            const elementLeft = initialPositions[selectedItem].left.replace('%', '');
            const delay = ((100 + parseInt(elementLeft)) / 200) * waveDuration;

            const timer = setTimeout(() => {
                const element = document.querySelector(`.element-item.${selectedItem}`);
                if (element) {
                    element.classList.add('ripple-effect');
                    setTimeout(() => {
                        element.classList.remove('ripple-effect');
                    }, 1000);
                }
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [selectedItem, initialPositions]);

    return (
        <div className="main-container">
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

            <div className="elements-container">
                {['lifebuoy', 'raft', 'boat'].map((item) => (
                    <motion.div
                        key={item}
                        className={`element-item ${item}`}
                        onClick={() => handleItemClick(item)}
                        initial={{
                            bottom: initialPositions[item].bottom,
                            left: initialPositions[item].left,
                            scale: item === 'raft' ? 1.5 : 1.2,
                            opacity: 1,
                        }}
                        animate={
                            selectedItem === item
                                ? {
                                    top: selectedPosition.top,
                                    left: selectedPosition.left,
                                    scale: 2,
                                    opacity: 1
                                }
                                : selectedItem === null
                                    ? {
                                        bottom: initialPositions[item].bottom,
                                        left: initialPositions[item].left,
                                        scale: item === 'raft' ? 1.5 : 1.2,
                                        opacity: 1
                                    }
                                    : { opacity: 0 }
                        }
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        aria-label={`Sélectionner ${item}`}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') handleItemClick(item);
                        }}
                    >
                        <img
                            src={
                                item === 'boat'
                                    ? boatImg
                                    : item === 'raft'
                                        ? raftImg
                                        : lifebuoyImg
                            }
                            alt={item}
                            className="element-icon"
                            loading="lazy"
                        />

                        {/* Si l'élément sélectionné est la bouée, on affiche les zones invisibles */}
                        {item === 'lifebuoy' && selectedItem === 'lifebuoy' && (
                            <>
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
                            </>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Modales */}
            {showModal1 && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Décarboner le transport maritime</h2>
                        <p>
                            La Fondation Race For Water promeut l’usage d’énergies
                            renouvelables et de technologies véliques, afin de naviguer
                            sans émettre de CO₂, contribuant ainsi à préserver le climat et
                            l’équilibre de l’Océan.
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
                            En soutenant des solutions locales de gestion et de valorisation
                            des déchets, la Fondation limite l’arrivée de plastiques dans
                            l’Océan, préservant ainsi la faune marine et la santé humaine.
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
                            À travers la création d’Aires Marines Protégées et la
                            sensibilisation, la Fondation Race For Water contribue à
                            sauvegarder les écosystèmes marins, renforçant ainsi la
                            résilience de l’Océan face aux changements globaux.
                        </p>
                        <button onClick={() => setShowModal3(false)}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainPage;

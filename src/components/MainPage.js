// src/components/MainPage.js
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import './MainPage.css';
import boatImg from '../assets/boat.png';
import raftImg from '../assets/raft.png';
import lifebuoyImg from '../assets/lifebuoy.png';
import oceanVideo from '../assets/video.mp4'; // Importez votre vidéo ici

const MainPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate(); // Initialisez useNavigate
    const videoRef = useRef(null); // Référence pour la vidéo

    const handleItemClick = (item) => {
        if (selectedItem === item) {
            setSelectedItem(null);
        } else {
            setSelectedItem(item);
            if (item === 'raft') {
                navigate('/DetailsPage'); // Naviguez vers DetailsPage
            }
        }
    };

    // Positions initiales pour chaque élément
    const initialPositions = {
        lifebuoy: {left: '-20%' },
        raft: {left: '0%' },
        boat: {left: '20%' },
    };

    // Position cible pour l'élément sélectionné (milieu gauche)
    const selectedPosition = { top: '50%', left: '20%' };

    useEffect(() => {
        // Ralentir la vidéo
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.3; // Ralentir la vidéo à 50% de la vitesse normale
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
                ref={videoRef} // Associer la référence à la vidéo
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
                            scale: item === 'raft' ? 1.5 : 1.2, // Augmenter l'échelle initiale
                            opacity: 1,
                        }}
                        animate={
                            selectedItem === item
                                ? {
                                    top: selectedPosition.top,
                                    left: selectedPosition.left,
                                    scale: 2, // Agrandir l'élément sélectionné
                                    opacity: 1
                                }
                                : selectedItem === null
                                    ? {
                                        bottom: initialPositions[item].bottom,
                                        left: initialPositions[item].left,
                                        scale: item === 'raft' ? 1.5 : 1.2, // Maintenir la taille agrandie
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
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './MainPage.css';
import boatImg from '../assets/boat.png';
import raftImg from '../assets/raft.png';
import lifebuoyImg from '../assets/lifebuoy.png';
import oceanVideo from '../assets/Videomer2.mp4'; // Importez votre vidéo ici

const MainPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        if (selectedItem === item) {
            setSelectedItem(null);
        } else {
            setSelectedItem(item);
        }
    };

    // Positions initiales pour chaque élément
    const initialPositions = {
        lifebuoy: { top: '10%', left: '10%' },
        raft: { top: '60%', left: '50%' },
        boat: { top: '20%', left: '85%' },
    };

    // Position cible pour l'élément sélectionné (milieu gauche)
    const selectedPosition = { top: '50%', left: '20%' };

    useEffect(() => {
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
                            top: initialPositions[item].top,
                            left: initialPositions[item].left,
                            scale: item === 'raft' ? 1.2 : 1,
                            opacity: 1,
                        }}
                        animate={
                            selectedItem === item
                                ? {
                                    top: selectedPosition.top,
                                    left: selectedPosition.left,
                                    scale: 1.5,
                                    opacity: 1
                                }
                                : selectedItem === null
                                    ? {
                                        top: initialPositions[item].top,
                                        left: initialPositions[item].left,
                                        scale: item === 'raft' ? 1.2 : 1,
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
                        />
                    </motion.div>
                ))}
            </div>
            <div className="content">
                {selectedItem === 'boat' && <div>Boat Page Content</div>}
                {selectedItem === 'raft' && <div>Raft Page Content</div>}
                {selectedItem === 'lifebuoy' && <div>Lifebuoy Page Content</div>}
            </div>
        </div>
    );
};

export default MainPage;

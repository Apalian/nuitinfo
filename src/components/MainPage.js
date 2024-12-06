// src/components/MainPage.js
import React, { useRef, useEffect, useState } from 'react';
import './MainPage.css';
import boatImg from '../assets/boat.png';
import raftImg from '../assets/raft.png';
import lifebuoyImg from '../assets/boue.png';
import fishImg from '../assets/Asset 2.png';
import logoChasseImg from '../assets/logoChasse.png';
import oceanVideo from '../assets/video.mp4';

const MainPage = () => {
    const videoRef = useRef(null);
    const fishRef = useRef(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const [jumpCount, setJumpCount] = useState(0);
    const [currentFishSrc, setCurrentFishSrc] = useState(fishImg);

    useEffect(() => {
        const fish = fishRef.current;

        const triggerFishAnimation = () => {
            // Gestion de l'image à afficher lors du saut
            if (jumpCount === 0) {
                // Premier saut : on affiche logoChasse.png
                setCurrentFishSrc(logoChasseImg);
            } else {
                // Sauts suivants : 1 chance sur 4 d'afficher logoChasse
                const randomChance = Math.floor(Math.random() * 4); // nombre entre 0 et 3
                if (randomChance === 0) {
                    setCurrentFishSrc(logoChasseImg);
                } else {
                    setCurrentFishSrc(fishImg);
                }
            }



            const randomLeft = Math.random() * 100;
            fish.style.left = randomLeft + "%";
            fish.classList.add('animating');
        };

        const onAnimationEnd = () => {
            fish.classList.remove('animating');
            setJumpCount(1);
        };

        fish.addEventListener('animationend', onAnimationEnd);

        const initialTimeout = setTimeout(triggerFishAnimation, 1000);
        const interval = setInterval(triggerFishAnimation, 8000);

        return () => {
            clearInterval(interval);
            clearTimeout(initialTimeout);
            fish.removeEventListener('animationend', onAnimationEnd);
        };
    }, [jumpCount]); // Depend de jumpCount pour mettre à jour l'image correctement

    const handleItemClick = (item) => {
        if (selectedItem === item) {
            setSelectedItem(null);
        } else {
            setSelectedItem(item);
        }
    };

    return (
        <div className="main-container">
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
                <div
                    className={`element-item lifebuoy ${selectedItem === 'lifebuoy' ? 'selected' : ''}`}
                    onClick={() => handleItemClick('lifebuoy')}
                >
                    <img
                        src={lifebuoyImg}
                        alt="lifebuoy"
                        className="element-icon"
                        loading="lazy"
                    />
                </div>
                <div
                    className={`element-item raft ${selectedItem === 'raft' ? 'selected' : ''}`}
                    onClick={() => handleItemClick('raft')}
                >
                    <img
                        src={raftImg}
                        alt="raft"
                        className="element-icon"
                        loading="lazy"
                    />
                </div>
                <div
                    className={`element-item boat ${selectedItem === 'boat' ? 'selected' : ''}`}
                    onClick={() => handleItemClick('boat')}
                >
                    <img
                        src={boatImg}
                        alt="boat"
                        className="element-icon"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="fish" ref={fishRef}>
                <img
                    src={currentFishSrc}
                    alt="fish"
                    className="fish-icon"
                    loading="lazy"
                />
            </div>

            {selectedItem && (
                <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
                    {(selectedItem === 'boat' || selectedItem === 'lifebuoy') && (
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h2>Contenu de la modal</h2>
                            <p>Informations sur {selectedItem}</p>
                            <button onClick={() => setSelectedItem(null)}>Fermer</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MainPage;

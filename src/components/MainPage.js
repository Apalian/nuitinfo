// src/components/MainPage.js
import React, { useRef, useEffect } from 'react';
import './MainPage.css';
import boatImg from '../assets/boat.png';
import raftImg from '../assets/raft.png';
import lifebuoyImg from '../assets/boue.png';
import fishImg from '../assets/Asset 2.png';
import oceanVideo from '../assets/video.mp4';

const MainPage = () => {
    const videoRef = useRef(null);
    const fishRef = useRef(null);

    useEffect(() => {
        const fish = fishRef.current;

        const triggerFishAnimation = () => {
            // Position horizontale aléatoire entre 0% et 100% pour le poisson
            const randomLeft = Math.random() * 100;
            fish.style.left = randomLeft + "%";

            // Lancer l'animation en ajoutant la classe
            fish.classList.add('animating');
        };

        const onAnimationEnd = () => {
            fish.classList.remove('animating');
        };

        fish.addEventListener('animationend', onAnimationEnd);

        // Première animation après 1 seconde
        const initialTimeout = setTimeout(triggerFishAnimation, 1000);
        // Puis toutes les 10 secondes
        const interval = setInterval(triggerFishAnimation, 10000);

        return () => {
            clearInterval(interval);
            clearTimeout(initialTimeout);
            fish.removeEventListener('animationend', onAnimationEnd);
        };
    }, []);

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

            {/* Éléments statiques centrés */}
            <div className="elements-container">
                <div className="element-item lifebuoy">
                    <img
                        src={lifebuoyImg}
                        alt="lifebuoy"
                        className="element-icon"
                        loading="lazy"
                    />
                </div>
                <div className="element-item raft">
                    <img
                        src={raftImg}
                        alt="raft"
                        className="element-icon"
                        loading="lazy"
                    />
                </div>
                <div className="element-item boat">
                    <img
                        src={boatImg}
                        alt="boat"
                        className="element-icon"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Poisson directement dans .main-container */}
            <div className="fish" ref={fishRef}>
                <img
                    src={fishImg}
                    alt="fish"
                    className="fish-icon"
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default MainPage;

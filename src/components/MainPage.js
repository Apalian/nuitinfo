import React, { useRef, useEffect, useState } from 'react';
import './MainPage.css';
import boatImg from '../assets/boat.png';
import bodyImg from '../assets/body.png';
import raftImg from '../assets/raft.png';
import lifebuoyImg from '../assets/boue.png';
import fishImg from '../assets/Asset 2.png';
import logoChasseImg from '../assets/logoChasse.png';
import oceanVideo from '../assets/video.mp4';

const MainPage = () => {
    const videoRef = useRef(null);
    const fishRef = useRef(null);
    const [selectedItem, setSelectedItem] = useState(null);

    // États pour les modales de la bouée
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const [jumpCount, setJumpCount] = useState(0);
    const [currentFishSrc, setCurrentFishSrc] = useState(fishImg);

    useEffect(() => {
        const fish = fishRef.current;

        const triggerFishAnimation = () => {
            // Gestion de l'image lors du saut
            if (jumpCount === 0) {
                setCurrentFishSrc(logoChasseImg);
            } else {
                const randomChance = Math.floor(Math.random() * 4);
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
    }, [jumpCount]);

    const handleItemClick = (item) => {
        // On ne toggle plus. Une fois cliqué, la bouée reste sélectionnée.
        setSelectedItem(item);
    };

    return (
        <>
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

                        {/* Zones invisibles affichées uniquement lorsque la bouée est sélectionnée */}
                        {selectedItem === 'lifebuoy' && (
                            <>
                                <div
                                    className="invisible-zone zone-1"
                                    onClick={(e) => { e.stopPropagation(); setShowModal1(true); }}
                                    title="Solution 1"
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            setShowModal1(true);
                                        }
                                    }}
                                ></div>
                                <div
                                    className="invisible-zone zone-2"
                                    onClick={(e) => { e.stopPropagation(); setShowModal2(true); }}
                                    title="Solution 2"
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            setShowModal2(true);
                                        }
                                    }}
                                ></div>
                                <div
                                    className="invisible-zone zone-3"
                                    onClick={(e) => { e.stopPropagation(); setShowModal3(true); }}
                                    title="Solution 3"
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            setShowModal3(true);
                                        }
                                    }}
                                ></div>
                            </>
                        )}
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
            </div>

            {selectedItem === 'raft' && (
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <img
                        src={bodyImg}
                        alt="body"
                        className="body-image"
                    />
                </div>
            )}

            {selectedItem === 'boat' && (
                <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Bateau</h2>
                        <div className="modx70-content">
                            <h1>Lee MODX 70 (Un Appareil de Soutien Extérieur pour l’Océan)</h1>

                            <div className="modx70-section">
                                <h2>Parallèle avec le corps humain</h2>
                                <p>
                                    Lorsque certains organes vitaux d’un patient s’affaiblissent, la médecine peut
                                    recourir à des dispositifs de soutien externes pour rétablir les fonctions
                                    essentielles. De même, le MODX 70, développé par la Fondation Race For Water, agit
                                    comme un appareil technologique venant assister l’Océan dans sa lutte contre le
                                    réchauffement, la pollution et la dégradation des écosystèmes. Tel un « cœur
                                    artificiel » ou un « poumon externe » placé au service d’un organisme affaibli, ce
                                    navire « zéro émission de CO₂ » réduit la pression sur les processus océaniques,
                                    facilitant leur restauration.
                                </p>
                            </div>

                            <div className="modx70-section">
                                <h2>Problématique</h2>
                                <p>
                                    Le transport maritime classique, dopé aux énergies fossiles, libère de grandes
                                    quantités de CO₂ et de polluants, perturbant les courants, l’équilibre chimique, la
                                    biodiversité et la fonction filtrante de l’Océan. Privé d’un « système respiratoire
                                    » optimal, d’une « circulation » fluide et d’une « immunité » robuste, l’Océan peine
                                    à réguler le climat, produire de l’oxygène ou soutenir la vie marine. Sans
                                    intervention, ses mécanismes vitaux se grippent, compromettant l’avenir de la
                                    planète.
                                </p>
                            </div>

                            <div className="modx70-section">
                                <h2>Solutions</h2>
                                <p>
                                    Le MODX 70 démontre qu’il est possible de naviguer sans nuire aux équilibres
                                    océaniques. En recourant aux énergies renouvelables, en intégrant des systèmes
                                    véliques et un stockage de l’énergie innovant, il offre un modèle concret de
                                    transition énergétique pour le transport maritime. À son bord, la Fondation Race For
                                    Water mène études, sensibilisation et démonstrations, inspirant ainsi une évolution
                                    des pratiques internationales. Comme un traitement adapté, ce navire aide l’Océan à
                                    retrouver sa pleine vitalité, assurant la pérennité d’un environnement stable,
                                    source de vie et d’équilibre pour les générations futures.
                                </p>
                            </div>
                        </div>
                        <button onClick={() => setSelectedItem(null)}>Fermer</button>
                    </div>
                </div>
            )}

            {/* Modales de la bouée (3 solutions) */}
            {showModal1 && (
                <div className="modal-overlay" onClick={() => setShowModal1(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
                <div className="modal-overlay" onClick={() => setShowModal2(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
                <div className="modal-overlay" onClick={() => setShowModal3(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
        </>
    );
};

export default MainPage;

import React, { useRef, useEffect, useState } from 'react';
import './MainPage.css';
import boatImg from '../assets/boat.png';
import raftImg from '../assets/raft.png';
import lifebuoyImg from '../assets/boue.png';
import fishImg from '../assets/Asset 2.png';
import logoChasseImg from '../assets/logoChasse.png';
import oceanVideo from '../assets/video.mp4';
import bodyImg from '../assets/body.png'; // Import de l'image du corps humain

const MainPage = () => {
    const videoRef = useRef(null);
    const fishRef = useRef(null);
    const [selectedItem, setSelectedItem] = useState(null);

    // États pour les modales de la bouée
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    // États pour les modales des organes
    const [showModalBody1, setShowModalBody1] = useState(false);
    const [showModalBody2, setShowModalBody2] = useState(false);
    const [showModalBody3, setShowModalBody3] = useState(false);
    const [showModalBody4, setShowModalBody4] = useState(false);
    const [showModalBody5, setShowModalBody5] = useState(false);

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
        // On ne toggle plus. Une fois cliqué, l'élément reste sélectionné.
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

                        {/* Zones visibles uniquement lorsque la bouée est sélectionnée */}
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
                                >
                                    1
                                </div>
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
                                >
                                    2
                                </div>
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
                                >
                                    3
                                </div>
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

            {/* Modal du bateau (générique) */}
            {selectedItem === 'boat' && (
                <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
                    <div className="modal-content modx70-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modx70-content">
                            <h1>Lee MODX 70 (Un Appareil de Soutien Extérieur pour l’Océan)</h1>
                            <div className="modx70-section">
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
                    </div>
                </div>
            )}

            {/* Modal du radeau avec images du radeau et du corps humain */}
            {selectedItem === 'raft' && (
                <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
                    <div className="modal-content raft-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="raft-modal-container">
                            <img src={raftImg} alt="Raft" className="raft-image" />
                            <img src={bodyImg} alt="Human Body" className="human-body-image" />
                            {/* Zones cliquables sur le corps humain */}
                            <div
                                className="body-zone body-zone-1"
                                onClick={(e) => { e.stopPropagation(); setShowModalBody1(true); }}
                                title=""
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        setShowModalBody1(true);
                                    }
                                }}
                            >
                                1
                            </div>
                            <div
                                className="body-zone body-zone-2"
                                onClick={(e) => { e.stopPropagation(); setShowModalBody2(true); }}
                                title="Les Poumons Bleus (Phytoplancton et Échanges Gazeux)"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        setShowModalBody2(true);
                                    }
                                }}
                            >
                                2
                            </div>
                            <div
                                className="body-zone body-zone-3"
                                onClick={(e) => { e.stopPropagation(); setShowModalBody3(true); }}
                                title="Le Cœur de l’Océan (Courants Marins)"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        setShowModalBody3(true);
                                    }
                                }}
                            >
                                3
                            </div>
                            <div
                                className="body-zone body-zone-4"
                                onClick={(e) => { e.stopPropagation(); setShowModalBody4(true); }}
                                title="Le Foie de l’Océan (Bioremédiation et Dégradation des Polluants)"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        setShowModalBody4(true);
                                    }
                                }}
                            >
                                4
                            </div>
                            <div
                                className="body-zone body-zone-5"
                                onClick={(e) => { e.stopPropagation(); setShowModalBody5(true); }}
                                title="Les Reins Océaniques (Zones Humides et Organismes Filtreurs)"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        setShowModalBody5(true);
                                    }
                                }}
                            >
                                5
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modales pour les organes du corps humain */}
            {showModalBody1 && (
                <div className="modal-overlay" onClick={() => setShowModalBody1(false)}>
                    <div className="modal-content modal-body" onClick={(e) => e.stopPropagation()}>
                        <h2>Le Cerveau de l’Océan (Régulation Climatique Globale)</h2>
                        <p>
                            L’Océan, par ses circulations thermohalines et ses interactions avec l’atmosphère, coordonne
                            une grande partie du climat terrestre, comme un cerveau qui régule l’ensemble du corps.
                            Dérèglement climatique, pollution et perte de biodiversité perturbent cette fonction clé.
                            Réduire drastiquement les émissions, préserver la biodiversité et innover durablement aident
                            à restaurer cette capacité régulatrice. En promouvant le transport maritime propre et la
                            sensibilisation, Race For Water soutient la restauration de cette fonction primordiale.
                        </p>
                    </div>
                </div>
            )}

            {showModalBody2 && (
                <div className="modal-overlay" onClick={() => setShowModalBody2(false)}>
                    <div className="modal-content modal-body" onClick={(e) => e.stopPropagation()}>
                        <h2>Les Poumons Bleus (Phytoplancton et Échanges Gazeux)</h2>
                        <p>
                            Le phytoplancton de l’Océan produit une part cruciale de l’oxygène que nous respirons et
                            absorbe une partie du CO₂, jouant un rôle semblable à des poumons planétaires.
                            L’acidification, la pollution plastique et la dégradation des écosystèmes réduisent cette capacité. En limitant la pollution plastique, en préservant les herbiers et les mangroves, et en diminuant les émissions de CO₂, on permet à l’Océan de mieux « respirer ». Race For Water contribue à cette amélioration en soutenant projets et initiatives locales et internationales.
                        </p>
                    </div>
                </div>
            )}

            {showModalBody3 && (
                <div className="modal-overlay" onClick={() => setShowModalBody3(false)}>
                    <div className="modal-content modal-body" onClick={(e) => e.stopPropagation()}>
                        <h2>Le Cœur de l’Océan (Courants Marins)</h2>
                        <p>
                            Les courants marins redistribuent chaleur, nutriments et énergie à travers la planète, comme
                            un cœur qui pulse et équilibre le climat. Le réchauffement climatique perturbe cette
                            circulation, fragilisant l’équilibre global. Pour aider l’Océan à retrouver son rythme, il
                            est essentiel de décarboner le transport maritime, réduire les émissions de CO₂ et adopter
                            des politiques limitant le réchauffement. La Fondation Race For Water soutient cette
                            démarche en promouvant des énergies propres.
                        </p>
                    </div>
                </div>
            )}

            {showModalBody4 && (
                <div className="modal-overlay" onClick={() => setShowModalBody4(false)}>
                    <div className="modal-content modal-body" onClick={(e) => e.stopPropagation()}>
                        <h2>Le Foie de l’Océan (Bioremédiation et Dégradation des Polluants)</h2>
                        <p>
                            L’Océan dispose de processus naturels de dégradation des polluants, comparables à un foie
                            qui neutralise les toxines. L’accumulation de plastiques, métaux lourds et pesticides
                            entrave cette fonction. Réduire les rejets toxiques, promouvoir la bioremédiation et limiter
                            la pollution à la source sont autant de moyens pour aider l’Océan à se détoxiquer. Par son
                            action et ses partenariats, Race For Water allège la charge chimique pesant sur l’Océan.
                        </p>
                    </div>
                </div>
            )}

            {showModalBody5 && (
                <div className="modal-overlay" onClick={() => setShowModalBody5(false)}>
                    <div className="modal-content modal-body" onClick={(e) => e.stopPropagation()}>
                        <h2>Les Reins Océaniques (Zones Humides et Organismes Filtreurs)</h2>
                        <p>
                            Les écosystèmes côtiers, tels que mangroves, marais et herbiers, ainsi que les organismes
                            filtreurs (huîtres, moules) épurent l’eau, retenant sédiments et polluants, à l’instar de
                            reins naturels. La destruction des habitats côtiers et la pollution surchargent cette
                            fonction épuratrice. Restaurer ces écosystèmes, améliorer la gestion des déchets et
                            valoriser les plastiques permettent à l’Océan de s’assainir. Race For Water soutient ces
                            démarches, aidant l’Océan à se purifier.
                        </p>
                    </div>
                </div>
            )}

            {/* Modales de la bouée (3 solutions) */}
            {showModal1 && (
                <div className="modal-overlay" onClick={() => setShowModal1(false)}>
                    <div className="modal-content modal-bouee" onClick={(e) => e.stopPropagation()}>
                        <h2>Décarboner le transport maritime</h2>
                        <p>
                            La Fondation Race For Water promeut l’usage d’énergies renouvelables
                            et de technologies véliques, afin de naviguer sans émettre de CO₂,
                            contribuant ainsi à préserver le climat et l’équilibre de l’Océan.
                        </p>
                    </div>
                </div>
            )}

            {showModal2 && (
                <div className="modal-overlay" onClick={() => setShowModal2(false)}>
                    <div className="modal-content modal-bouee" onClick={(e) => e.stopPropagation()}>
                        <h2>Réduire la pollution plastique</h2>
                        <p>
                            En soutenant des solutions locales de gestion et de valorisation des déchets,
                            la Fondation limite l’arrivée de plastiques dans l’Océan, préservant ainsi
                            la faune marine et la santé humaine.
                        </p>
                    </div>
                </div>
            )}

            {showModal3 && (
                <div className="modal-overlay" onClick={() => setShowModal3(false)}>
                    <div className="modal-content modal-bouee" onClick={(e) => e.stopPropagation()}>
                        <h2>Protéger la biodiversité marine</h2>
                        <p>
                            À travers la création d’Aires Marines Protégées et la sensibilisation,
                            la Fondation Race For Water contribue à sauvegarder les écosystèmes marins,
                            renforçant ainsi la résilience de l’Océan face aux changements globaux.
                        </p>
                    </div>
                </div>
            )}
        </>
    );

};

export default MainPage;

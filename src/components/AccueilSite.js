import React, { useState, useEffect, useRef } from 'react';
import './Css/AccueilSite.css';
import oceanSound from '../assets/ocean-sound.mp3';

const AccueilSite = () => {
    const [currentLine, setCurrentLine] = useState(0);
    const [volume, setVolume] = useState(0.5);

    const textLines = [
        "L'océan est le poumon de la Terre...",
        "Il absorbe près de 30% du CO2 et produit plus de la moitié de l'oxygène que nous respirons.",
        "Mais l'océan souffre...",
        "Pollution plastique, surpêche, et changement climatique : les équilibres vitaux de nos eaux sont bouleversés.",
        "Chaque minute, l'équivalent d'un camion de plastique est déversé dans nos océans.",
        "Les poissons se meurent, les coraux blanchissent, la vie marine s'éteint...",
        "Tout comme le corps humain malade, l'océan épuisé peine à remplir son rôle.",
        "Et les conséquences sont évidentes pour nous : augmentation de gaz à effet de serre, chaîne alimentaire déséquilibrée, risques pour notre santé.",
        "Cependant, tout n'est pas tout noir",
        "Il existe des solutions, et vous allez les découvrires",
        "Préserver l'océan, c'est protéger notre propre équilibre, notre propre souffle.",
        "Nous sommes un avec l'océan. Préservons-le, pour vivre ensemble."
    ];

    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.error('Playback prevented:', error);
            });
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const lineIndex = Math.min(
                Math.floor(scrollY / (viewportHeight * 0.5)),
                textLines.length - 1
            );
            console.log(lineIndex);
            setCurrentLine(lineIndex);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [textLines.length]);

    // Calcul de la couleur de fond en fonction de currentLine
    // On fait deux transitions :
    // 0 -> 8 : noir (#000) vers bleu foncé (#001f3f)
    // 8 -> fin : bleu foncé (#001f3f) vers bleu clair (#0074D9)

    const startColor = [0, 0, 0];       // #000000
    const midColor = [0, 31, 63];       // #001f3f
    const endColor = [0, 116, 217];     // #0074D9

    let blendedColor;
    if (currentLine < 8) {
        const subProgress = currentLine / 8; // entre 0 et 1
        blendedColor = startColor.map((c,i) => Math.round(c + (midColor[i] - c) * subProgress));
    } else {
        const subProgress = (currentLine - 8) / (textLines.length - 1 - 8);
        blendedColor = midColor.map((c,i) => Math.round(c + (endColor[i] - c) * subProgress));
    }

    const bgColor = `rgb(${blendedColor[0]}, ${blendedColor[1]}, ${blendedColor[2]})`;

    return (
        <div
            className="app"
            style={{
                height: `${textLines.length * 50}vh`,
                backgroundColor: bgColor,
                transition: 'background-color 1s ease-in-out'
            }}
        >
            <audio ref={audioRef} src={oceanSound} loop />
            <div className="text-container">
                {textLines.map((line, index) => (
                    <p
                        key={index}
                        className={`line ${index === currentLine  ? 'active' : ''}`}
                    >
                        {line}
                    </p>
                ))}
            </div>
            <div className="controls">
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="volume-slider"
                />
            </div>
            {currentLine === textLines.length - 2 && (
                <button
                    className="sensibiliser-button"
                    onClick={() => (window.location.href = '/sensibilisation')}
                >
                    Me sensibiliser
                </button>
            )}
        </div>
    );
};

export default AccueilSite;

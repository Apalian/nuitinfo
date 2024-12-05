let puzzlePiece = document.getElementById('puzzlePiece');
let puzzleContainer = document.querySelector('.puzzle');
let verifyButton = document.getElementById('verifyButton');
let wordDisplay = document.getElementById('wordDisplay'); // Référence au conteneur affichant le mot OCEAN
let fishImage = document.getElementById('fishImage'); // Référence à l'image du poisson depuis le HTML

let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;
let currentAngle = 0;

const TRANSITION_SPEED = 0.3; // Contrôle la vitesse de transition
const WORD = "OCEAN"; // Mot à afficher
let collectedLetters = []; // Liste des lettres récupérées
let lives = 3; // Nombre de vies restantes
let wrongLetterTouched = false; // Indique si une lettre incorrecte a été touchée

puzzleContainer.addEventListener('mouseenter', startTracking);
puzzleContainer.addEventListener('mouseleave', stopTracking);
puzzleContainer.addEventListener('mousemove', movePiece);
verifyButton.addEventListener('click', verifyCaptcha);

// Génère toutes les lettres du mot OCEAN dans le puzzle
generateWordLetters();

// Initialisation de l'affichage des lettres grisées
initializeWordDisplay();

function startTracking(e) {
    isDragging = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
}

function stopTracking(e) {
    isDragging = false;
}

function movePiece(e) {
    if (isDragging) {
        const rect = puzzleContainer.getBoundingClientRect();
        const x = e.clientX - rect.left - puzzlePiece.offsetWidth / 2;
        const y = e.clientY - rect.top - puzzlePiece.offsetHeight / 2;

        // Limite la pièce à l'intérieur des limites du puzzle
        const maxX = puzzleContainer.clientWidth - puzzlePiece.offsetWidth;
        const maxY = puzzleContainer.clientHeight - puzzlePiece.offsetHeight;
        puzzlePiece.style.left = Math.min(Math.max(0, x), maxX) + 'px';
        puzzlePiece.style.top = Math.min(Math.max(0, y), maxY) + 'px';

        // Calcul de l'angle directionnel
        const deltaX = e.clientX - lastMouseX;
        const deltaY = e.clientY - lastMouseY;

        if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
            const targetAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Angle cible en degrés

            // Convertit l'angle cible en une valeur cumulée
            currentAngle += calculateDeltaAngle(currentAngle, targetAngle);

            // Applique l'angle
            puzzlePiece.style.transform = `rotate(${currentAngle}deg)`;

            // Met à jour les coordonnées de la souris
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;

            // Vérifie les collisions
            checkCollisions();
        }
    }
}

// Calcul du delta pour une rotation fluide en fonction de la continuité
function calculateDeltaAngle(current, target) {
    const delta = target - (current % 360);

    // Ajuste le delta pour éviter les sauts brusques
    if (delta > 180) {
        return (delta - 360) * TRANSITION_SPEED;
    } else if (delta < -180) {
        return (delta + 360) * TRANSITION_SPEED;
    }

    return delta * TRANSITION_SPEED;
}

// Vérifie les collisions entre la pillshape et les lettres
function checkCollisions() {
    if (wrongLetterTouched) {
        return; // Ne permet pas de retoucher une lettre fausse avant de toucher une autre lettre
    }

    const pieceRect = puzzlePiece.getBoundingClientRect();
    const letters = document.querySelectorAll('.random-letter');

    letters.forEach(letter => {
        const letterRect = letter.getBoundingClientRect();

        // Détecte une collision
        if (
            pieceRect.left < letterRect.right &&
            pieceRect.right > letterRect.left &&
            pieceRect.top < letterRect.bottom &&
            pieceRect.bottom > letterRect.top
        ) {
            const letterValue = letter.textContent;

            // Si la lettre est la prochaine à collecter, ajoute-la
            if (letterValue === WORD[collectedLetters.length]) {
                collectedLetters.push(letterValue);
                updateCollectedLettersDisplay();

                // Supprime la lettre s'il y a collision
                letter.remove();

                // Réinitialise l'indicateur de mauvaise lettre
                wrongLetterTouched = false;

                // Vérifie si toutes les lettres ont été collectées
                if (collectedLetters.length === WORD.length) {
                    finalizeCaptcha(); // Animation de fin
                }
            } else if (!wrongLetterTouched) {
                // Mauvaise lettre collectée
                lives--;
                updateFishImage();
                wrongLetterTouched = true;
                setTimeout(() => {
                    wrongLetterTouched = false;
                }, 1000); // Débloque après 1 seconde
                if (lives === 0) {
                    failedCaptcha(); // Animation de perte
                }
            }
        }
    });
}

// Réinitialise le captcha lorsque toutes les vies sont perdues
function resetCaptcha() {
    alert("Vous avez perdu toutes vos vies. Réessayez.");
    collectedLetters = [];
    updateCollectedLettersDisplay();
    puzzlePiece.style.left = '0px';
    puzzlePiece.style.top = '0px';
    puzzlePiece.style.background = 'linear-gradient(135deg, red, yellow)';
    puzzlePiece.style.transform = 'rotate(0deg)';
    generateWordLetters();
    lives = 3;
    updateFishImage();
    wrongLetterTouched = false;
}

// Initialisation de l'affichage des lettres grisées dans wordDisplay
function initializeWordDisplay() {
    wordDisplay.innerHTML = '';
    for (let i = 0; i < WORD.length; i++) {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = WORD[i];
        letterSpan.style.color = 'lightgray'; // Initialement en gris
        letterSpan.style.margin = '0 5px';
        letterSpan.classList.add('word-letter');
        wordDisplay.appendChild(letterSpan);
    }
}

// Met à jour l'affichage des lettres collectées dans wordDisplay
function updateCollectedLettersDisplay() {
    const letterSpans = wordDisplay.querySelectorAll('.word-letter');
    for (let i = 0; i < collectedLetters.length; i++) {
        letterSpans[i].style.color = 'black'; // Les lettres collectées deviennent noires
    }
}

// Ajoute une animation de fin au puzzleContainer et retarde l'affichage de l'alerte
function finalizeCaptcha() {
    puzzleContainer.classList.add('success-animation'); // Ajoute une classe d'animation

    // Animation de fin sur le puzzleContainer
    setTimeout(() => {
        puzzleContainer.style.transition = 'background-color 1s ease';
        puzzleContainer.style.backgroundColor = '#4CAF50'; // Change la couleur en vert pour indiquer le succès
    }, 300);

    // Affiche l'alerte après un délai pour laisser l'animation se terminer
    setTimeout(() => {
        alert("Captcha réussi !");
    }, 1500);
}

// Animation de perte lorsque toutes les vies sont perdues
function failedCaptcha() {
    // Animation de zoom sur le poisson
    fishImage.style.transition = 'transform 2s ease';
    fishImage.style.transform = 'scale(1.5)'; // Zoom sur le poisson

    // Animation de changement de la mer en noir (mer de pétrole)
    setTimeout(() => {
        puzzleContainer.style.transition = 'background-color 2s ease';
        puzzleContainer.style.backgroundColor = '#000'; // Change la couleur en noir
    }, 500);

    // Affiche l'alerte après un délai pour laisser l'animation se terminer
    setTimeout(() => {
        alert("Vous avez perdu toutes vos vies. Réessayez.");
        window.location.reload(); // Réactualise la page après une défaite
    }, 3000);
}


// Génère toutes les lettres du mot OCEAN dans des positions aléatoires
function generateWordLetters() {
    puzzleContainer.querySelectorAll('.random-letter-container').forEach(letter => letter.remove()); // Supprime toutes les lettres précédentes
    const lettersArray = WORD.split('');
    const placedLetters = [];

    lettersArray.forEach(letter => {
        const letterContainer = document.createElement('div');
        letterContainer.classList.add('random-letter-container');
        letterContainer.style.position = 'absolute';

        // Image de poubelle
        const trashImage = document.createElement('img');
        trashImage.src = './image/poubelle.png';
        trashImage.style.width = '50px'; // Ajustez la taille selon vos besoins
        trashImage.style.height = '50px';
        trashImage.style.position = 'absolute';
        trashImage.style.top = '5px'; // Positionner 5px sous la lettre
        trashImage.style.left = '-5px'; // Décalage de 5px vers la gauche

        // Lettre par-dessus la poubelle
        const letterElement = document.createElement('div');
        letterElement.classList.add('random-letter');

        // Contenu de la lettre
        letterElement.textContent = letter;

        // Style de la lettre
        letterElement.style.fontSize = '30px'; // Taille de la lettre
        letterElement.style.color = '#FFFFFF'; // Toujours en blanc
        letterElement.style.fontWeight = 'bold';
        letterElement.style.position = 'relative';
        letterElement.style.zIndex = '1'; // Met la lettre devant l'image de la poubelle

        // Ajouter l'image de poubelle et la lettre dans le conteneur
        letterContainer.appendChild(trashImage);
        letterContainer.appendChild(letterElement);

        let x, y, overlapping;

        // Essaye de générer une position sans chevauchement avec une "bulle" de 20px autour de chaque lettre
        do {
            x = Math.random() * (puzzleContainer.clientWidth - 60); // 60 pour tenir compte de la taille des images
            y = Math.random() * (puzzleContainer.clientHeight - 60);
            overlapping = false;

            // Vérifie si la nouvelle position se chevauche avec une autre lettre ou sa bulle de sécurité
            for (let placedLetter of placedLetters) {
                const placedRect = placedLetter.getBoundingClientRect();
                const newRect = {
                    left: x - 20, // Ajustement pour la zone de sécurité
                    top: y - 20,
                    right: x + 60,
                    bottom: y + 60
                };

                // Ajout d'une bulle de sécurité autour de chaque lettre pour éviter la superposition
                if (!(newRect.right < placedRect.left ||
                    newRect.left > placedRect.right ||
                    newRect.bottom < placedRect.top ||
                    newRect.top > placedRect.bottom)) {
                    overlapping = true;
                    break;
                }
            }
        } while (overlapping);

        // Position définitive sans chevauchement
        letterContainer.style.left = `${x}px`;
        letterContainer.style.top = `${y}px`;

        // Ajoute la lettre et l'image de poubelle au puzzle
        puzzleContainer.appendChild(letterContainer);
        placedLetters.push(letterContainer);
    });
}


// Génère une couleur aléatoire pour les lettres
function getRandomColor() {
    return '#EEFFFF'; // Retourne toujours la couleur blanche
}


// Met à jour l'image du poisson en fonction du nombre de vies restantes
function updateFishImage() {
    if (lives === 3) {
        fishImage.src = './image/Poissongood.png';
    } else if (lives === 2) {
        fishImage.src = './image/Poissonmid.png';
    } else if (lives === 1) {
        fishImage.src = './image/Poissonbad.png';
    }
}

function verifyCaptcha() {
    if (collectedLetters.length === WORD.length) {
        finalizeCaptcha(); // Utiliser la nouvelle animation de fin
    } else {
        alert("Captcha incomplet. Collectez toutes les lettres.");
    }
}

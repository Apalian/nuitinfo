let puzzlePiece = document.getElementById('puzzlePiece');
let puzzleContainer = document.querySelector('.puzzle');
let verifyButton = document.getElementById('verifyButton');
let wordDisplay = document.getElementById('wordDisplay'); // Référence au conteneur affichant le mot OCEAN
let fishImage = document.getElementById('fishImage'); // Référence à l'image du poisson depuis le HTML

let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;
let currentAngle = 0;

const TRANSITION_SPEED = 0.5; // Contrôle la vitesse de transition

const words = ['OCEAN', 'CLIMAT', 'CORAUX', 'CARBONE', 'PLANCTON', 'PLASTIQUE', 'PETROLE', 'POLLUTION']; // Liste des mots
const WORD = words[Math.floor(Math.random() * words.length)]; // Choisit un mot aléatoire dans la liste
let collectedLetters = []; // Liste des lettres récupérées
let lives = 3; // Nombre de vies restantes
let wrongLetterTouched = false; // Indique si une lettre incorrecte a été touchée

puzzleContainer.addEventListener('mouseenter', startTracking);
puzzleContainer.addEventListener('mouseleave', stopTracking);
puzzleContainer.addEventListener('mousemove', movePiece);
verifyButton.addEventListener('click', verifyCaptcha);

// Génère toutes les lettres du mot aléatoire dans le puzzle
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

            // Crée des vagues au niveau du déplacement
            createWaveEffect(x + puzzlePiece.offsetWidth / 2, y + puzzlePiece.offsetHeight / 2);

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

// Fonction pour créer l'effet de vagues autour du puzzlePiece
function createWaveEffect(x, y) {
    const wave = document.createElement('div');
    wave.classList.add('wave-effect');
    wave.style.position = 'absolute';
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;
    wave.style.width = '10px';
    wave.style.height = '10px';
    wave.style.borderRadius = '50%';
    wave.style.border = '2px solid rgba(255, 255, 255, 0.8)'; // Bordure blanche pour simuler l'écume
    wave.style.pointerEvents = 'none';
    wave.style.transform = 'translate(-50%, -50%)'; // Centrer l'effet

    // Ajoute l'élément de vague au conteneur
    puzzleContainer.appendChild(wave);

    // Animation de la vague pour se dissiper
    setTimeout(() => {
        wave.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
        wave.style.transform = 'translate(-50%, -50%) scale(5)'; // Agrandit la vague
        wave.style.opacity = '0'; // Réduit l'opacité pour créer l'effet de dissipation
    }, 0);

    // Supprime l'élément de vague après l'animation
    setTimeout(() => {
        wave.remove();
    }, 1000);
}

function checkCollisions() {
    if (wrongLetterTouched) {
        return; // Ne permet pas de retoucher une lettre fausse avant de toucher une autre lettre
    }

    const pieceRect = puzzlePiece.getBoundingClientRect();
    const letters = document.querySelectorAll('.random-letter');
    const decoys = document.querySelectorAll('.decoy');

    // Vérifie la collision avec les lettres correctes
    letters.forEach(letter => {
        const letterRect = letter.getBoundingClientRect();

        // Détecte une collision avec la bonne lettre
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

                // Supprime la lettre et la poubelle (le conteneur parent)
                letter.parentElement.remove();

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

    // Vérifie la collision avec les leurres
    decoys.forEach(decoy => {
        const decoyRect = decoy.getBoundingClientRect();

        // Détecte une collision avec un leurre
        if (
            pieceRect.left < decoyRect.right &&
            pieceRect.right > decoyRect.left &&
            pieceRect.top < decoyRect.bottom &&
            pieceRect.bottom > decoyRect.top
        ) {
            // Mauvaise collision avec un leurre
            if (!wrongLetterTouched) {
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
    window.location.reload(); // Réactualise la page après une défaite
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




// Fonction pour générer des mouvements oscillatoires des lettres
function animateLetters() {
    const letters = document.querySelectorAll('.random-letter-container');
    letters.forEach(letterContainer => {
        let angle = Math.random() * Math.PI * 2; // Phase initiale aléatoire pour désynchroniser chaque lettre
        const amplitude = 5; // Amplitude de l'oscillation

        function oscillate() {
            angle += 0.05; // Incrémente un petit angle pour l'oscillation
            const offsetY = Math.sin(angle) * amplitude; // Calcul de l'offset pour l'oscillation verticale
            letterContainer.style.transform = `translateY(${offsetY}px)`;
            requestAnimationFrame(oscillate); // Recommence l'animation
        }
        oscillate();
    });
}

// Génère des lettres et des leurres pour le puzzle
function generateWordLetters() {
    // Supprime toutes les lettres précédentes
    puzzleContainer.querySelectorAll('.random-letter-container').forEach(letter => letter.remove());
    puzzleContainer.querySelectorAll('.decoy-container').forEach(decoy => decoy.remove());

    const lettersArray = WORD.split(''); // Split le mot choisi en lettres individuelles
    const numLetters = lettersArray.length; // Nombre de lettres à placer

    // Dimensions de la grille
    const containerWidth = puzzleContainer.clientWidth;
    const containerHeight = puzzleContainer.clientHeight;

    // Calcul des dimensions des cases dans la grille
    const caseWidth = containerWidth / numLetters; // Largeur de chaque case
    const caseHeight = containerHeight; // La hauteur de chaque case est égale à la hauteur du conteneur (une seule ligne)

    // Mélange les indices des cases pour placer les lettres dans des positions aléatoires
    let shuffledIndices = Array.from(Array(numLetters).keys()); // Crée une liste d'indices [0, 1, 2, ..., numLetters - 1]
    shuffledIndices = shuffledIndices.sort(() => Math.random() - 0.5); // Mélange les indices aléatoirement

    lettersArray.forEach((letter, index) => {
        // Utiliser un indice aléatoire de la liste mélangée
        const caseIndex = shuffledIndices[index];

        // Création du conteneur pour la lettre et la poubelle
        const letterContainer = document.createElement('div');
        letterContainer.classList.add('random-letter-container');
        letterContainer.style.position = 'absolute';

        // Image de poubelle
        const trashImage = document.createElement('img');
        trashImage.src = './image/poubelle.png';
        trashImage.style.width = '50px'; // Ajustez la taille selon vos besoins
        trashImage.style.height = '50px';
        trashImage.style.position = 'absolute';
        trashImage.style.top = '8px'; // Positionner 5px sous la lettre
        trashImage.style.left = '-20px'; // Décalage de 5px vers la gauche

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

        // Déterminer la position de la case dans la grille
        const caseLeft = caseIndex * caseWidth; // Calculer la position horizontale en fonction de l'indice mélangé
        const caseTop = 0; // Toutes les cases commencent en haut (ligne unique)

        // Position aléatoire à l'intérieur de la case
        const offsetX = Math.random() * (caseWidth - 60); // Offset aléatoire dans la largeur de la case, ajusté pour tenir compte de la taille des images
        const offsetY = Math.random() * (caseHeight - 60); // Offset aléatoire dans la hauteur de la case, ajusté pour tenir compte de la taille des images

        // Position finale de la lettre dans la grille
        letterContainer.style.left = `${caseLeft + offsetX}px`;
        letterContainer.style.top = `${caseTop + offsetY}px`;

        // Ajoute la lettre et l'image de poubelle au puzzle
        puzzleContainer.appendChild(letterContainer);
    });

    // Générer des leurres
    generateDecoyElements();

    // Ajouter le mouvement oscillatoire aux lettres
    animateLetters();
}

// Génère des leurres (lettres ou objets) qui ne font pas partie du mot à trouver
function generateDecoyElements() {
    const decoyCharacters = ['Î', 'R', 'X', 'Z', 'ÎLE', 'RÔCHER']; // Liste des leurres (lettres et objets)
    const numDecoys = 5; // Nombre de leurres à ajouter

    for (let i = 0; i < numDecoys; i++) {
        // Création du conteneur pour le leurre
        const decoyContainer = document.createElement('div');
        decoyContainer.classList.add('decoy-container');
        decoyContainer.style.position = 'absolute';

        // Contenu du leurre
        const decoyElement = document.createElement('div');
        decoyElement.classList.add('decoy');

        // Choisir un leurre aléatoire dans la liste des leurres
        const decoyContent = decoyCharacters[Math.floor(Math.random() * decoyCharacters.length)];
        decoyElement.textContent = decoyContent;

        // Style du leurre (plus petit pour différencier des lettres correctes)
        decoyElement.style.fontSize = '20px'; // Taille plus petite pour les leurres
        decoyElement.style.color = 'black'; // Couleur noire pour différencier visuellement
        decoyElement.style.fontWeight = 'bold';
        decoyElement.style.position = 'relative';

        // Ajouter le leurre dans le conteneur
        decoyContainer.appendChild(decoyElement);

        // Position aléatoire dans le puzzleContainer
        let x = Math.random() * (puzzleContainer.clientWidth - 50); // Ajustement pour rester dans le conteneur
        let y = Math.random() * (puzzleContainer.clientHeight - 50);

        // Position du leurre
        decoyContainer.style.left = `${x}px`;
        decoyContainer.style.top = `${y}px`;

        // Ajouter le leurre au puzzle
        puzzleContainer.appendChild(decoyContainer);

        // Déterminer le type de mouvement
        const moveType = Math.random() > 0.5 ? 'linear' : 'zigzag';

        // Déclencher l'animation pour ce leurre
        animateDecoy(decoyContainer, moveType);
    }
}

// Fonction pour animer les leurres
function animateDecoy(decoy, moveType) {
    let direction = 1; // Variable pour changer de direction
    let posX = parseFloat(decoy.style.left);
    let posY = parseFloat(decoy.style.top);
    const speed = 1 + Math.random(); // Vitesse aléatoire entre 1 et 2

    function moveLinear() {
        // Mouvement linéaire de gauche à droite et de haut en bas
        if (posX + speed > puzzleContainer.clientWidth - 50 || posX < 0) {
            direction *= -1; // Inverse la direction quand on atteint un bord
        }
        posX += direction * speed;

        // Déplacer verticalement dans une plage spécifique
        if (posY + speed > puzzleContainer.clientHeight - 50 || posY < 0) {
            direction *= -1; // Inverse la direction quand on atteint un bord
        }
        posY += direction * speed;

        // Appliquer la nouvelle position
        decoy.style.left = `${posX}px`;
        decoy.style.top = `${posY}px`;

        // Appel récursif pour continuer l'animation
        requestAnimationFrame(moveLinear);
    }

    function moveZigzag() {
        // Mouvement en zigzag
        if (posX + speed > puzzleContainer.clientWidth - 50 || posX < 0) {
            direction *= -1; // Inverse la direction quand on atteint un bord
        }
        posX += direction * speed;

        // Mouvement en zigzag vertical
        posY += Math.sin(posX / 20) * 2;

        // Appliquer la nouvelle position
        decoy.style.left = `${posX}px`;
        decoy.style.top = `${posY}px`;

        // Appel récursif pour continuer l'animation
        requestAnimationFrame(moveZigzag);
    }

    // Lancer l'animation en fonction du type
    if (moveType === 'linear') {
        requestAnimationFrame(moveLinear);
    } else {
        requestAnimationFrame(moveZigzag);
    }
}

// Mise à jour de la fonction checkCollisions pour prendre en compte les leurres
function checkCollisions() {
    if (wrongLetterTouched) {
        return; // Ne permet pas de retoucher une lettre fausse avant de toucher une autre lettre
    }

    const pieceRect = puzzlePiece.getBoundingClientRect();
    const letters = document.querySelectorAll('.random-letter');
    const decoys = document.querySelectorAll('.decoy');

    // Vérifie la collision avec les lettres correctes
    letters.forEach(letter => {
        const letterRect = letter.getBoundingClientRect();

        // Détecte une collision avec la bonne lettre
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

                // Supprime la lettre et la poubelle (le conteneur parent)
                letter.parentElement.remove();

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

    // Vérifie la collision avec les leurres
    decoys.forEach(decoy => {
        const decoyRect = decoy.getBoundingClientRect();

        // Détecte une collision avec un leurre
        if (
            pieceRect.left < decoyRect.right &&
            pieceRect.right > decoyRect.left &&
            pieceRect.top < decoyRect.bottom &&
            pieceRect.bottom > decoyRect.top
        ) {
            // Mauvaise collision avec un leurre
            if (!wrongLetterTouched) {
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

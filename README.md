# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Justification pour le défis : Worst Code Ever et MOVAI CODE 2024

Pour réaliser ces défis voici la listes des processus de déstruction qui on été appliquer :
- Faire des boucles imbriqués inutiles :
L'un des premiers trucs qu'on apprend c'est de faire attention 
avec les boucles pour ne pas les imbriquer inutilement.
C'est pourquoi j'en est mis dans le code évidemment. Vous pouvez
remarquer que nous n'avons pas utiliser de boucles for qui font plus de
2 boucles chacunes pour ne pas que le code soit trop lourd et,
bien que le code soit illisible l'expérience utilisateur n'en est
pas impacter.

- Fonction qui appelle une fonction qui appelle une fonction... :
Nous avons fait en sorte que les fonctions s'appellent les unes les autres
ce qui rend le code très difficile à lire et à comprendre.

- Ne pas utiliser d’écriture simplifiées : Lors de nos enseignements
on nous apprend à utiliser des formes de codes simplifiées tel
que les if sur une seul ligne ou les ternaires. Bien évidemment,
nous avons supprimer ces formes de simplifications pour rendre
le code plus lourd et plus difficile à lire.

- If qui appelle un if qui appelle un if… : Une expression dit
"Avec des si, on pourrait faire rentrer Paris dans une bouteille".
Nous nous sommes donc dit "Avec des si, on pourrait faire rentrer
notre code dans Paris". C'est pourquoi nous avons imbriqué des
if égale à true car nous croyons que c'est vrais.

- Ajout de console.log : Après avoir choisi de délibérement 
rendre le code illisible, nous nous sommes dit que ça serait vraiment
pas agréable et nous avons voulut rajouter le plus de console.log
pour aider les futurs développeurs qui travailleront sur le code.

- Mettre le css dans le js : Nous avons décider de mettre le css
avec le code js. Pourquoi ? Parce que c'est pas agréable de faire
des allers retours entre les fichiers. Autant tout mettre au même
endroit pour que ce soit plus simple.

- Utiliser plusieurs langues pour les noms de fonctions : Notre
équipe possède des membres de différentes nationalité ce qui nous
a amené à la réflection suivante "Est ce que le dev à vraiment
des limites ?". Pour nous la réponse est non. C'est pourquoi
nous avons décidé d'intégrer plusieurs langues pour que chacun
se sente à l'aise.

- Remplacer les valeurs par des variables avec pour valeur la valeur :
Déjà rien que la phrase est compliqué à comprendre. Mais bref,
l'idée était d'utiliser des variables avec pour valeur la 
valeur utiliser pour chaques éléments du css (Exemple : position: inline
devient position: variable avec variable=inline).

- Avoir une histoire dans les variables : Nous avons décidé
d'incorporer une petite histoire de contes de fées dans le code
pour que les développeurs puissent profiter d'une petite pause
à lire une histoire. Pour les flemmards, l'hisoire sera à
la suite.

- Utiliser git de manière très peu efficace : Nous avons décidé
(subis) une utilisation de git très peu efficace (à savoir avoir
des branches inutiles avec des noms incompréhensibles, des personnes qui codes
sur la même branche...) ce qui a eu pour effet que le code fut
"arrangé" une première fois puis nous avons du incorporer une version
propre puis nous l'avons "arrangé" une seconde fois et nous avons
incorporé la version déjà arrangé.

- Variable redondante : Le tiret précédent à eu pour effet de
la duplication de constante et l'implémentation de variable
multiple avec la même valeur.

- Commentaire farfelue : Enfin chacun à eu ses petites
interactions avec les autres par le biais des commentaires.
La légende raconte que d'autres développeurs sont passés
laisser leur commentaire personnel, leur témoignage.

### Histoire de contes de fées

Il était une fois, dans un royaume lointain où les lignes de code étaient plus précieuses que l’or, un développeur réputé pour sa grande expérience. On disait de lui qu’il avait déjà refactorisé mille projets, triomphé de bugs colossaux, et maîtrisé les langages les plus exotiques. Son nom circulait comme une légende parmi les apprentis codeurs, tant il semblait sûr de lui et de son art.

Un jour, un messager royal vint frapper à sa porte. Le roi, souverain du Royaume du Code, souhaitait confier au développeur une mission des plus spéciales : un projet laissé en héritage par d’anciens programmeurs qui, disait-on, avaient utilisé toutes les mauvaises idées de développement possibles. Le code était un véritable grimoire de l’horreur : variables éparpillées, noms incohérents, fonctions dans mille langues, if(true) placés partout, boucles 2x2 totalement inutiles, conditions vides, transitions farfelues… Le messager insista sur l’importance du projet : c’était un honneur, une quête sacrée.

Le développeur, fort de son assurance, hocha la tête. Pour lui, aucun code n’était imbattable. Il prit le parchemin électronique contenant le projet. À peine l’eut-il ouvert qu’il découvrit une forêt dense de variables nommées au hasard, comme `px20Value`, `routeValue`, `translateXValue`, sans lien logique. Des fonctions comme `volumeAudio()` en français côtoyaient `reproducirAudio()` en espagnol, `处理滚动()` en chinois, et `حساباللون()` en arabe. Des if(true){ if(true){} } parsemaient chaque section, ne servant à rien. Il trouva aussi des loops for imbriqués qui tournaient 2x2, sans objectif. Tout le code semblait avoir été écrit par un mage chaotique amoureux du désordre.

D’abord, le développeur rit, certain de pouvoir dompter cet amas de caractères. Il invoqua son éditeur, parcourut chaque fichier, chercha à réorganiser le code. Mais plus il avançait, plus sa confiance s’effritait. Les variables CSS avaient été déplacées dans le désordre, le volume de l’audio était modifié par une fonction anglaise puis reconfirmé par une fonction espagnole. Les couleurs de fond passaient du noir au bleu sans cohérence, et la vidéo se déclenchait avec un playbackRate réglé dans un recoin du code. Le développeur s’énerva, pestant contre les anciens codeurs qui avaient ainsi dispersé leurs boucles inutiles comme des ronces, mêlant if(true) et conditions vides comme une malédiction.

Il tenta de simplifier. Il essaya de retirer les if(true). Mais le code ne fonctionnait plus ! Il voulut regrouper les variables, mais il perdait la trace d’une fonction bizarrement nommée. Les fonctions multilingues semblaient jeter un sort : au lieu d’éclaircir, elles embrouillaient davantage. Le développeur cria, frappa sur son clavier, insulta mentalement ces prédécesseurs. Pour la première fois, il doutait de lui-même.

Puis, à force de s’immerger dans ce chaos, un étrange phénomène se produisit. Le développeur commença à apprécier cette anarchie. Il se surprit à ajouter lui-même des if(true) inutiles, à renommer des variables en `autoValue` sans raison. Il reproduisit les mêmes horreurs, et au lieu de s’en offusquer, il sourit. Comme un alchimiste trouvant enfin l’ingrédient secret, il accepta la laideur. Le code ne devint pas beau, mais il vivait, respirait une folie nouvelle. Dans cette adoption du style désastreux, le développeur se sentit renaître, retrouvant une jeunesse d’esprit. Il codait, désormais, avec la même insouciance et la même joie malade que les anciens développeurs, comme s’il revivait pleinement dans cette symphonie d’erreurs assumées.
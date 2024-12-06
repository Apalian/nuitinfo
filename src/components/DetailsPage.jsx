// src/components/MainPage.js
import React from 'react';
import Header from './Header';
import Section from './Section';

// Import des images
import coeurImg from '../assets/coeur.png';
import poumonsImg from '../assets/poumons.png';
import planctonImg from '../assets/plancton.png';
import corailImg from '../assets/corail.png';
import metabolismImg from '../assets/metabolisme.png';
import decompositionImg from '../assets/decomposition.png';

const DetailsPage = () => {
    const sections = [
        {
            title: "1. Le Cœur et le Système Circulatoire",
            humanSystem: {
                title: "Cœur humain",
                name: "Cœur",
                description: "Pompe centrale qui fait circuler le sang à travers tout le corps.",
            },
            oceanSystem: {
                title: "Courants marins et pompe thermohaline",
                name: "Courants océaniques",
                description: "Les courants océaniques régulent le mouvement des eaux chaudes et froides, assurant la distribution des nutriments et de la chaleur à travers les océans.",
            },
            image: coeurImg,
        },
        {
            title: "2. Les Poumons et les Fonctions d’Échanges Gazeux",
            humanSystem: {
                title: "Poumons humains",
                name: "Poumons",
                description: "Organe responsable des échanges d’oxygène et de dioxyde de carbone entre l’air et le sang.",
            },
            oceanSystem: {
                title: "Photosynthèse et dissolution du CO₂",
                name: "Phytoplancton & Océan",
                description: "Les phytoplanctons absorbent le CO₂ et libèrent de l’oxygène, tandis que l’océan dissout également le CO₂ atmosphérique.",
            },
            image: poumonsImg,
        },
        {
            title: "3. Le Système Immunitaire et le Plancton",
            humanSystem: {
                title: "Système immunitaire humain",
                name: "Système immunitaire",
                description: "Défend l’organisme contre les agents pathogènes et maintient l’équilibre interne.",
            },
            oceanSystem: {
                title: "Plancton",
                name: "Plancton",
                description: "Les planctons régulent l’écosystème marin en contrôlant les populations de bactéries et en participant au cycle des nutriments, agissant comme une première ligne de défense écologique.",
            },
            image: planctonImg,
        },
        {
            title: "4. Le Système Nerveux et le Corail",
            humanSystem: {
                title: "Système nerveux humain",
                name: "Système nerveux",
                description: "Réseau complexe de nerfs et de neurones qui transmettent les signaux entre le cerveau et le reste du corps.",
            },
            oceanSystem: {
                title: "Récifs coralliens",
                name: "Corail",
                description: "Les coraux forment des structures complexes abritant une multitude d’espèces marines, créant un réseau interconnecté semblable à un système nerveux.",
            },
            image: corailImg,
        },
        {
            title: "5. L’Homéostasie et la Salinité et la Température de l’Eau",
            humanSystem: {
                title: "Homéostasie humaine",
                name: "Homéostasie",
                description: "Maintien d’un équilibre interne stable malgré les changements externes.",
            },
            oceanSystem: {
                title: "Salinité et température de l’eau",
                name: "Salinité & Température",
                description: "L’océan régule sa salinité et sa température grâce à divers mécanismes naturels, assurant des conditions stables pour la vie marine.",
            },
        },
        {
            title: "6. Le Métabolisme et les Cycles Biogéochimiques",
            humanSystem: {
                title: "Métabolisme humain",
                name: "Métabolisme",
                description: "Ensemble des réactions chimiques permettant la conversion des nutriments en énergie et la construction des composants cellulaires.",
            },
            oceanSystem: {
                title: "Cycles biogéochimiques océaniques",
                name: "Cycles biogéochimiques",
                description: "Les cycles du carbone, de l’azote et d’autres éléments assurent le recyclage des nutriments, facilitant la croissance et la survie des organismes marins.",
            },
            image: metabolismImg,
        },
        {
            title: "7. Le Système Excréteur et les Zones de Décomposition",
            humanSystem: {
                title: "Système excréteur humain",
                name: "Système excréteur",
                description: "Élimine les déchets métaboliques du corps.",
            },
            oceanSystem: {
                title: "Zones de décomposition océaniques",
                name: "Décomposition",
                description: "Les zones où se décomposent les matières organiques marines éliminent les déchets et recyclent les nutriments, maintenant ainsi la propreté de l’écosystème marin.",
            },
            image: decompositionImg,
        },
    ];

    return (
        <div>
            <Header />
            {sections.map((section, index) => (
                <Section
                    key={index}
                    title={section.title}
                    humanSystem={section.humanSystem}
                    oceanSystem={section.oceanSystem}
                    image={section.image}
                />
            ))}
        </div>
    );
};

export default DetailsPage;

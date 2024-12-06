// src/components/Section.js
import React from 'react';
import './Section.css'; // Import du fichier CSS

const Section = ({ title, humanSystem, oceanSystem, image1, image2 }) => (
    <section className="section">
        <div className="container">
            <h2>{title}</h2>
            <div className="row align-items-center">
                {image1 && (
                    <div className="col-md-6">
                        <img src={image1} alt={title} className="img-fluid" />
                    </div>
                )}
                <div className={`col-md-${image1 ? '6' : '12'}`}>
                    <h4>{humanSystem.title}</h4>
                    <p><strong>{humanSystem.name} :</strong> {humanSystem.description}</p>
                    <h4>{oceanSystem.title}</h4>
                    <p><strong>{oceanSystem.name} :</strong> {oceanSystem.description}</p>
                </div>
                {image2 && (
                    <div className="col-md-6">
                        <img src={image2} alt={title} className="img-fluid" />
                    </div>
                )}
            </div>
        </div>
    </section>
);

export default Section;

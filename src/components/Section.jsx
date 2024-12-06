// src/components/Section.js
import React from 'react';
import './Section.css'; // Import du fichier CSS

const Section = ({ title, humanSystem, oceanSystem, image }) => (
    <section className="section">
        <div className="container">
            <h2>{title}</h2>
            <div className="row align-items-center">
                {image && (
                    <div className="col-md-6">
                        <img src={image} alt={title} className="img-fluid" />
                    </div>
                )}
                <div className={`col-md-${image ? '6' : '12'}`}>
                    <h4>{humanSystem.title}</h4>
                    <p><strong>{humanSystem.name} :</strong> {humanSystem.description}</p>
                    <h4>{oceanSystem.title}</h4>
                    <p><strong>{oceanSystem.name} :</strong> {oceanSystem.description}</p>
                </div>
            </div>
        </div>
    </section>
);

export default Section;

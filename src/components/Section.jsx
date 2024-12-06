// src/components/Section.js
import React from 'react';

const Section = ({ title, humanSystem, oceanSystem, image }) => (
    <section className="my-5">
        <div className="container">
            <h2>{title}</h2>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={image} alt={title} className="img-fluid" />
                </div>
                <div className="col-md-6">
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

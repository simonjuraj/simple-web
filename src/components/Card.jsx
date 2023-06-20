import React from 'react'
import { Link } from "react-router-dom"

const Card = ({ src, alt, title, href }) => {
    return (
        <div class="card shadow-lg border-0">
            <img class="card-img-top" src={src} alt={alt}/>
            <div class="card-body">
                <h6 class="card-title text-center mb-0">{title}</h6>
                <Link to={href} class="stretched-link"></Link>
            </div>
        </div>
    );
};

export default Card; 
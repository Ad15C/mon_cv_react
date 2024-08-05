import React, { useEffect } from "react";
import '../Components/Header.css'
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    // État pour garder la trace de l'élément de menu actif
    const [activeItem, setActiveItem] = useState('home');
  
    // Fonction pour gérer le clic sur un élément du menu
    const handleItemClick = (name) => {
        setActiveItem(name);
    };

    return(
       <header className="header-custom">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">

                <a className="navbar-brand fw-bold text-white" href="Home">John Doe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link text-uppercase ${activeItem === 'accueil' ? 'active' : 'text-white'}`}
                                to="/home"
                                 onClick={() => handleItemClick('accueil')}>
                                 Accueil
                           </Link>
                        </li> 
                        <li className="nav-item">
                            <Link className={`nav-link text-uppercase ${activeItem === 'services' ? 'active' : 'text-white'}`}
                                to="/Services"
                                 onClick={() => handleItemClick('services')}>
                                 Services
                           </Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link text-uppercase ${activeItem === 'realisations' ? 'active' : 'text-white'}`}
                                to="/Realisations"
                                 onClick={() => handleItemClick('realisations')}>
                                 Réalisations
                           </Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link text-uppercase ${activeItem === 'blog' ? 'active' : 'text-white'}`}
                                to="/Blog"
                                 onClick={() => handleItemClick('blog')}>
                                 Blog
                           </Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link text-uppercase ${activeItem === 'contact' ? 'active' : 'text-white'}`}
                                to="/MeContacter"
                                 onClick={() => handleItemClick('contact')}>
                                 Me Contacter
                           </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       </header>
       
    )
};

export default Header;
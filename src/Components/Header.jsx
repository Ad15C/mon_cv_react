import React from "react";
import '../Components/Header.css'
import Home from "../Pages/Home";
import Realisations from "../Pages/Realisations";
import Services from "../Pages/Services";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import { useState } from "react";

const Header = () => {
    // État pour garder la trace de l'élément de menu actif
    const [activeItem, setActiveItem] = useState('home');
  
    // Fonction pour gérer le clic sur un élément de menu
    const handleItemClick = (name) => {
      setActiveItem(name);
    };

    return(
       <header className="header-custom">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">

                <a className="navbar-brand fw-bold text-white" href="Home">ADELINE CANON</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                            <a className={`nav-link text-uppercase text-white ${activeItem === 'accueil' ? 'active' : ''}`}
                            href="Home"
                            onClick={()=> handleItemClick(Home)}>Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link text-uppercase text-white ${activeItem === 'services' ? 'active' : ''}`} 
                            href="/Services"
                            onClick={()=> handleItemClick(Services)}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link text-uppercase text-white ${activeItem === 'realisations' ? 'active' : ''}`}
                            href="/Realisations"
                            onClick={()=> handleItemClick(Realisations)}>Réalisations</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link text-uppercase text-white ${activeItem === 'blog' ? 'active' : ''}`}  
                            href="/Blog"
                            onClick={()=> handleItemClick(Blog)}>Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link text-uppercase text-white ${activeItem === 'contact' ? 'active' : ''}`}
                            href="/MeContacter"
                            onClick={()=> handleItemClick(Contact)}>Me Contacter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       </header>
       
    )
};

export default Header;
import React from "react";
import '../Components/Header.css'

function Header() {
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
                            <a className="nav-link text-uppercase text-white active" aria-current="page" href="Home">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase text-white" href="/Services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase text-white" href="/Realisations">Réalisations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase text-white" href="/Blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase text-white" href="/MeContacter">Me Contacter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       </header>
    )
};

export default Header;
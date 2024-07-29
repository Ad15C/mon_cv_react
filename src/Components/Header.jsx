import React from "react";
import '../Components/Header.css'

function Header() {
    return(
       <header className="header-custom">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">

                <a class="navbar-brand fw-bold text-white" href="#">ADELINE CANON</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-uppercase text-white active" aria-current="page" href="#">Accueil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-uppercase text-white" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-uppercase text-white" href="#">Réalisations</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-uppercase text-white" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-uppercase text-white" href="#">Me Contacter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       </header>
    )
};

export default Header;
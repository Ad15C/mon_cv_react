import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Components/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="text-black">
        <div className="container">
            <div className="row py-4">
                <div className="col-md-3 col-sm-6 mb-3">
                <address>
                    <h6 className="fw-bold text-start">John Doe</h6>
                    <p className="text-start lh-1">40 rue Laure Debiold</p>
                    <p className="text-start lh-1">69009 Lyon, France</p>
                    <p className="text-start lh-1">Téléphone: 06 20 30 40 50</p>
                </address>
                <div className="d-flex justify-content-evenly ps-0 m-0">
                    <Link to="Profile" className="text-black">
                    <FontAwesomeIcon icon={faGithub}  className="text-black"/>
                    </Link>                 
                   
                    <a href="https://twitter.com" className="text-white" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitterSquare} className="text-black"/>
                    </a>
                    
                    <a href="https://linkedin.com" className="text-white" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedinIn} className="text-black"/>
                    </a>
                </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-3">
                <h6 className="fw-bold text-start">Liens utiles</h6>
                    <ul className="list-styled mb-0 text-start">
                        <li>
                            <Link to="Home" className="text-black">Accueil</Link>
                        </li>
                        <li>
                            <Link to="#" className="text-black">A Propos</Link>
                        </li>
                        <li>
                            <Link to="Services" className="text-black">Services</Link>
                        </li>
                        <li>
                            <Link to="MeContacter" className="text-black">Me contacter</Link>
                        </li>
                        <li>
                            <Link to="Mentions" className="text-black">Mentions Légales</Link>
                        </li>
                    </ul>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
                <h6 className="fw-bold text-start">Mes dernières réalisations</h6>
                    <ul className="list-styled mb-0 text-start">
                        <li>
                            <a class="text-decoration-none text-black" href="Realisations">Fresh Food</a>
                        </li>
                        <li>
                            <a class="text-decoration-none text-black" href="Realisations">Restaurant Akira</a>
                        </li>
                        <li>
                            <a class="text-decoration-none text-black" href="Realisations">Espace bien-être</a>
                        </li>
                    </ul>

            </div>
            <div className="col-md-3 col-sm-6 mb-3">
                <h6 className="fw-bold text-start">Mes derniers articles</h6>
                    <ul className="list-styled mb-0 text-start">
                        <li>
                            <a className="text-decoration-none text-black" href="Blog">Coder son site en HTML/CSS</a>
                        </li>
                        <li>
                            <a className="text-decoration-none text-black" href="Blog">Vendre ses produits sur le web</a>
                        </li>
                        <li>
                            <a className="text-decoration-none text-black" href="Blog">Se positionner sur Google</a>
                        </li>
                    </ul>
            </div> 
        </div>
        <div className="text-center py-2">
            <div className="copyright text-white">
                <small className="m-0">&copy; Designed by John Doe</small>
            </div>
        </div>
    </div>
    </footer> 
  );
}

export default Footer;
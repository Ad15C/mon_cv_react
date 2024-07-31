import React from "react";
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
                    <p className="text-start">40 rue Laure Debiold</p>
                    <p className="text-start">69009 Lyon, France</p>
                    <p className="text-start">Téléphone: 06 20 30 40 50</p>
                </address>
                <div className="d-flex justify-content-evenly">
                    <a href="https://github.com" className="text-white" aria-label="Github" id="favicon">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://twitter.com" className="text-white" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>
                    <a href="https://linkedin.com" className="text-white" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-3">
                <h6 className="fw-bold text-start">Liens utiles</h6>
                    <ul className="list-styled mb-0 text-start">
                        <li>
                            <a class="text-decoration-none text-black " href="#!">Accueil</a>
                        </li>
                        <li>
                            <a class="text-decoration-none text-black " href="#!">A Propos</a>
                        </li>
                        <li>
                            <a class="text-decoration-none text-black" href="#!">Services</a>
                        </li>
                        <li>
                            <a class="text-decoration-none text-black" href="#!">Me contacter</a>
                        </li>
                        <li>
                            <a class="text-decoration-none text-black" href="#!">Mentions légales</a>
                        </li>
                    </ul>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
                <h6 className="fw-bold text-start">Mes dernières réalisations</h6>
                    <ul className="list-styled mb-0 text-start">
                        <li>
                            <a class="text-decoration-none text-black" href="#!">Fresh Food</a>
                        </li>
                        <li>
                            <a class="text-decoration-none text-black" href="#!">Restaurant Akira</a>
                        </li>
                        <li>
                            <a class="text-decoration-none text-black" href="#!">Espace bien-être</a>
                        </li>
                    </ul>

            </div>
            <div className="col-md-3 col-sm-6 mb-3">
                <h6 className="fw-bold text-start">Mes derniers articles</h6>
                    <ul className="list-styled mb-0 text-start">
                        <li>
                            <a className="text-decoration-none text-black" href="#!">Coder son site en HTML/CSS</a>
                        </li>
                        <li>
                            <a className="text-decoration-none text-black" href="#!">Vendre ses produits sur le web</a>
                        </li>
                        <li>
                            <a className="text-decoration-none text-black" href="#!">Se positionner sur Google</a>
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
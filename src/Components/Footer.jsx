import React from "react";
import '../Components/Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer() {
  return (
    <footer className="w-100 py-4 flex-wrap fixed-bottom ">
        <div className="container d-flex justify-content-evenly p-4">
            <div className="row gx-5 ">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <div className="adress lh-1">
                        <h6 className="fw-bold text-start">John Doe</h6>
                        <p className="text-start">40 rue Laure Debiold</p>
                        <p className="text-start">69009 Lyon, France</p>
                        <p className="text-start">Téléphone: 06 20 30 40 50</p>
                    </div>
                    <div className="row mt-3 ">
                        <div className="col-Github">
                        <i class="fa-brands fa-square-github" title="Logo Github"></i>
                        </div>
                        <div className="col-Twitter">
                            <i class="fa-brands fa-square-twitter" title="Logo Twitter"></i>
                        </div>
                        <div className="col-Linkedin">
                            <i class="fa-brands fa-linkedin" title="Logo Linkedin"></i>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h6 className="fw-bold text-start">Liens utiles</h6>
                        <ul className="list-unstyled mb-0 text-start">
                        <li>
                            <a class="text-decoration-none text-black" href="#!">Accueil</a>
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

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h6 className="fw-bold text-start">Mes dernières réalisations</h6>
                    <ul className="list-unstyled mb-0 text-start">
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

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h6 className="fw-bold text-start">Mes derniers articles</h6>
                        <ul className="list-unstyled mb-0 text-start">
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
        </div>

      
        <div className="container text-center text-white ">
            <div className="copyright">
              <p>&copy; Designed by John Doe</p>
            </div>
      
        </div>
    </footer> 
  )
};

export default Footer;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons/faDesktop";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <main className="Services">
            <div class="banner-fixed-top">
                <div class="banner">
                </div>
            </div>
            <div className="container">
            <h1 className="text-uppercase mt-5">Mon offre de services</h1>
            <p class="fw-semibold">Voici les prestations sur lesquelles je peux intervenir.</p>
            <hr className="titles-underline position-absolute top-5 start-50 translate-middle"></hr>
        
            <div class="row row-cols-1 row-cols-md-3 g-4 mb-5 mt-5" >
                <div class="grid gap-3">

                    <div class="card h-100 .bg-white ">
                        <div class="card-body mt-5 mb-5">
                        <FontAwesomeIcon icon= {faDesktop} style={{color:"#2379fb"}} id="desktop"/>
                            <h5 class="card-title text-uppercase fw-bold">UX Design</h5>
                                <p class="card-text text-center">
                                    L'<strong>UX Design</strong> est une méthode de conception centrée 
                                    sur l'utilisateur. Son but est d'offrir une expérience de navigation
                                    optimale à l'internaute.
                                </p>
                        </div>
                    </div>
                </div>
                
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body mt-5 mb-5">
                        <FontAwesomeIcon icon= {faFileCode} style={{color:"#2379fb"}} id="FileCode"/>
                            <h5 class="card-title text-uppercase fw-bold">Développement Web</h5>
                                <p class="card-text text-center">Le <strong>développement de sites web</strong>
                                 repose sur l'utilisation des langages <span class="underline">HTML, CSS,</span> JavaScript et <span class="underline">PHP</span>.
                                </p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <div class="card-body mt-5 mb-5">
                            <FontAwesomeIcon icon={faMagnifyingGlassDollar} style={{color:"#2379fb"}} id="Glass"/>
                            <h5 class="card-title text-uppercase fw-bold">Référencement</h5>
                                <p class="card-text text-center">Le <strong>référencement naturel d'un site</strong>, aussi appelé <span class="underline">SEO</span>,
                                consiste à mettre des techniques en oeuvre pour améliorer sa position dans les moteurs de recherche.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </main>
    );
}

export default Services;
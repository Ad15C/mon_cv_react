import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons/faDesktop";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <main className="Services">
            <div className="banner-fixed-top">
                <div className="banner"></div>
            </div>
                <div className="container">
                    <h1 className="text-uppercase mt-5">Mon offre de services</h1>
                        <p className="fw-semibold">Voici les prestations sur lesquelles je peux intervenir.</p>
                            <hr className="titles-underline position-absolute top-5 start-50 translate-middle"></hr>
        
                                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5" >
                                    <div className="col mb-5 pb-5" id="services"> 
                                        <div className="grid gap-3">
                                            <div className="card h-100 .bg-white border rounded shadow-sm">
                                                <div className="card-body mt-5 mb-5">
                                                    <FontAwesomeIcon 
                                                        icon= {faDesktop} 
                                                        style={{color:"#2379fb"}} 
                                                        id="desktop"
                                                    />
                                                    <h5 className="card-title text-uppercase fw-bold mt-3">UX Design</h5>
                                                        <p className="card-text text-center mt-3">
                                                            L'<strong>UX Design</strong> est une méthode de conception centrée 
                                                            sur l'utilisateur. Son but est d'offrir une expérience de navigation
                                                            optimale à l'internaute.
                                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                
                                    <div className="col mb-5 pb-5" id="services">
                                        <div className="card h-100 .bg-white border rounded shadow-sm">
                                                <div className="card-body mt-5 mb-5">
                                                    <FontAwesomeIcon 
                                                        icon= {faFileCode} 
                                                        style={{color:"#2379fb"}} 
                                                        id="FileCode"
                                                    />
                                                    <h5 className="card-title text-uppercase fw-bold mt-3">Développement Web</h5>
                                                            <p className="card-text text-center mt-3">Le <strong>développement de sites web</strong>
                                                            repose sur l'utilisation des langages <span className="underline">HTML, CSS,</span>
                                                            JavaScript et <span className="underline">PHP</span>.
                                                            </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col mb-5 pb-5" id="services">
                                            <div className="card h-100 .bg-white border rounded shadow-sm">
                                                <div className="card-body mt-5 mb-5">
                                                    <FontAwesomeIcon 
                                                        icon={faMagnifyingGlassDollar} 
                                                        style={{color:"#2379fb"}} 
                                                        id="Glass"
                                                    />
                                                    <h5 className="card-title text-uppercase fw-bold mt-3">Référencement</h5>
                                                        <p className="card-text text-center mt-3">Le <strong>référencement naturel d'un site</strong>, 
                                                        aussi appelé <span className="underline">SEO</span>, consiste à mettre des techniques en 
                                                        oeuvre pour améliorer sa position dans les moteurs de recherche.
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
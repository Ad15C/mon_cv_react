import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faLocationDot, faMobile } from "@fortawesome/free-solid-svg-icons";


const Mentions = () => {
    return (
        <main className="mentions">
            <div className="container mb-5">
                <h1 className="text-uppercase mt-5 mb-5" id="title">Mentions légales</h1>
                <hr className="titles-underline position-relative top-5 start-50 translate-middle mb-5"></hr>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="container-mentions ">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed text-primary" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#flush-collapseOne"                                             
                                        aria-expanded="false" 
                                        aria-controls="flush-collapseOne">
                                        Editeur du site
                                    </button>
                                </h2>
                                    <div 
                                        id="flush-collapseOne" 
                                        className="accordion-collapse collapse" 
                                        data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body ">
                                                <h4 className="text-start fw-bold ms-1 mt-1">John Doe</h4>
                                                    <address className="text-start p-1 lh-2 mb-0">                                                          
                                                        <p className="mb-0 fw-semibold">
                                                            <FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold
                                                            <br />69009 Lyon, France</p>
                                                        <p className="text-primary mb-0 fw-semibold fs-6">
                                                            <FontAwesomeIcon icon={faMobile}  
                                                            className=" text-black"/> 06 20 30 40 50 </p>
                                                        <p className="text-primary mb-0 fw-semibold fs-6">
                                                            <FontAwesomeIcon icon={faEnvelope}
                                                            className="text-black"/> john.doe@gmail.com
                                                        </p>
                                                    </address>
                                            </div>
                                    </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed text-primary" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#flush-collapseTwo" 
                                        aria-expanded="false" 
                                        aria-controls="flush-collapseTwo">
                                        Hébergeur
                                    </button>
                                </h2>
                                    <div 
                                        id="flush-collapseTwo" 
                                        className="accordion-collapse collapse" 
                                        data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body text-start p-1 lh-2 mt-2 mb-3">
                                                <h4 className="ms-2 fw-bold mt-2">Always Data</h4>
                                                <address className=" ms-2 lh-1 fw-semibold fs-6">
                                                    91 rue du Faubourg Saint Honoré
                                                    <br />
                                                    75008 Paris
                                                </address>
                                                    <p className="text-primary mb-0 ms-2 fw-semibold ">
                                                        <FontAwesomeIcon icon={faGlobe} className="text-black"/> 
                                                            www.alwaysdata.com
                                                    </p>
                                            </div>
                                    </div>
                            </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button class="accordion-button collapsed text-primary" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#flush-collapseThree" 
                                    aria-expanded="false" 
                                    aria-controls="flush-collapseThree">
                                    Crédits
                                </button>
                            </h2>
                                <div 
                                    id="flush-collapseThree" 
                                    className="accordion-collapse collapse" 
                                    data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-start p-1 lh-2 mt-3 mb-2">
                                            <h4 className="ms-2 fw-bold">Crédits</h4>
                                                <p className="ms-2 lh-lg fw-semibold">Site développé par John Doe, étudiant du CEF.<br></br>
                                                    Les images libres de droit sont issues du site <a class="link-opacity-100 link-underline-light fw-bold" href="https://pixabay.com/">Pixabay</a>.
                                                </p>
                                        </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    </main>
    );
}

export default Mentions;
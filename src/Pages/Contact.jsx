import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMobile } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <main className="contact ">
            <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" id="img_bckgrd"
                style={{
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2020/01/06/08/25/letters-4744854_1280.jpg',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'}}>
            
            <div className=" container bg-white mt-2">
                <h1 className="text-uppercase mt-5">Me contacter</h1>
                <p class="fw-semibold">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                <hr className="titles-underline position-absolute top-5 start-50 translate-middle mt-2"></hr>
                <div className="container bg-white p-5 rounded shadow-lg mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h3>Formulaire de contact</h3>
                            <hr className="form-underline "></hr>
                        <form>
                            <div className="mb-3 mt-5">
                                <input type="text" 
                                className="form-control"
                                id="name" 
                                placeholder="Votre nom" required />
                            </div>
                            <div className="mb-3">
                                <input type="email"
                                className="form-control"
                                id="email"
                                placeholder="Votre adresse email" required />
                            </div>
                            <div className="mb-3">
                                <input type="tel"
                                className="form-control"
                                id="phone"
                                placeholder="Votre numéro de téléphone"
                                pattern="[0-9]{10}" // Exemple de pattern pour un numéro français à 10 chiffres
                                required />
                            </div>
                            <div className="mb-3">
                                <input type="text"
                                className="form-control"
                                id="subject"
                                placeholder="Sujet"
                                required />
                            </div>
                            <div className="mb-3">
                                <textarea
                                className="form-control"
                                id="message"
                                rows="4"
                                placeholder="Votre message"
                                required ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Envoyer</button>
                        </form>
                    </div>
                    <div className="col-md-6 ">
                        <h3>Mes coordonnées</h3>
                        <hr className="form-underline "></hr>
                        <p class="text-start mt-5 ms-2">
                            <FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold, 69009 Lyon, France
                        </p>
                        <p class="text-start ms-2">
                            <FontAwesomeIcon icon={faMobile} /> 06 20 30 40 50
                        </p>
           
                        <div className="map-container rounded">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.254304924349!2d4.796403976789839!3d45.778661971080915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1722591517858!5m2!1sfr!2sfr" 
                            width="100%" 
                            height="300" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </main>
    );
}

export default Contact;
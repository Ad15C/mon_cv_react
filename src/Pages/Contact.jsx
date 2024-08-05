import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMobile } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:"",
    });

    const [formErrors, setFormsErrors] = useState({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:"",
    });

    //Validation des champs
    const validateForm = () => {
        let errors = {};
        let isValid = true;
        
        //Faire en sorte qu'il n'y ai pas d'espace
        if (!formData.name.trim()) {
            errors.name = "Veuillez entrer votre nom";
            isValid = false;
        }

        //Faire en sorte que l'email corresponde au bon format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email.match(emailPattern)) {
            errors.email = "Veuillez saisir une adresse email valide";
            isValid = false;
        }

        //Faire en sorte que le téléphone comprenne bien 10 chiffres
        const phonePattern = /^[0-9]{10}$/;
        if (!formData.phone.match(phonePattern)) {
            errors.phone = "Veuillez saisir un numéro de téléphone à 10 chiffres.";
            isValid = false;
        }

        //Faire en sorte qu'il n'y ai pas d'espace
        if (!formData.subject.trim()) {
            errors.subject = "Veuillez indiquer le sujet de votre message.";
            isValid = false;
        }

        //Faire en sorte qu'il n'y ai pas d'espace
        if (!formData.message.trim()) {
            errors.message = "Veuillez entrer votre message.";
            isValid = false;
        }
        //Si tout est bon, le formulaire sera envoyé, sinon il y aura un message d'errerur
        setFormsErrors(errors);
        return isValid;
    };
    
    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData({ ...formData, [id]:value});
    };

    //Soumission du formulaire
    const handleSubmit = (e) => {

         //Empêche le rechargement de la page
        e.preventDefault();

        if (validateForm()) {

            //Soumission des données
            console.log ("Le Formulaire a bien été envoyé", formData);

            //Réinitialiser le formulaire après la soumission
            setFormData({
                name:"",
                email:"",
                phone:"",
                subject:"",
                message:"",
            });
            
            setFormsErrors({});
        }
    };


    return (
        <main className="contact ">
            <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" id="img_bckgrd"
                style={{
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2020/01/06/08/25/letters-4744854_1280.jpg',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            
            <div className=" container bg-white mt-2">
                <h1 className="text-uppercase mt-5" id="title">Me contacter</h1>
                <p className="fw-semibold">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                <hr className="titles-underline position-absolute top-5 start-50 translate-middle mt-2"></hr>
                <div className="container bg-white p-5 rounded shadow-lg mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h3>Formulaire de contact</h3>
                            <hr className="form-underline "></hr>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 mt-5">
                                <input 
                                    type="text" 
                                    className={`form-control ${formErrors.name && "is-invalid"}`}
                                    id="name" 
                                    placeholder="Votre nom" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required />
                                    {formErrors.name && (
                                        <div className="invalid-feedback">
                                            {formErrors.name}
                                        </div>
                                    )}
                            </div>
                            <div className="mb-3">
                                <input 
                                    type="email"
                                    className={`form-control ${formErrors.email && "is-invalid"}`}
                                    id="email"
                                    placeholder="Votre adresse email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required />
                                    {formErrors.email && (
                                        <div className="invalid-feedback">
                                            {formErrors.email}
                                        </div>
                                    )}
                            </div>
                            <div className="mb-3">
                                <input 
                                    type="tel"
                                    className={`form-control ${formErrors.phone && "is-invalid"}`}
                                    id="phone"
                                    placeholder="Votre numéro de téléphone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required />
                                     {formErrors.phone && (
                                        <div className="invalid-feedback">
                                            {formErrors.phone}
                                        </div>
                                    )}
                            </div>
                            <div className="mb-3">
                                <input 
                                type="text"
                                className={`form-control ${formErrors.subject && "is-invalid"}`}
                                id="subject"
                                placeholder="Sujet"
                                value={formData.subject}
                                onChange={handleChange}
                                required />
                                {formErrors.subject && (
                                   <div className="invalid-feedback">
                                        {formErrors.subject}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <textarea
                                className={`form-control ${formErrors.message && "is-invalid"}`}
                                id="message"
                                rows="4"
                                placeholder="Votre message"
                                value={formData.message}
                                onChange={handleChange}
                                required ></textarea>
                                {formErrors.message && (
                                    <div className="invalid-feedback">
                                        {formErrors.message}
                                    </div>
                                )}
                            </div>
                            <button type="submit" className="btn btn-primary">Envoyer</button>
                        </form>
                    </div>

                    <div className="col-md-6 ">
                        <h3>Mes coordonnées</h3>
                        <hr className="form-underline "></hr>
                        <p className="text-start mt-5 ms-2">
                            <FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold, 69009 Lyon, France
                        </p>
                        <p className="text-start ms-2">
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
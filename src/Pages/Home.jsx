import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";

const Home = () => {
    return (
        <section className="presentation">
            <div className="background-image">
                <div className="container text-center text-white">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center">Bonjour, je suis John Doe</h1>
                            <h2 className="text-center">Développeur web full stack</h2>
                            <a href="#about">
                                <button className="mt-4  btn btn-primary"> En savoir plus</button>
                            </a>
                        </div>
                    </div>
                </div>
   
            </div>
      
            <div class="container border border-3 py-5 mt-5 mb-5 border-opacity-15 rounded">
                <div class="row">
                    <div class="col-md-5 d-flex flex-column justify-content-start">
                        <h3 id="about" className="text-start">A Propos</h3>
                        <hr className="title-underline "></hr>
                        <p className="text-start lh-base">Passionné par l'informatique et les nouvelles technologies, 
                            j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF.
                            Au cours de cette formation, j'ai pu acquérir des bases solides pour 
                            travailler dans le domaine du <strong>développement web</strong>.<br></br>
                        </p>
                        <p className="text-start lh-base">
                            Basé à Lyon, je suis en recherche d'alternance au sein d'une agence digitale 
                            pour consolider ma formation de <strong>développeur web full stack</strong>. <br></br>
                        </p>
                        <p className="text-start lh-base">J'accorde une attention particulière à la qualité du code que 
                            j'écris et je respecte les bonnes pratiques du web.</p>
                        </div>
                        
                    <div class="col-md-5 d-flex flex-column justify-content-center">
                        <div className="text-center mb-4">
                            <img src="a_propos.jpg" alt="Photo de Profil de John Doe" id="about-img"></img>
                        </div>
                        
                        <div className="Competences">
                            <h3 className="text-start">Mes Compétences</h3>
                            <div class="progress-secction-1 mb-3 pt-2">
                                <h6 className="text-start">HTML 5</h6></div>
                                <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-danger" style={{ width: '90%' }}>90%</div>
                                </div>
                            <div class="progress-secction-2 mb-3 pt-2">
                                <h6 className="text-start">CSS3</h6>
                                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-info text-dark" style={{ width: '80%' }}>80%</div>
                                </div>
                            </div>
                            <div class="progress-secction-3 mb-3 pt-2">
                                <h6 className="text-start">JAVASCRIPT</h6>
                                    <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-warning text-dark" style={{ width: '70%' }} > 70%</div>
                            </div>
                            <div class="progress-secction-3 mb-3 pt-2">
                                <h6 className="text-start">PHP</h6>
                                    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-success" style={{ width: '60%' }} >60%</div>
                                </div>
                            </div>
                            <div class="progress-secction-3 mb-3 pt-2">
                                <h6 className="text-start">REACT</h6>
                                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-basic"  style={{ width: '50%' }} >50%</div>
                                </div> 
                            </div>                     
                    
                        </div>
                           
                    </div>
                </div>
            </div>
        </div>
    </section>
           
    );
}

export default Home;
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";

const Home = () => {
    return (
        <section className="presentation">
            <div className="card mb-3">
                <img src="public\developpeur_web.jpg" class="card-img-top" alt="Image d'un développeur web"></img>
                    <div class="card-body">
                        <h1 class="card-title">Bonjour, je suis John Doe</h1>
                        <h2 class="card-second-title">Développeur web full stack</h2>
                        <button>En savoir plus</button>
                    </div>
            </div>
            <div class="container border border-3 p-5 border-opacity-15 rounded">
                <div class="row">
                    <div class="col">
                        <h4>A Propos</h4>
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
                    <div class="col d-flex">
                        <img></img>
                        <div className="Competences">
                            <h4>Mes Compétences</h4>
                            <div class="progress-secction-1">
                                <div className="progress-title">HTML 5</div>
                                    <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-danger w-90" >90%</div>
                                    </div>
                            </div>
                            <div class="progress-secction-2">
                                <div className="progress-title">CSS3</div>
                                    <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-info text-dark w-80" >80%</div>
                                    </div>
                            </div>
                            <div class="progress-secction-3">
                                <div className="progress-title">JAVASCRIPT</div>
                                    <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-warning text-dark w-70" > 70%</div>
                            </div>
                            <div class="progress-secction-3">
                                <div className="progress-title">PHP</div>
                                    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-success w-60" >60%</div>
                                </div>
                            </div>
                            <div class="progress-secction-3">
                                <div className="progress-title">REACT</div>
                                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-basic" >50%</div>
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
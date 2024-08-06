import React from "react";

const Home = () => {
    return (
        <section className="presentation">
            <div className="background-image">
                <div className="container text-center text-white">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center text-white fs-1" id="presentation-title">Bonjour, je suis John Doe</h1>
                            <h2 className="text-center text-white fs-2" id="title-2">Développeur web full stack</h2>
                            <a href="#about">
                                <button className="mt-4  btn btn-primary"> En savoir plus</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
      
            <div className="container col-lg-10 col-md- 12 border border-3 py-5 mt-5 mb-5 border-opacity-15 rounded">
                <div className="row ">
                    <div className="col-md-6 d-flex flex-column justify-content-start">
                        <h3 id="about" className="text-start">A Propos</h3>
                        <hr className="title-underline "></hr>
                        <p className="text-start lh-base">
                            Passionné par l'informatique et les nouvelles technologies, 
                            j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF.
                            Au cours de cette formation, j'ai pu acquérir des bases solides pour 
                            travailler dans le domaine du <strong>développement web</strong>.<br></br>
                        </p>
                        <p className="text-start lh-base">
                            Basé à Lyon, je suis en recherche d'alternance au sein d'une agence digitale 
                            pour consolider ma formation de <strong>développeur web full stack</strong>. <br></br>
                        </p>
                        <p className="text-start lh-base">
                            J'accorde une attention particulière à la qualité du code que 
                            j'écris et je respecte les bonnes pratiques du web.</p>
                        </div>
                        
                    <div class="col-md-6 d-flex flex-column justify-content-center">
                        <div className="text-center mb-4">
                            <img src="a_propos.jpg" 
                            alt="Photo de Profil de John Doe" 
                            id="about-img"
                            style={{ maxWidth: "100%", height: "auto", borderRadius: "5px" }}>
                            </img>
                        </div>
                        
                        <div className="Competences">
                            <h3 className="text-start">Mes Compétences</h3>
                            <div class="progress-secction-1 mb-3 pt-2">
                                <h6 className="text-start">HTML 5</h6></div>
                                <div 
                                    className="progress" 
                                    role="progressbar" 
                                    aria-label="HTML 5" 
                                    aria-valuenow="90" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100">
                                        <div 
                                            className="progress-bar bg-danger" 
                                            style={{ width: '90%' }}>90%
                                        </div>
                                </div>
                            <div className="progress-secction-2 mb-3 pt-2">
                                <h6 className="text-start">CSS 3</h6>
                                <div 
                                    className="progress" 
                                    role="progressbar" 
                                    aria-label="CSS 3" 
                                    aria-valuenow="80"
                                    aria-valuemin="0" 
                                    aria-valuemax="100">
                                        <div 
                                            className="progress-bar bg-info text-dark" 
                                            style={{ width: '80%' }}>80%
                                        </div>
                                </div>
                            </div>
                            <div className="progress-secction-3 mb-3 pt-2">
                                <h6 className="text-start">JAVASCRIPT</h6>
                                    <div 
                                        className="progress" 
                                        role="progressbar" 
                                        aria-label="JavaScript" 
                                        aria-valuenow="70" 
                                        aria-valuemin="0" 
                                        aria-valuemax="100">
                                            <div 
                                                className="progress-bar bg-warning text-dark"
                                                style={{ width: '70%' }}> 70%
                                            </div>
                                    </div>
                            </div>
                            <div className="progress-secction-3 mb-3 pt-2">
                                <h6 className="text-start">PHP</h6>
                                    <div 
                                        className="progress" 
                                        role="progressbar" 
                                        aria-label="PHP" 
                                        aria-valuenow="60" 
                                        aria-valuemin="0" 
                                        aria-valuemax="100">
                                            <div 
                                                className="progress-bar bg-success" 
                                                style={{ width: '60%' }}>60%
                                            </div>
                                    </div>
                            </div>
                            <div className="progress-secction-3 mb-3 pt-2">
                                <h6 className="text-start">REACT</h6>
                                    <div 
                                        className="progress" 
                                        role="progressbar" 
                                        aria-label="React" 
                                        aria-valuenow="50" 
                                        aria-valuemin="0" 
                                        aria-valuemax="100">
                                            <div 
                                                className="progress-bar bg-basic"  
                                                style={{ width: '50%' }}>50%
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
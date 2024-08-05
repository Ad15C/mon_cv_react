import React from "react";

const Realisations = () => {
    return (
        <main className="realisations">
            <div className="banner-fixed-top">
                <div className="banner">
                </div>
            </div>
            <div className="container">
                <h1 className="text-uppercase mt-5">Portfolio</h1>
                    <p className="fw-semibold">Voici quelques-unes de mes réalisations.</p>
                <hr className="titles-underline position-absolute top-5 start-50 translate-middle"></hr>
                
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
                    <div className="col">
                        <div
                            className="card h-100" 
                            id="card-container">
                                <img 
                                src="fruits.jpg" 
                                className="card-img-top" 
                                id="fruits"
                                alt="panier de fruits"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Fresh Food</h5>
                                        <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
                                        <a href="#">
                                            <button 
                                                type="button" 
                                                className="btn btn-outline-primary">Voir
                                            </button>
                                        </a>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">Site réalisé avec PHP et MySQL</small>
                                </div>
                        </div>
                    </div>

                    <div className="col">
                        <div 
                            className="card h-150" 
                            id="card-container">
                                <img 
                                    src="sushis.jpg" 
                                    className="card-img-top" 
                                    id="sushis"
                                    alt="plat de sushis" 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Restaurant Akira</h5>
                                        <p className="card-text">Réalisation d'un site vitrine</p>
                                        <a href="#">
                                            <button 
                                                type="button" 
                                                className="btn btn-outline-primary">Voir
                                            </button>
                                        </a>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">Site réalisé avec WordPress</small>
                                </div>
                        </div>
                    </div>

                    <div className="col">
                        <div 
                            className="card h-100" 
                            id="card-container">
                                <img 
                                    src="zen_soin.jpg" 
                                    className="card-img-top" 
                                    id="zen"
                                    alt="image de décoration zen"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Espace bien-être</h5>
                                        <p className="card-text">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
                                        <a href="#">
                                            <button 
                                                type="button" 
                                                className="btn btn-outline-primary">Voir
                                            </button>
                                        </a>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">Site réalisé en HTML/CSS</small>
                                </div>
                        </div>
                    </div>

                </div>

            </div>

        </main>
    );
}

export default Realisations;
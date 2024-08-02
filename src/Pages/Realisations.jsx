import React from "react";

const Realisations = () => {
    return (
        <main className="realisations">
            <div class="banner-fixed-top">
                <div class="banner">
                </div>
            </div>
            <div className="container">
            <h1 className="text-uppercase mt-5">Portfolio</h1>
            <p class="fw-semibold">Voici quelques-unes de mes réalisations.</p>
            <hr className="titles-underline position-absolute top-5 start-50 translate-middle"></hr>
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
                    <div class="col">
                        <div class="card h-100" id="card-container">
                            <img src="fruits.jpg" class="card-img-top" id="fruits"/>
                                <div class="card-body">
                                    <h5 class="card-title">Fresh Food</h5>
                                    <p class="card-text">Réalisation d'un site avec commande en ligne.</p>
                                    <a href="">
                                    <button type="button" class="btn btn-outline-primary">Voir</button>
                                    </a>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">Site réalisé avec PHP et MySQL</small>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-150" id="card-container">
                            <img src="sushis.jpg" class="card-img-top" id="sushis" />
                                <div class="card-body">
                                    <h5 class="card-title">Restaurant Akira</h5>
                                    <p class="card-text">Réalisation d'un site vitrine</p>
                                    <a href="">
                                    <button type="button" class="btn btn-outline-primary">Voir</button>
                                    </a>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">Sité réalisé avec WordPress</small>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100" id="card-container">
                            <img src="zen_soin.jpg" class="card-img-top" id="zen"/>
                                <div class="card-body">
                                    <h5 class="card-title">Espace bien-être</h5>
                                    <p class="card-text">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
                                    <a href="">
                                    <button type="button" class="btn btn-outline-primary">Voir</button>
                                    </a>
                                </div>
                                <div class="card-footer">
                                    <small class="text-body-secondary">Site réalisé en HTML/CSS</small>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Realisations;
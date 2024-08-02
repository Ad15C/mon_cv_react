import React from "react";

const Blog = () => {
    return (
        <main className="blog">
            <div class="banner-fixed-top">
                <div class="banner">
                </div>
            </div>
            <div className="container">
                <h1 className="text-uppercase mt-5">Blog</h1>
                <p class="fw-semibold">Retrouvez ici quelques articles sur le développement web.</p>
                <hr className="titles-underline position-absolute top-5 start-50 translate-middle"></hr>
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
                    <div class="col">
                        <div class="card h-100">
                            <img src="coding.jpg" class="card-img-top" id="coding" alt="lignes de code"/>
                            <div class="card-body">
                                <h5 class="card-title">Coder son site en HTML/CSS</h5>
                                <p class="card-text">Some quick example text to build on the title and make up the bulk of the card's content</p>
                                <a href="">
                                <button type="button" class="btn btn-primary d-grid gap-2 d-md-block">Lire la suite</button>
                                </a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Publié le 22 août 2022</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="vente.jpg" class="card-img-top" id="vente" alt="image avec argent gagné"/>
                            <div class="card-body">
                                <h5 class="card-title">Vendre ses produits sur le web</h5>
                                <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="">
                                <button type="button" class="btn btn-primary d-grid gap-2 d-md-block">Lire la suite</button>
                                </a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Publié le 20 août 2022</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="positionnement.jpg" class="card-img-top" id="positionnement" alt="image de matériel informatique" />
                            <div class="card-body">
                                <h5 class="card-title">Se positionner sur Google</h5>
                                <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="">
                                <button type="button" class="btn btn-primary d-grid gap-2 d-md-block">Lire la suite</button>
                                </a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Publié le 1 août 2022</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="responsive.jpg" class="card-img-top" id="responsive" alt="image avec les différents surpports pour le resposive design" />
                            <div class="card-body">
                                <h5 class="card-title">Coder en responsive design</h5>
                                <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="">
                                <button type="button" class="btn btn-primary d-grid gap-2 d-md-block">Lire la suite</button>
                                </a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Publié le 31 juillet 2022</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="referencement.jpg" class="card-img-top" id="referencement" alt="image expliquant le référencement SEO" />
                            <div class="card-body">
                                <h5 class="card-title">Techniques de référencement</h5>
                                <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="">
                                    <button type="button" class="btn btn-primary d-grid gap-2 d-md-block">Lire la suite</button>
                                </a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Publié le 30 juillet 2022</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-90">
                            <img src="code.webp" class="card-img-top" id="code_languages" alt="différents langages informatiques pour coder" />
                            <div class="card-body">
                                <h5 class="card-title">Apprendre à coder</h5>
                                <p class="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="">
                                <button type="button" class="btn btn-primary d-grid gap-2 d-md-block">Lire la suite</button>
                                </a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Publié le 12 juillet 2022</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Blog;
import React from "react";

const Blog = () => {
    return (
        <main className="blog">
            <div className="banner-fixed-top">
                <div className="banner"></div>
            </div>
            
            <div className="container">
                <h1 className="text-uppercase mt-5" id="title">Blog</h1>
                    <p className="fw-semibold">Retrouvez ici quelques articles sur le développement web.</p>
                        <hr className="titles-underline position-absolute top-5 start-50 translate-middle"></hr>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5 mb-5">
                                <div className="col">
                                    <div className="card h-100 border rounded">
                                        <img 
                                            src="coding.jpg" 
                                            className="card-image-top mt-0" 
                                            id="coding" 
                                            alt="lignes de code"
                                        />
                                        <div className="card-body text-start">
                                            <h5 className="card-title fs-3 font-weight-bold">Coder son site en HTML/CSS</h5>
                                                <p className="card-text">Some quick example text to build on the title and make up the bulk of the card's content</p>
                                                <a href="#" className="btn btn-primary d-grid gap-2 d-md-block">
                                                    Lire la suite
                                                </a>
                                        </div>
                                        <div className="card-footer">
                                            <small className="fs-6 font-weight-bold d-flex">Publié le 22 août 2022</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 border rounded">
                                        <img 
                                            src="vente.jpg" 
                                            className="card-image-top mt-0" 
                                            id="vente" 
                                            alt="image avec argent gagné"
                                        />
                                        <div className="card-body text-start">
                                            <h5 className="card-title fs-3 font-weight-bold">Vendre ses produits sur le web</h5>
                                                <p className="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary d-grid gap-2 d-md-block">
                                                    Lire la suite
                                                </a>
                                        </div>
                                        <div className="card-footer">
                                            <small className="fs-6 font-weight-bold d-flex">Publié le 20 août 2022</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 border rounded">
                                        <img 
                                            src="positionnement.jpg" 
                                            className="card-image-top" 
                                            id="positionnement" 
                                            alt="image de matériel informatique"
                                        />
                                            <div className="card-body text-start">
                                                <h5 className="card-title fs-3 font-weight-bold">Se positionner sur Google</h5>
                                                    <p className="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn btn-primary d-grid gap-2 d-md-block">
                                                        Lire la suite
                                                    </a>
                                            </div>
                                            <div className="card-footer">
                                                <small className="fs-6 font-weight-bold d-flex">Publié le 1 août 2022</small>
                                            </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 border rounded">
                                        <img 
                                            src="responsive.jpg" 
                                            className="card-image-top" 
                                            id="responsive" 
                                            alt="image avec les différents surpports pour le resposive design" 
                                        />
                                            <div className="card-body text-start">
                                                <h5 className="card-title fs-3 font-weight-bold">Coder en responsive design</h5>
                                                    <p className="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn btn-primary d-grid gap-2 d-md-block">
                                                        Lire la suite
                                                    </a>
                                            </div>
                                            <div className="card-footer">
                                                <small className="fs-6 font-weight-bold d-flex">Publié le 31 juillet 2022</small>
                                            </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 border rounded">
                                        <img 
                                            src="referencement.jpg" 
                                            className="card-image-top" 
                                            id="referencement" 
                                            alt="image expliquant le référencement SEO" 
                                        />
                                            <div className="card-body text-start">
                                                <h5 className="card-title fs-3 font-weight-bold">Techniques de référencement</h5>
                                                    <p className="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn btn-primary d-grid gap-2 d-md-block">
                                                        Lire la suite
                                                    </a>
                                            </div>
                                            <div className="card-footer">
                                                <small className="fs-6 font-weight-bold d-flex">Publié le 30 juillet 2022</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-90 border rounded">
                                        <img 
                                            src="code.webp" 
                                            className="card-image-top" 
                                            id="code_languages" 
                                            alt="différents langages informatiques pour coder" 
                                        />
                                            <div className="card-body text-start">
                                                <h5 className="card-title fs-3 font-weight-bold">Apprendre à coder</h5>
                                                    <p className="card-text">Some quick exemple text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn btn-primary d-grid gap-2 d-md-block">
                                                        Lire la suite
                                                    </a>
                                            </div>
                                            <div className="card-footer">
                                                <small className="fs-6 font-weight-bold d-flex">Publié le 12 juillet 2022</small>
                                            </div>
                                    </div>
                                </div>
                            </div>
            </div>
        </main>
    );
}

export default Blog;
# mon_cv_react

Ce projet est un site internet fonctionnel où l'on présente les différentes réalisations de John Doe. Ce dernier est réalisé grâce à React et Bootstrap, et est hébergé sur CodeSandbox.

# Les Attentes

Pour ce projet, il était demandé de réaliser un site internet fonctionnel pour un futur développeur web. Le site doit être hébergé sur CodeSandbox.
Le code doit être valide au regard des normes du W3C.

# Les Technologies Utilisées

    HTML, CSS, JavaScript, React, Bootstrap, Sass,
    Visual Studio Code (https://code.visualstudio.com/)
    Vite Configuration Reference (https://vitejs.dev/config/)
    GitHub
    CodeSandBox (https://codesandbox.io/)

# L'identité Graphique

    **_Police_**

       La police utilisée est Nunito Sans. Elle est implémentée avec une graisse de 400 pour le corps de texte et de 600 pour les titres et les balises <strong>.

    **_Favicon_**

        Ce dernier est un logo textuel qui est repris dans la barre de navigation.
        Sinon utilisation de Font Awesome 6 pour les différentes icônes.
    
    **_Images_**

        Utilisation d'images libres de droit sur Pixabay.

    **_Couleurs_**
       
       couleur de fond : #EEE
       couleur du Texte: #444
       couleur des Titres: #1e1e1e
       balises strong: noir

# Les Livrables Attendus

    **_Header_**

    Il est présent sur toutes les pages.
    Il reprend le logo à gauche et la navigation vers les pages à droite. Sur mobile et
    tablette, la navigation s’affiche sous forme d’icône de « hamburger ».
    L’élément actif doit pouvoir être affiché dans une autre couleur ou nuance. La classe
    « active » peut être ajoutée dans le HTML ou en utilisant du code JavaScript.
    Le texte des hyperliens est affiché en majuscule, en utilisant des règles CSS ou une
    classe Bootstrap.

    **_Footer_**

        Il est identique sur toutes les pages.
        Il contient 4 colonnes de largeur égale :
            La 1re avec le nom du développeur, son adresse, son numéro de téléphone et
        les icônes vers ses réseaux professionnels (Github, Twitter et LinkedIn). Les
        icônes doivent être cliquables et mener vers les comptes que John Doe possède sur les différents réseaux. Les liens doivent s’ouvrir dans une nouvelle fenêtre et ne doivent pas être suivis pour le SEO.
            La 2e colonne reprend les liens vers les différentes pages, à l’exception des
        réalisations et des articles de blog.
            La 3e colonne reprend les liens vers les dernières réalisations.
            La 4e colonne reprend les liens vers les derniers articles de blog.
        Il reprend en plus une ligne de copyright et un lien pour remonter en haut de la page.
        Ce dernier lien n'apparaît pas lorsque l’utilisateur est positionné en haut de la page, mais doit apparaître lors du défilement (utiliser la librairie Vanilla JS).

    **_La Page d'accueil_**

        Une image de fond en pleine page, des balises <h1> et h2>, un bouton « En savoir plus » avec un lien vers la section « À propos ». Au-dessus de l’image d’arrière-plan doit se superposer un fond de couleur noire, avec une transparence de 0.3.
        Une section « À propos » avec une présentation de John Doe, sa photo et ses compétences affichées sous forme de progress bars Bootstrap.

    **_La Page Services_**
        
        La présentation des offres de services que John Doe propose.

    **_La Page Réalisations_**

        Le portfolio de John Doe, avec un minimum de 3 projets, présentés sous forme de
        Bootstrap Card.

    **_La Page Blog_**

        Une introduction de 6 articles, présentés sous forme de Bootstrap Card.
    
    **_La Page Contact_**

        Un formulaire de contact intégrant les champs nom, e-mail, numéro de téléphone, sujet
        et message (tous obligatoires).
        Les coordonnées de John Doe : adresse, numéro de téléphone et Google Map.
        L’image de fond de la section doit être recouverte d’un fond bleu transparent : rgba (0, 105, 255, 0.5).

    **_La Page Mentions Légales_**

        L’éditeur du site
        L’hébergeur du site
        Les crédits, avec un lien vers le site de Pixabay pour les images.
        Rq: La présentation est réalisée en utilisant le composant accordéon de Bootstrap.
        Cette page ne doit pas être indexée par les moteurs de recherche.


# Les Instructions d'installation

    1. Clonez le projet sur votre machine locale.
        - Pour cela, copiez l'adresse URL du projet GitHub.
        - Ouvrez votre Terminal de système d'exploitation
        - Utilisez la commande 'cd' pour naviguer vers le répertoire où vous souhaitez cloner le référentiel
        (cd mon_cv_react)
        - Utilisez la commande git clone de l'URL
        (ex: 'git clone https://github.com/utilisateur/nom-du-repo.git')

    2. Différentes commandes
        npm install : Installation des dépendances
        npm run dev : Démarre le serveur de développement
        npm run serve : Lance l'application localement

# Structure du Projet

    MON_CV_REACT
        node_modules
        public
        src
            Components
            Pages
        App.css
        App.js
        index.css
        index.js
        reportWebVitals.js
        setupTests.js
        .gitignore
        package-lock.json
        package.json
        README.md

# Contact

Pour toutes questions relatives au projet ou commentaire,
veuillez me contacter à [ad15canon@gmail.com]

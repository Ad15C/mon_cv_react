import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Importer les styles CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Icône pour le bouton
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
    //isVisbible détermine si le bouton va être montré
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour faire défiler vers le haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Défilement fluide
    });
  };

    //useEffect est utilisé pour ajouter et nettoyer l'écouteur d'évenement
  useEffect(() => {
    
     // Gestionnaire d'événement pour le défilement
  const handleScroll = () => {
    const scrollTop = window.pageY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 200); // Afficher le bouton après 300 pixels de défilement
  };

    // Ajouter l'écouteur d'événement de défilement
    window.addEventListener('scroll', handleScroll);

    // Nettoyage pour éviter les fuites de mémoire
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`} // Ajouter la classe visible selon l'état
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTopButton;

import { Button } from './ui/button';
import { Leaf } from 'lucide-react';
import './Hero.css';

export function Hero() {
  return (
    <section id="accueil" className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1580927084836-88b629bf502a?q=80&w=1920" 
          alt="Jardin paysager" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Leaf size={28} fill="currentColor" />
            <span>Votre jardin, notre passion</span>
          </div>
          
          <h1 className="hero-title">
            Des Jardins Magnifiques, Entretenus avec Soin
          </h1>
          
          <p className="hero-description">
            Services professionnels d'entretien de jardins et d'aménagement paysager. 
            Transformez votre espace extérieur en un véritable paradis vert.
          </p>
          
          <div className="hero-buttons">
            <Button className="btn-primary">
              Demander un Devis
            </Button>
            <Button className="btn-secondary">
              Nos Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
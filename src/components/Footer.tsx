import { Leaf, Facebook, Instagram, Twitter, Mail } from "lucide-react";
import "./Footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Company Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Leaf size={24} />
              <span>Jardin Facile</span>
            </div>

            <p>
              Votre partenaire de confiance pour l'entretien et l'aménagement de vos espaces verts. 
              Des jardins magnifiques, entretenus avec passion et professionnalisme.
            </p>

            <div className="footer-socials">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Mail size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Liens Rapides</h3>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/conseils">Conseils</a></li>
              <li><a href="/galerie">Galerie</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3>Nos Services</h3>
            <ul>
              <li>Tonte de pelouse</li>
              <li>Élagage & Taille</li>
              <li>Plantation</li>
              <li>Arrosage</li>
              <li>Aménagement paysager</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} Jardin Facile. Tous droits réservés.</p>
          <div className="footer-links">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">CGV</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

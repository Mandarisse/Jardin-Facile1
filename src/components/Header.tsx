import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo" onClick={() => goTo("/")}>
          <h1>Jardin Facile</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <button onClick={() => goTo("/")}>Accueil</button>
          <button onClick={() => goTo("/services")}>Services</button>
          <button onClick={() => goTo("/conseils")}>Conseils</button>
          <button onClick={() => goTo("/galerie")}>Galerie</button>
          <button onClick={() => goTo("/contact")}>Contact</button>
        </nav>

        {/* Contact */}
        <div className="contact-desktop">
          <div className="phone">
            <Phone size={16} />
            <span>01 23 45 67 89</span>
          </div>
          <button className="cta" onClick={() => goTo("/contact")}>
            Devis Gratuit
          </button>
        </div>

        {/* Mobile button */}
        <button
          className="mobile-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="nav-mobile">
          <button onClick={() => goTo("/")}>Accueil</button>
          <button onClick={() => goTo("/services")}>Services</button>
          <button onClick={() => goTo("/conseils")}>Conseils</button>
          <button onClick={() => goTo("/galerie")}>Galerie</button>
          <button onClick={() => goTo("/contact")}>Contact</button>

          <div className="phone mobile-phone">
            <Phone size={16} />
            <span>01 23 45 67 89</span>
          </div>

          <button className="cta full" onClick={() => goTo("/contact")}>
            Devis Gratuit
          </button>
        </div>
      )}
    </header>
  );
}

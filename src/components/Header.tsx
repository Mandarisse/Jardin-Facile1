import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import "./Header.css";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        
        {/* Logo */}
        <div className="logo">
          <h1>Jardin Facile</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <button onClick={() => scrollToSection("accueil")}>Accueil</button>
          <button onClick={() => scrollToSection("services")}>Services</button>
          <button onClick={() => scrollToSection("conseils")}>Conseils</button>
          <button onClick={() => scrollToSection("galerie")}>Galerie</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>

        {/* Contact */}
        <div className="contact-desktop">
          <div className="phone">
            <Phone size={16} />
            <span>01 23 45 67 89</span>
          </div>
          <button className="cta" onClick={() => scrollToSection("contact")}>
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
          <button onClick={() => scrollToSection("accueil")}>Accueil</button>
          <button onClick={() => scrollToSection("services")}>Services</button>
          <button onClick={() => scrollToSection("conseils")}>Conseils</button>
          <button onClick={() => scrollToSection("galerie")}>Galerie</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>

          <div className="phone mobile-phone">
            <Phone size={16} />
            <span>01 23 45 67 89</span>
          </div>

          <button className="cta full" onClick={() => scrollToSection("contact")}>
            Devis Gratuit
          </button>
        </div>
      )}
    </header>
  );
}

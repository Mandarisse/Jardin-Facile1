import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-green-700">Jardin Facile</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-green-600 transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-green-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('conseils')} className="text-gray-700 hover:text-green-600 transition-colors">
              Conseils
            </button>
            <button onClick={() => scrollToSection('galerie')} className="text-gray-700 hover:text-green-600 transition-colors">
              Galerie
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">01 23 45 67 89</span>
            </div>
            <button onClick={() => scrollToSection('contact')} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white">
              Devis Gratuit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t pt-4">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-green-600 transition-colors text-left">
                Accueil
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-green-600 transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('conseils')} className="text-gray-700 hover:text-green-600 transition-colors text-left">
                Conseils
              </button>
              <button onClick={() => scrollToSection('galerie')} className="text-gray-700 hover:text-green-600 transition-colors text-left">
                Galerie
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-600 transition-colors text-left">
                Contact
              </button>
              <div className="flex items-center gap-2 text-gray-600 pt-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">01 23 45 67 89</span>
              </div>
              <button onClick={() => scrollToSection('contact')} className="bg-green-600 hover:bg-green-700 w-full px-4 py-2 rounded text-white">
                Devis Gratuit
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
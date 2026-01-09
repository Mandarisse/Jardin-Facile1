import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

import './Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ nom: '', email: '', telephone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contactez-nous</h2>
          <p>Une question ? Un projet ? N'hésitez pas à nous contacter pour un devis gratuit</p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-card">
              <div className="icon"><Phone /></div>
              <div className="info">
                <h3>Téléphone</h3>
                <p>01 23 45 67 89</p>
                <p className="small">Lun - Sam: 8h - 18h</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon"><Mail /></div>
              <div className="info">
                <h3>Email</h3>
                <p>contact@jardinfacile.fr</p>
                <p className="small">Réponse sous 24h</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon"><MapPin /></div>
              <div className="info">
                <h3>Adresse</h3>
                <p>123 Rue des Jardins</p>
                <p>75000 Paris, France</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon"><Clock /></div>
              <div className="info">
                <h3>Horaires</h3>
                <p>Lundi - Vendredi: 8h - 18h</p>
                <p>Samedi: 9h - 16h</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <h3>Demander un Devis Gratuit</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nom">Nom complet *</label>
              <input
                id="nom"
                name="nom"
                type="text"
                value={formData.nom}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="telephone">Téléphone *</label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
              />

              <button type="submit">Envoyer la demande</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

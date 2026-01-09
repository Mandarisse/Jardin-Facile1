import { Calendar, Sun, CloudRain, Thermometer } from 'lucide-react';
import './Tips.css';

const tips = [
  {
    icon: Calendar,
    season: 'Printemps',
    title: 'Préparation du jardin',
    description: 'C\'est le moment idéal pour préparer le sol, planter les bulbes et semences, et tailler les arbustes.',
    iconStyle: { backgroundColor: '#fdf2f8', color: '#db2777' }, // Couleurs personnalisées
  },
  {
    icon: Sun,
    season: 'Été',
    title: 'Arrosage régulier',
    description: 'Arrosez tôt le matin ou en fin de journée. Paillez le sol pour conserver l\'humidité.',
    iconStyle: { backgroundColor: '#fefce8', color: '#ca8a04' },
  },
  {
    icon: CloudRain,
    season: 'Automne',
    title: 'Entretien avant l\'hiver',
    description: 'Ramassez les feuilles mortes, protégez les plantes sensibles et plantez les bulbes de printemps.',
    iconStyle: { backgroundColor: '#fff7ed', color: '#ea580c' },
  },
  {
    icon: Thermometer,
    season: 'Hiver',
    title: 'Protection du jardin',
    description: 'Protégez vos plantes du gel avec des voiles d\'hivernage et planifiez l\'aménagement de l\'année prochaine.',
    iconStyle: { backgroundColor: '#eff6ff', color: '#2563eb' },
  },
];

export function Tips() {
  return (
    <section id="conseils" className="tips-section">
      <div className="tips-container">
        <div className="tips-header">
          <h2>Conseils de Jardinage</h2>
          <p>
            Des conseils pratiques pour chaque saison afin de maintenir votre jardin en pleine santé
          </p>
        </div>

        <div className="tips-grid">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div key={index} className="tip-card">
                <div className="icon-wrapper" style={tip.iconStyle}>
                  <Icon size={24} />
                </div>
                <span className="tip-season">{tip.season}</span>
                <h3 className="tip-title">{tip.title}</h3>
                <p className="tip-description">{tip.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
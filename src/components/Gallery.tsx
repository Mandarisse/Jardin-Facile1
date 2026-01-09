import './Gallery.css';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1759724142539-66c82d5846e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYXJkZW4lMjBkZXNpZ258ZW58MXx8fHwxNzY2NTY4NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Aménagement Moderne',
    category: 'Aménagement paysager',
  },
  {
    image: 'https://images.unsplash.com/photo-1738193830098-2d92352a1856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXduJTIwbW93aW5nJTIwc2VydmljZXxlbnwxfHx8fDE3NjY2MDU1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Entretien Pelouse',
    category: 'Tonte régulière',
  },
  {
    image: 'https://images.unsplash.com/photo-1729938825151-483cda78c513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWRnZSUyMHRyaW1taW5nJTIwZ2FyZGVufGVufDF8fHx8MTc2NjU4MzAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Taille de Haies',
    category: 'Élagage professionnel',
  },
  {
    image: 'https://images.unsplash.com/photo-1743078853538-b16a58d1c06b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBwbGFudGluZyUyMGZsb3dlcnN8ZW58MXx8fHwxNzY2NjA1NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Plantation Florale',
    category: 'Création de massifs',
  },
];

export function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Nos Réalisations</h2>
          <p>
            Découvrez quelques-uns de nos projets récents et laissez-vous inspirer
          </p>
        </div>

        <div className="gallery-grid">
          {projects.map((project, index) => (
            <div key={index} className="gallery-card">
              <div className="gallery-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

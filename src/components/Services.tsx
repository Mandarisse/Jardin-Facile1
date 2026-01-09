import { Scissors, Sprout, TreePine, Flower2, Droplets, Shovel } from "lucide-react";
import "./Services.css";

const services = [
  {
    icon: Scissors,
    title: "Tonte de Pelouse",
    description: "Tonte régulière et professionnelle pour un gazon impeccable toute l'année.",
  },
  {
    icon: TreePine,
    title: "Élagage & Taille",
    description: "Taille d'arbres et arbustes pour maintenir la santé et l'esthétique de vos plantes.",
  },
  {
    icon: Flower2,
    title: "Plantation",
    description: "Conseil et plantation de fleurs, arbustes et arbres adaptés à votre jardin.",
  },
  {
    icon: Sprout,
    title: "Entretien Saisonnier",
    description: "Préparation et entretien de votre jardin au fil des saisons.",
  },
  {
    icon: Droplets,
    title: "Système d'Arrosage",
    description: "Installation et maintenance de systèmes d'arrosage automatiques.",
  },
  {
    icon: Shovel,
    title: "Aménagement Paysager",
    description: "Création et rénovation complète de vos espaces verts.",
  },
];

export function Services() {
  return (
    <section className="services">
      <div className="services-container">

        <div className="services-header">
          <h2>Nos Services</h2>
          <p>
            Une gamme complète de services pour l'entretien et l'embellissement de vos jardins
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <Icon size={26} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

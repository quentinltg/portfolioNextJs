import Link from 'next/link';
import type { Metadata } from 'next';
import projectsData from '@/data/projects.json';
import type { Project } from '@/types/project';

export const metadata: Metadata = {
  title: 'Accueil',
  description:
    'Portfolio de développeur web éco-responsable. Découvrez mes projets optimisés pour la performance et l\'accessibilité.',
};

export default function HomePage() {
  const projects = projectsData as Project[];
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="hero-title">
          Développeur Web Éco-responsable
        </h1>
        <p className="hero-description">
          Je conçois des sites web performants, accessibles et respectueux de
          l'environnement. Chaque ligne de code compte pour un web plus durable.
        </p>
        <div className="hero-actions">
          <Link href="/projects" className="button button-primary">
            Voir mes projets
          </Link>
          <Link href="/about" className="button button-secondary">
            En savoir plus
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section" aria-labelledby="featured-title">
        <h2 id="featured-title" className="section-title">
          Projets en vedette
        </h2>
        {featuredProjects.length > 0 ? (
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <article key={project.id} className="featured-card">
                <h3 className="featured-card-title">{project.title}</h3>
                <p className="featured-card-description">
                  {project.description}
                </p>
                <div className="featured-card-meta">
                  <span className="eco-badge" title={`Score éco: ${project.ecoScore.value}/5`}>
                    {'🌱'.repeat(project.ecoScore.value)} {project.ecoScore.label}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">Aucun projet disponible pour le moment.</p>
        )}
        <div className="section-footer">
          <Link href="/projects" className="link-arrow">
            Tous les projets →
          </Link>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" aria-labelledby="values-title">
        <h2 id="values-title" className="section-title">
          Mes engagements
        </h2>
        <div className="values-grid">
          <div className="value-card">
            <h3 className="value-title">♻️ Éco-conception</h3>
            <p className="value-description">
              Optimisation systématique du poids des pages, des images et du JavaScript
              pour minimiser l'empreinte carbone.
            </p>
          </div>
          <div className="value-card">
            <h3 className="value-title">⚡ Performance</h3>
            <p className="value-description">
              Sites ultra-rapides grâce au code splitting, lazy loading et
              optimisations avancées.
            </p>
          </div>
          <div className="value-card">
            <h3 className="value-title">♿ Accessibilité</h3>
            <p className="value-description">
              Conformité WCAG 2.1 AA minimum : navigation clavier, lecteurs
              d'écran, contrastes optimaux.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

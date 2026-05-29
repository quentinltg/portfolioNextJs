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
          Quentin Tripognez
        </h1>
        <p className="hero-description">
          Développeur junior
        </p>
        <p className="hero-description">
          Étudiant en BUT Informatique à l'IUT de Lens. 
          Passionné par le développement, je développe mes compétences en programmation.
        </p>
        <div className="hero-actions">
          <Link href="/projects" className="button button-primary">
            Voir mes projets
          </Link>
          <Link href="/cv" className="button button-secondary">
            Mon CV
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
          À propos de moi
        </h2>
        <div className="values-grid">
          <div className="value-card">
            <h3 className="value-title">💻 Développement</h3>
            <p className="value-description">
              Passionné par le développement Web (HTML, CSS, JavaScript, PHP, Laravel, React, Angular) 
              et Java. Apprentissage continu de nouvelles technologies.
            </p>
          </div>
          <div className="value-card">
            <h3 className="value-title">🤿 Plongée</h3>
            <p className="value-description">
              Pratique de la plongée et de la plongée sportive. Ces disciplines m'ont appris 
              la rigueur, l'esprit d'équipe et la gestion du stress. Futur guide de palanquée FFESSM.
            </p>
          </div>
          <div className="value-card">
            <h3 className="value-title">🦎 Expérience terrain</h3>
            <p className="value-description">
              Emploi saisonnier en tant que soigneur animalier chez Reptilis. 
              Développement de qualités comme la rigueur et le sens des responsabilités.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

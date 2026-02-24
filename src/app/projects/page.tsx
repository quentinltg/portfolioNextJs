import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projects.json';
import type { Project } from '@/types/project';

export const metadata: Metadata = {
  title: 'Projets',
  description:
    'Découvrez mes projets web éco-responsables : sites statiques optimisés, dashboards légers, e-commerce durables. Performance et accessibilité garanties.',
};

export default function ProjectsPage() {
  const projects = projectsData as Project[];

  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Mes Projets</h1>
        <p className="page-description">
          Une sélection de projets web optimisés pour la performance, l'accessibilité
          et l'éco-conception. Chaque projet respecte les meilleures pratiques du web durable.
        </p>
      </header>

      {projects.length > 0 ? (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="empty-state-container">
          <p className="empty-state">
            Aucun projet disponible pour le moment. De nouveaux projets seront bientôt ajoutés.
          </p>
        </div>
      )}

      <aside className="info-box">
        <h2 className="info-box-title">Critères d'éco-conception</h2>
        <p className="info-box-description">
          Tous les projets sont évalués selon leur impact environnemental :
          poids des pages, nombre de requêtes, optimisation des images,
          performance JavaScript et accessibilité.
        </p>
      </aside>
    </div>
  );
}

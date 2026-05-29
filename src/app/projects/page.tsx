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
        <h1 className="page-title">Mes Projets réalisés lors de mon BUT</h1>
        <p className="page-description">
          Le meilleur projet reste celui que nous créerons ensemble.
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

    </div>
  );
}

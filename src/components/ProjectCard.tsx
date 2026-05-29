import Image from 'next/image';
import type { Project } from '@/types/project';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={800}
          height={450}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>

        <p className={styles.description}>{project.description}</p>

        <ul className={styles.technologies} aria-label="Technologies utilisées">
          {project.technologies.map((tech) => (
            <li key={tech} className={styles.tech}>
              {tech}
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className={`${styles.link} ${styles.linkPrimary}`}
              target="_blank"
              rel="noopener noreferrer"
              title={`Voir la démo de ${project.title} (ouvre dans un nouvel onglet)`}
            >
              Voir la démo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              className={`${styles.link} ${styles.linkSecondary}`}
              target="_blank"
              rel="noopener noreferrer"
              title={`Voir le code source de ${project.title} (ouvre dans un nouvel onglet)`}
            >
              Lien vers le code source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

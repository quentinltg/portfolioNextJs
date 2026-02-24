import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plan du site',
  description:
    'Plan du site du portfolio éco-responsable. Accédez rapidement à toutes les pages et sections disponibles.',
};

interface SitemapLink {
  title: string;
  href: string;
  description: string;
}

export default function SitemapPage() {
  const mainPages: SitemapLink[] = [
    {
      title: 'Accueil',
      href: '/',
      description:
        'Page d\'accueil avec présentation, projets en vedette et engagements',
    },
    {
      title: 'Projets',
      href: '/projects',
      description:
        'Liste complète des projets web éco-responsables avec détails techniques',
    },
    {
      title: 'À propos',
      href: '/about',
      description:
        'Présentation, compétences, démarche et valeurs du développeur',
    },
    {
      title: 'CV',
      href: '/cv',
      description:
        'Curriculum Vitae complet : expériences professionnelles, formation, compétences et loisirs',
    },
    {
      title: 'Contact',
      href: '/contact',
      description:
        'Coordonnées, formulaire de contact et FAQ pour échanger sur vos projets',
    },
  ];

  const secondaryPages: SitemapLink[] = [
    {
      title: 'Mentions légales',
      href: '/legal',
      description:
        'Informations légales, hébergement, propriété intellectuelle et RGPD',
    },
    {
      title: 'Plan du site',
      href: '/sitemap',
      description: 'Vue d\'ensemble de la structure et navigation du site',
    },
  ];

  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Plan du site</h1>
        <p className="page-description">
          Navigation complète du portfolio. Retrouvez rapidement toutes les pages
          et sections disponibles.
        </p>
      </header>

      <div className="sitemap-content">
        <section className="sitemap-section" aria-labelledby="main-title">
          <h2 id="main-title" className="sitemap-section-title">
            Pages principales
          </h2>
          <ul className="sitemap-list">
            {mainPages.map((page) => (
              <li key={page.href} className="sitemap-item">
                <Link href={page.href} className="sitemap-link">
                  {page.title}
                </Link>
                <p className="sitemap-description">{page.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="sitemap-section" aria-labelledby="secondary-title">
          <h2 id="secondary-title" className="sitemap-section-title">
            Pages informatives
          </h2>
          <ul className="sitemap-list">
            {secondaryPages.map((page) => (
              <li key={page.href} className="sitemap-item">
                <Link href={page.href} className="sitemap-link">
                  {page.title}
                </Link>
                <p className="sitemap-description">{page.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="sitemap-section" aria-labelledby="external-title">
          <h2 id="external-title" className="sitemap-section-title">
            Liens externes
          </h2>
          <ul className="sitemap-list">
            <li className="sitemap-item">
              <a
                href="https://framaforms.org"
                className="sitemap-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Formulaire de contact (Framaforms)
              </a>
              <p className="sitemap-description">
                Formulaire externe hébergé sur Framaforms pour préserver la vie privée
              </p>
            </li>
            <li className="sitemap-item">
              <a
                href="https://framaforms.org"
                className="sitemap-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Newsletter
              </a>
              <p className="sitemap-description">
                Inscription à la newsletter mensuelle sur l'éco-conception web
              </p>
            </li>
          </ul>
        </section>

        <aside className="info-box">
          <h2 className="info-box-title">Fichiers techniques</h2>
          <p className="info-box-description">
            Pour les moteurs de recherche et outils d'indexation :
          </p>
          <ul className="sitemap-list">
            <li className="sitemap-item">
              <a href="/sitemap.xml" className="sitemap-link">
                sitemap.xml
              </a>
              <span className="sitemap-description">
                {' '}
                - Plan du site au format XML pour les robots
              </span>
            </li>
            <li className="sitemap-item">
              <a href="/robots.txt" className="sitemap-link">
                robots.txt
              </a>
              <span className="sitemap-description">
                {' '}
                - Instructions pour les crawlers web
              </span>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

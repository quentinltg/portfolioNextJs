import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV',
  description:
    'Curriculum Vitae de Quentin : développeur web spécialisé en éco-conception. Expériences professionnelles, formation, compétences et loisirs.',
};

export default function CVPage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Curriculum Vitae</h1>
        <p className="page-description">
          Développeur Web Full Stack - Spécialiste Éco-conception & Performance
        </p>
      </header>

      <div className="content-grid">
        {/* Expériences Professionnelles */}
        <section className="content-section" aria-labelledby="experience-title">
          <h2 id="experience-title" className="content-title">
            💼 Expériences Professionnelles
          </h2>

          <div className="cv-timeline">
            <article className="cv-item">
              <div className="cv-item-header">
                <h3 className="cv-item-title">Développeur Web Full Stack</h3>
                <span className="cv-item-company">Agence Web Verte - Lyon</span>
                <span className="cv-item-date">Sept. 2024 - Présent</span>
              </div>
              <ul className="cv-item-list">
                <li>
                  Développement de sites web éco-responsables avec Next.js et TypeScript
                </li>
                <li>
                  Optimisation des performances et réduction de l'empreinte carbone (-60% en moyenne)
                </li>
                <li>
                  Audits d'accessibilité WCAG 2.1 AA et accompagnement clients
                </li>
                <li>
                  Mise en place de CI/CD avec GitHub Actions et déploiement sur Vercel
                </li>
              </ul>
            </article>

            <article className="cv-item">
              <div className="cv-item-header">
                <h3 className="cv-item-title">Développeur Front-End Junior</h3>
                <span className="cv-item-company">StartUp Innovante - Remote</span>
                <span className="cv-item-date">Janv. 2023 - Août 2024</span>
              </div>
              <ul className="cv-item-list">
                <li>
                  Refonte complète de l'interface utilisateur avec React et CSS Modules
                </li>
                <li>
                  Intégration d'APIs REST et optimisation des requêtes réseau
                </li>
                <li>
                  Collaboration en équipe agile (Scrum) avec des designers UX/UI
                </li>
                <li>
                  Tests unitaires et d'intégration avec Jest et React Testing Library
                </li>
              </ul>
            </article>

            <article className="cv-item">
              <div className="cv-item-header">
                <h3 className="cv-item-title">Stage Développeur Web</h3>
                <span className="cv-item-company">PME Locale - Grenoble</span>
                <span className="cv-item-date">Avril 2022 - Août 2022</span>
              </div>
              <ul className="cv-item-list">
                <li>
                  Création d'un site vitrine responsive avec HTML5, CSS3 et JavaScript
                </li>
                <li>
                  Intégration de CMS WordPress et personnalisation de thèmes
                </li>
                <li>
                  Optimisation SEO et amélioration du référencement naturel
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Formation */}
        <section className="content-section" aria-labelledby="education-title">
          <h2 id="education-title" className="content-title">
            🎓 Formation
          </h2>

          <div className="cv-timeline">
            <article className="cv-item">
              <div className="cv-item-header">
                <h3 className="cv-item-title">BUT Informatique - Parcours B</h3>
                <span className="cv-item-company">IUT Université de Grenoble</span>
                <span className="cv-item-date">2021 - 2024</span>
              </div>
              <p className="cv-item-description">
                Spécialisation en développement web et éco-conception numérique.
                Projet de fin d'études sur l'optimisation de l'empreinte carbone des applications web.
              </p>
              <p className="cv-item-skills">
                <strong>Compétences acquises :</strong> Développement web full stack,
                bases de données, architecture logicielle, gestion de projet agile
              </p>
            </article>

            <article className="cv-item">
              <div className="cv-item-header">
                <h3 className="cv-item-title">Baccalauréat Scientifique</h3>
                <span className="cv-item-company">Lycée Champollion - Grenoble</span>
                <span className="cv-item-date">2018 - 2021</span>
              </div>
              <p className="cv-item-description">
                Spécialité Mathématiques et Numérique et Sciences Informatiques (NSI).
                Mention Très Bien.
              </p>
            </article>
          </div>
        </section>

        {/* Compétences */}
        <section className="content-section" aria-labelledby="skills-title">
          <h2 id="skills-title" className="content-title">
            🛠️ Compétences Techniques
          </h2>

          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Langages & Frameworks</h3>
              <ul className="skill-tags">
                <li className="skill-tag skill-expert">JavaScript / TypeScript</li>
                <li className="skill-tag skill-expert">React / Next.js</li>
                <li className="skill-tag skill-expert">HTML5 / CSS3</li>
                <li className="skill-tag skill-intermediate">Node.js</li>
                <li className="skill-tag skill-intermediate">Python</li>
                <li className="skill-tag skill-basic">PHP</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Outils & Technologies</h3>
              <ul className="skill-tags">
                <li className="skill-tag skill-expert">Git / GitHub</li>
                <li className="skill-tag skill-expert">VS Code</li>
                <li className="skill-tag skill-expert">npm / yarn</li>
                <li className="skill-tag skill-intermediate">Docker</li>
                <li className="skill-tag skill-intermediate">PostgreSQL / MongoDB</li>
                <li className="skill-tag skill-intermediate">Figma</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Éco-conception & Performance</h3>
              <ul className="skill-tags">
                <li className="skill-tag skill-expert">Lighthouse Audits</li>
                <li className="skill-tag skill-expert">Core Web Vitals</li>
                <li className="skill-tag skill-expert">Optimisation Images</li>
                <li className="skill-tag skill-intermediate">Service Workers</li>
                <li className="skill-tag skill-intermediate">WebPageTest</li>
                <li className="skill-tag skill-intermediate">Green IT</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Accessibilité & UX</h3>
              <ul className="skill-tags">
                <li className="skill-tag skill-expert">WCAG 2.1 AA/AAA</li>
                <li className="skill-tag skill-expert">ARIA</li>
                <li className="skill-tag skill-expert">Tests lecteurs d'écran</li>
                <li className="skill-tag skill-intermediate">Design Responsive</li>
                <li className="skill-tag skill-intermediate">Mobile First</li>
              </ul>
            </div>
          </div>

          <div className="skill-legend">
            <p className="skill-legend-item">
              <span className="skill-tag skill-expert">Expert</span> - Utilisation quotidienne et maîtrise avancée
            </p>
            <p className="skill-legend-item">
              <span className="skill-tag skill-intermediate">Intermédiaire</span> - Bonne pratique et autonomie
            </p>
            <p className="skill-legend-item">
              <span className="skill-tag skill-basic">Débutant</span> - Connaissances de base et apprentissage
            </p>
          </div>
        </section>

        {/* Compétences Transversales */}
        <section className="content-section" aria-labelledby="soft-skills-title">
          <h2 id="soft-skills-title" className="content-title">
            🤝 Compétences Transversales
          </h2>

          <div className="values-grid">
            <div className="value-card">
              <h3 className="value-title">🎯 Autonomie</h3>
              <p className="value-description">
                Capacité à gérer mes projets de A à Z, de la conception au déploiement,
                en prenant des initiatives pertinentes.
              </p>
            </div>

            <div className="value-card">
              <h3 className="value-title">👥 Travail d'équipe</h3>
              <p className="value-description">
                Expérience en méthodologie agile (Scrum), collaboration avec designers
                et product owners, code reviews constructives.
              </p>
            </div>

            <div className="value-card">
              <h3 className="value-title">📚 Veille technologique</h3>
              <p className="value-description">
                Suivi actif des évolutions web (blogs, podcasts, conférences),
                apprentissage continu de nouvelles technologies.
              </p>
            </div>

            <div className="value-card">
              <h3 className="value-title">🌍 Sensibilité écologique</h3>
              <p className="value-description">
                Engagement pour un numérique responsable, participation aux
                communautés Green IT et éco-conception.
              </p>
            </div>
          </div>
        </section>

        {/* Loisirs & Centres d'intérêt */}
        <section className="content-section" aria-labelledby="hobbies-title">
          <h2 id="hobbies-title" className="content-title">
            🎨 Loisirs & Centres d'intérêt
          </h2>

          <div className="hobbies-grid">
            <div className="hobby-card">
              <h3 className="hobby-title">🏔️ Randonnée & Nature</h3>
              <p className="hobby-description">
                Passionné de randonnée en montagne, particulièrement dans les Alpes.
                La nature m'inspire et renforce ma sensibilité écologique.
              </p>
            </div>

            <div className="hobby-card">
              <h3 className="hobby-title">💻 Projets Open Source</h3>
              <p className="hobby-description">
                Contribution à des projets open source sur GitHub, notamment des
                outils d'optimisation web et de mesure d'empreinte carbone.
              </p>
            </div>

            <div className="hobby-card">
              <h3 className="hobby-title">📖 Lecture Tech</h3>
              <p className="hobby-description">
                Lecture régulière d'articles techniques, blogs de développeurs et
                livres sur l'architecture logicielle et les bonnes pratiques.
              </p>
            </div>

            <div className="hobby-card">
              <h3 className="hobby-title">🎮 Jeux Vidéo Indépendants</h3>
              <p className="hobby-description">
                Amateur de jeux vidéo indépendants et de game design. Intérêt pour
                l'optimisation des performances dans le développement de jeux.
              </p>
            </div>

            <div className="hobby-card">
              <h3 className="hobby-title">🎸 Musique</h3>
              <p className="hobby-description">
                Pratique de la guitare en autodidacte depuis 5 ans. La musique
                développe ma créativité et ma persévérance.
              </p>
            </div>

            <div className="hobby-card">
              <h3 className="hobby-title">🌱 Permaculture</h3>
              <p className="hobby-description">
                Initiation à la permaculture et au jardinage urbain. Lien entre
                écologie numérique et écologie environnementale.
              </p>
            </div>
          </div>
        </section>

        {/* Langues */}
        <section className="content-section" aria-labelledby="languages-title">
          <h2 id="languages-title" className="content-title">
            🌐 Langues
          </h2>

          <div className="language-list">
            <div className="language-item">
              <span className="language-name">Français</span>
              <span className="language-level">Langue maternelle</span>
            </div>
            <div className="language-item">
              <span className="language-name">Anglais</span>
              <span className="language-level">
                Niveau B2 (TOEIC 850) - Lu, écrit, parlé couramment
              </span>
            </div>
            <div className="language-item">
              <span className="language-name">Espagnol</span>
              <span className="language-level">Niveau A2 - Notions de base</span>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <aside className="info-box">
          <h2 className="info-box-title">📥 Télécharger mon CV</h2>
          <p className="info-box-description">
            Une version PDF de ce CV est disponible sur demande. N'hésitez pas à
            me contacter pour obtenir plus d'informations ou discuter d'opportunités
            de collaboration.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <a href="/contact" className="button button-primary">
              Me contacter
            </a>
            <a href="/projects" className="button button-secondary">
              Voir mes projets
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

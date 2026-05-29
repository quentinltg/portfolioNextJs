import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV',
  description:
    'Curriculum Vitae de Quentin Tripognez : développeur informatique fullstack. Alternant en SI, candidat école d\'ingénieur. Expériences, formation, compétences.',
};

export default function CVPage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Quentin Tripognez</h1>
        <p className="page-description">
          Candidat en école d'ingénieur – Alternant en informatique (Développement et Systèmes d'Information)
        </p>
      </header>

      {/* Profil */}
      <section className="content-section" aria-labelledby="profile-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 id="profile-title" className="content-title">Profil</h2>
        <p className="content-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
          Actuellement en 3ème année de BUT Informatique et alternant au sein de la DSI de Keolis Amiens, 
          je développe des applications métiers et participe à des projets numériques structurants.
          Motivé par l'innovation, la résolution de problèmes techniques et le travail d'équipe, 
          j'intégre l'année prochaine le cycle ingénieur informatique du CESI en alternance.
        </p>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.9375rem' }}>
          <div><strong>📱</strong> 07 83 00 12 24</div>
          <div><strong>✉️</strong> quentint2005@gmail.com</div>
          <div><strong>🌐</strong> quentin-tripognez.fr</div>
        </div>
      </section>

      <div className="content-grid">
        {/* Expériences Professionnelles */}
        <section className="content-section" aria-labelledby="experience-title">
          <h2 id="experience-title" className="content-title">
            💼 Expériences Professionnelles
          </h2>

          <div className="cv-timeline">
            <article className="cv-item">
              <div className="cv-item-header">
                <h3 className="cv-item-title">Alternant Systèmes d'Information</h3>
                <span className="cv-item-company">Keolis Amiens</span>
                <span className="cv-item-date">Septembre 2025 - Aujourd'hui</span>
              </div>
              <ul className="cv-item-list">
                <li>
                  <strong>Développement fullstack</strong> : conception, maintenance et amélioration d'applications métiers en PHP, React et SQL
                </li>
                <li>
                  <strong>Support et maintenance</strong> : diagnostic et résolution d'incidents techniques via système de ticketing
                </li>
                <li>
                  <strong>Gestion de projet</strong> : conception et déploiement en équipe d'une application centralisée pour plusieurs services
                </li>
              </ul>
            </article>

            <article className="cv-item">
              <div className="cv-item-header">
                <h3 className="cv-item-title">Stagiaire Développeur Java</h3>
                <span className="cv-item-company">Lenrek Informatique</span>
                <span className="cv-item-date">Mai 2025 - Juin 2025</span>
              </div>
              <ul className="cv-item-list">
                <li>
                  Développement Java : enrichissement fonctionnel d'une application existante
                </li>
                <li>
                  Conception, codage et tests de nouvelles fonctionnalités
                </li>
                <li>
                  Collaboration avec l'équipe de développement sur les bonnes pratiques
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Projets */}
        <section className="content-section" aria-labelledby="projects-title">
          <h2 id="projects-title" className="content-title">
            🚀 Projets
          </h2>

          <div className="cv-timeline">
            <article className="cv-item">
              <div className="cv-item-header">
                <h3 className="cv-item-title">Projet Personnel - Portfolio Photographe</h3>
                <span className="cv-item-company">Projet Freelance</span>
                <span className="cv-item-date">Janvier 2026 - Aujourd'hui</span>
              </div>
              <p className="cv-item-description">
                Conception et développement complet d'un portfolio web pour une photographe professionnelle.
              </p>
              <ul className="cv-item-list">
                <li>Définition du design en collaboration avec la cliente</li>
                <li>Développement front-end et back-end sur mesure</li>
                <li>Mise en ligne et optimisation pour le référencement</li>
              </ul>
            </article>

            <article className="cv-item">
              <div className="cv-item-header">
                <h3 className="cv-item-title">SAE - Système de gestion de location de véhicules</h3>
                <span className="cv-item-company">IUT de Lens</span>
                <span className="cv-item-date">Avril 2025</span>
              </div>
              <p className="cv-item-description">
                Conception d'une architecture logicielle complète en équipe de 4 personnes.
              </p>
              <ul className="cv-item-list">
                <li>Front-end Angular pour l'interface web</li>
                <li>Application mobile développée en parallèle</li>
                <li>API Laravel pour la gestion back-end</li>
                <li>Travail collaboratif avec méthodologie agile</li>
              </ul>
            </article>

            <article className="cv-item">
              <div className="cv-item-header">
                <h3 className="cv-item-title">Marathon du Web - Hackathon 36h</h3>
                <span className="cv-item-company">Compétition inter-IUT</span>
                <span className="cv-item-date">Avril 2025</span>
              </div>
              <p className="cv-item-description">
                Développement d'une application web de carnet de voyages en 36 heures avec une équipe de 7 personnes.
              </p>
              <ul className="cv-item-list">
                <li>Stack technique : Laravel (PHP)</li>
                <li>Gestion du temps et priorisation des fonctionnalités</li>
                <li>Collaboration intensive en équipe pluridisciplinaire</li>
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
                <h3 className="cv-item-title">BUT Informatique</h3>
                <span className="cv-item-company">IUT de Lens</span>
                <span className="cv-item-date">2023 - 2026</span>
              </div>
              <p className="cv-item-description">
                Formation en développement informatique et systèmes d'information.
                Alternance en 3ème année au sein de la DSI de Keolis Amiens.
              </p>
              <p className="cv-item-skills">
                <strong>Compétences acquises :</strong> Développement web fullstack (front et back), 
                bases de données, architecture logicielle, gestion de projet agile, 
                API REST, développement mobile
              </p>
            </article>

            <article className="cv-item">
              <div className="cv-item-header">
                <h3 className="cv-item-title">Baccalauréat Général</h3>
                <span className="cv-item-company">Lycée Malraux - Béthune</span>
                <span className="cv-item-date">2022 - 2023</span>
              </div>
              <p className="cv-item-description">
                Section européenne anglais. Spécialités : Mathématiques, 
                Numérique et Sciences de l'Informatique (NSI), Sciences de l'Ingénieur.
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
              <h3 className="skill-category-title">Front-end</h3>
              <ul className="skill-tags">
                <li className="skill-tag skill-expert">React</li>
                <li className="skill-tag skill-expert">Angular</li>
                <li className="skill-tag skill-expert">JavaScript</li>
                <li className="skill-tag skill-expert">HTML5</li>
                <li className="skill-tag skill-expert">CSS3</li>
                <li className="skill-tag skill-intermediate">TailwindCSS</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Back-end</h3>
              <ul className="skill-tags">
                <li className="skill-tag skill-expert">PHP (Laravel)</li>
                <li className="skill-tag skill-expert">SQL</li>
                <li className="skill-tag skill-intermediate">Python</li>
                <li className="skill-tag skill-intermediate">API REST</li>
                <li className="skill-tag skill-intermediate">Java</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Outils & Technologies</h3>
              <ul className="skill-tags">
                <li className="skill-tag skill-expert">Git</li>
                <li className="skill-tag skill-expert">VSCode</li>
                <li className="skill-tag skill-intermediate">Docker</li>
                <li className="skill-tag skill-intermediate">Unix/Linux</li>
                <li className="skill-tag skill-intermediate">Suite JetBrains</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3 className="skill-category-title">Autres Compétences</h3>
              <ul className="skill-tags">
                <li className="skill-tag skill-expert">Veille technologique</li>
                <li className="skill-tag skill-intermediate">Mathématiques appliquées</li>
                <li className="skill-tag skill-expert">Documentation technique</li>
                <li className="skill-tag skill-expert">Lecture anglais technique</li>
              </ul>
            </div>
          </div>

          <div className="skill-legend">
            <p className="skill-legend-item">
              <span className="skill-tag skill-expert">Usage courant</span> - Utilisation quotidienne et maîtrise avancée
            </p>
            <p className="skill-legend-item">
              <span className="skill-tag skill-intermediate">Connaissance des bases</span> - Bonne pratique et autonomie
            </p>
          </div>
        </section>

        {/* Compétences Transversales */}
        <section className="content-section" aria-labelledby="soft-skills-title">
          <h2 id="soft-skills-title" className="content-title">
            🤝 Soft Skills
          </h2>

          <div className="values-grid">
            <div className="value-card">
              <h3 className="value-title">📋 Gestion de projet</h3>
              <p className="value-description">
                Capacité à organiser et mener des projets de développement, de la 
                conception au déploiement, en respectant les délais et les objectifs.
              </p>
            </div>

            <div className="value-card">
              <h3 className="value-title">👥 Travail d'équipe</h3>
              <p className="value-description">
                Expérience en collaboration agile, communication efficace avec 
                les équipes techniques et métiers, partage des connaissances.
              </p>
            </div>

            <div className="value-card">
              <h3 className="value-title">🔄 Adaptabilité</h3>
              <p className="value-description">
                Capacité à apprendre rapidement de nouvelles technologies, 
                à s'adapter aux changements et à gérer les imprévus.
              </p>
            </div>

            <div className="value-card">
              <h3 className="value-title">✓ Rigueur</h3>
              <p className="value-description">
                Attention aux détails, respect des bonnes pratiques de 
                développement, tests et documentation systématiques.
              </p>
            </div>
          </div>
        </section>

        {/* Loisirs & Centres d'intérêt */}
        <section className="content-section" aria-labelledby="hobbies-title">
          <h2 id="hobbies-title" className="content-title">
            Engagement Associatif & Loisirs
          </h2>

          <div className="hobbies-grid">
            <div className="hobby-card" style={{ gridColumn: 'span 2' }}>
              <h3 className="hobby-title">🤿 Président-adjoint - Béthune Subaquatique</h3>
              <p className="hobby-description">
                <strong>Pilotage de projets associatifs :</strong> Gestion administrative, 
                prise de décisions stratégiques et coordination des activités du club.
              </p>
              <p className="hobby-description" style={{ marginTop: '0.5rem' }}>
                <strong>Encadrant de plongée :</strong> Formation pédagogique, 
                gestion de la sécurité et encadrement de groupes en milieu aquatique.
              </p>
              <p className="hobby-description" style={{ marginTop: '0.5rem' }}>
                <strong>Plongée sportive niveau national :</strong> Pratique intensive 
                développant discipline, rigueur et esprit d'équipe. Gestion du stress 
                et respect des procédures de sécurité.
              </p>
            </div>

            <div className="hobby-card">
              <h3 className="hobby-title">💻 Veille Technologique</h3>
              <p className="hobby-description">
                Suivi actif des tendances en développement web et systèmes d'information.
                Lecture de blogs techniques.
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
                Niveau B2 - Lu, écrit, parlé. Lecture de documentation technique.
              </span>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <aside className="info-box">
          <h2 className="info-box-title">📥 Me contacter</h2>
          <p className="info-box-description">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter 
            d'opportunités d'alternance, de projets ou pour toute autre question.
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

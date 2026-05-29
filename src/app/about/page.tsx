import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Développeur web passionné par l\'éco-conception et la performance. Découvrez mon parcours et mes compétences en développement durable.',
};

export default function AboutPage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">À propos</h1>
        <p className="page-description">
          Étudiant en BUT Informatique, passionné par le développement et la plongée
        </p>
      </header>

      <div className="content-grid">
        <section className="content-section" aria-labelledby="intro-title">
          <h2 id="intro-title" className="content-title">
            Qui suis-je ?
          </h2>
          <p className="content-text">
            Hello ! Je m'appelle Quentin Tripognez, étudiant en BUT Informatique à l'IUT de Lens.
            Passionné par le développement, je travaille chez Keolis Amiens en tant qu'alternant système d'information.
          </p>
          <p className="content-text">
            En parallèle de mes études, je pratique la plongée et la plongée sportive. Ces deux disciplines 
            m'ont appris la rigueur, l'esprit d'équipe et la gestion du stress, des qualités que j'applique 
            dans mes projets informatiques.
          </p>
          <p className="content-text">
            J'ai aussi développé ces qualités lors de mon emploi saisonnier en tant que soigneur animalier 
            chez Reptilis, un centre d'élevage de NAC (Nouveaux Animaux de Compagnie), où j'ai travaillé 
            durant les étés 2021, 2023 et 2024.
          </p>
        </section>

        <section className="content-section" aria-labelledby="skills-title">
          <h2 id="skills-title" className="content-title">
            Compétences clés
          </h2>
          <ul className="skills-list">
            <li className="skill-item">
              <strong>Développement Web :</strong> HTML, CSS, JavaScript, PHP (Laravel), 
              React, Angular, TailwindCSS
            </li>
            <li className="skill-item">
              <strong>Développement Backend :</strong> PHP/Laravel, Python (Flask), 
              SQL, PostgreSQL, API REST
            </li>
            <li className="skill-item">
              <strong>Programmation :</strong> Java, JavaFX, Python
            </li>
            <li className="skill-item">
              <strong>Outils :</strong> Git/GitHub, Docker, Unix/Linux, VSCode, 
              Suite JetBrains
            </li>
            <li className="skill-item">
              <strong>Méthodologies :</strong> Agile, SCRUM, travail en équipe
            </li>
          </ul>
        </section>

        <section className="content-section" aria-labelledby="approach-title">
          <h2 id="approach-title" className="content-title">
            Parcours
          </h2>
          <ol className="approach-list">
            <li className="approach-item">
              <strong>2019 :</strong> Stage d'observation en maintenance informatique 
              à la Polyclinique de Riaumont (Liévin)
            </li>
            <li className="approach-item">
              <strong>2022-2023 :</strong> Baccalauréat Général au Lycée Malraux (Béthune), 
              section européenne anglais. Spécialités : Mathématiques, NSI, Sciences de l'Ingénieur
            </li>
            <li className="approach-item">
              <strong>2021, 2023, 2024 :</strong> Emplois saisonniers comme soigneur animalier 
              chez Reptilis (Godewaersvelde)
            </li>
            <li className="approach-item">
              <strong>2023-2024 :</strong> 1ère année de BUT Informatique à l'IUT de Lens 
              (HTML/CSS, Java, SQL, Python, Unix, Réseaux)
            </li>
            <li className="approach-item">
              <strong>2024-2025 :</strong> 2ème année de BUT Informatique 
              (PHP/Laravel, PostgreSQL, Flask, approfondissement Java et Python)
            </li>
          </ol>
        </section>

        <section className="content-section" aria-labelledby="values-title">
          <h2 id="values-title" className="content-title">
            Centres d'intérêt
          </h2>
          <p className="content-text">
            <strong>🤿 Plongée sous-marine :</strong> Pratique régulière de la plongée 
            et de la plongée sportive. Président-adjoint du club Béthune Subaquatique. 
            Ces activités développent ma discipline, ma rigueur et mon esprit d'équipe.
          </p>
          <p className="content-text">
            <strong>🦎 Nature et animaux :</strong> Passionné par les animaux, notamment 
            les reptiles et les NAC. Expérience professionnelle en tant que soigneur animalier.
          </p>
          <p className="content-text">
            <strong>💻 Veille technologique :</strong> Intérêt constant pour les nouvelles 
            technologies et les évolutions du développement web et logiciel.
          </p>
        </section>
      </div>
    </div>
  );
}

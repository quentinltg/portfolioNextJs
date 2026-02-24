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
          Développeur web spécialisé en éco-conception, performance et accessibilité
        </p>
      </header>

      <div className="content-grid">
        <section className="content-section" aria-labelledby="intro-title">
          <h2 id="intro-title" className="content-title">
            Qui suis-je ?
          </h2>
          <p className="content-text">
            Je suis un développeur web passionné par la création de sites performants
            et respectueux de l'environnement. Mon objectif : prouver qu'excellence
            technique et sobriété numérique sont compatibles.
          </p>
          <p className="content-text">
            Chaque projet est une opportunité d'optimiser, de réduire l'empreinte
            carbone et d'améliorer l'expérience utilisateur. Je privilégie les
            solutions simples, robustes et durables.
          </p>
        </section>

        <section className="content-section" aria-labelledby="skills-title">
          <h2 id="skills-title" className="content-title">
            Compétences clés
          </h2>
          <ul className="skills-list">
            <li className="skill-item">
              <strong>Éco-conception web :</strong> Optimisation des ressources,
              réduction du poids des pages, lazy loading, code splitting
            </li>
            <li className="skill-item">
              <strong>Performance :</strong> Core Web Vitals, Lighthouse audits,
              cache strategies, service workers
            </li>
            <li className="skill-item">
              <strong>Accessibilité :</strong> WCAG 2.1 AA/AAA, navigation clavier,
              ARIA, tests avec lecteurs d'écran
            </li>
            <li className="skill-item">
              <strong>Technologies :</strong> Next.js, React, TypeScript, CSS
              Modules, Node.js
            </li>
            <li className="skill-item">
              <strong>Outils :</strong> Git, ESLint, Prettier, Lighthouse, WebPageTest
            </li>
          </ul>
        </section>

        <section className="content-section" aria-labelledby="approach-title">
          <h2 id="approach-title" className="content-title">
            Ma démarche
          </h2>
          <ol className="approach-list">
            <li className="approach-item">
              <strong>Analyse des besoins :</strong> Identifier les fonctionnalités
              essentielles et éliminer le superflu
            </li>
            <li className="approach-item">
              <strong>Conception sobre :</strong> Privilégier la simplicité et
              l'efficacité dans le design et le code
            </li>
            <li className="approach-item">
              <strong>Optimisation continue :</strong> Mesurer, analyser et améliorer
              la performance à chaque itération
            </li>
            <li className="approach-item">
              <strong>Tests rigoureux :</strong> Valider l'accessibilité, la
              performance et la compatibilité
            </li>
            <li className="approach-item">
              <strong>Documentation :</strong> Garantir la maintenabilité et le
              transfert de connaissances
            </li>
          </ol>
        </section>

        <section className="content-section" aria-labelledby="values-title">
          <h2 id="values-title" className="content-title">
            Valeurs
          </h2>
          <p className="content-text">
            <strong>Sobriété numérique :</strong> Concevoir des sites légers qui
            consomment moins d'énergie et de bande passante.
          </p>
          <p className="content-text">
            <strong>Inclusivité :</strong> Rendre le web accessible à tous, quel
            que soit le handicap ou le matériel utilisé.
          </p>
          <p className="content-text">
            <strong>Transparence :</strong> Partager mes pratiques, documenter mes
            choix techniques et contribuer à la communauté.
          </p>
        </section>
      </div>
    </div>
  );
}
